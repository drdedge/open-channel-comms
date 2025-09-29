# Environment Variables & Supabase Configuration

## The Challenge with GitHub Pages

GitHub Pages is a **static site hosting service**, which means:
- No server-side code execution
- No environment variables at runtime
- All code runs in the user's browser

This makes it challenging to hide API keys completely.

## Current Supabase Setup

The Supabase configuration is located in `src/integrations/supabase/client.ts` with the following structure:

```typescript
const SUPABASE_URL = VITE_SUPABASE_URL || "hardcoded-url"
const SUPABASE_PUBLISHABLE_KEY = VITE_SUPABASE_PUBLISHABLE_KEY || "hardcoded-key"
```

## Why This Is (Relatively) Safe

1. **Supabase Anon Key**: The key exposed is the **anon/publishable key**, not the service role key
2. **Row Level Security (RLS)**: Supabase's security model relies on RLS policies, not key secrecy
3. **Browser-Based**: All client-side apps expose their API keys in network requests

## Recommended Security Approach

### 1. **Use Supabase RLS Policies** (CRITICAL)

Enable Row Level Security on your `signup_submissions` table:

```sql
-- Enable RLS
ALTER TABLE signup_submissions ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anyone (for demo requests)
CREATE POLICY "Allow public inserts"
ON signup_submissions
FOR INSERT
WITH CHECK (true);

-- Restrict reads to authenticated users only
CREATE POLICY "Restrict reads to authenticated users"
ON signup_submissions
FOR SELECT
USING (auth.uid() IS NOT NULL);
```

### 2. **Enable Supabase Email Confirmations**

In Supabase Dashboard:
- Go to Authentication > Settings
- Enable "Confirm email" for new signups
- Add CAPTCHA protection

### 3. **Rate Limiting**

Implement rate limiting in your Supabase Edge Functions or use Supabase's built-in rate limiting:

```typescript
// In your demo request handler
const rateLimitKey = `rate_limit:${email}`;
const attempts = await supabase.from('rate_limits').select('count').eq('key', rateLimitKey);

if (attempts > 5) {
  throw new Error('Too many requests');
}
```

### 4. **Domain Restrictions** (Best Practice)

In Supabase Dashboard:
- Go to Settings > API
- Under "API Settings" > "URL Configuration"
- Add allowed domains: `yourusername.github.io`
- This prevents your API key from working on other domains

### 5. **Use Build-Time Environment Variables** (Recommended)

While not perfect for GitHub Pages, you can use Vite's environment variables:

#### Local Development (.env.local)
```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

#### GitHub Actions Secrets
Add to your repository secrets:
1. Go to GitHub Repository > Settings > Secrets and variables > Actions
2. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`

#### Update `.github/workflows/deploy.yml`
```yaml
- name: Build
  env:
    VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
    VITE_SUPABASE_PUBLISHABLE_KEY: ${{ secrets.VITE_SUPABASE_PUBLISHABLE_KEY }}
  run: npm run build
```

This way:
- Keys are not in your git repository
- They're injected at build time
- They're still exposed in the final bundle (unavoidable for static sites)
- But they're not in your source code

## Alternative: Serverless Functions

For maximum security, consider:

1. **Netlify/Vercel**: Both support serverless functions with true environment variables
2. **Cloudflare Pages**: Supports Workers for server-side logic
3. **AWS Amplify**: Full backend integration

Example with Netlify Functions:
```typescript
// netlify/functions/submit-demo.ts
export async function handler(event) {
  const { name, email } = JSON.parse(event.body);

  // Server-side Supabase call with service role key
  const { data, error } = await supabase
    .from('signup_submissions')
    .insert([{ name, email }]);

  return { statusCode: 200, body: JSON.stringify(data) };
}
```

## Current Recommendation for This Project

**For GitHub Pages deployment:**

1. ✅ Keep the current setup (anon key is safe with proper RLS)
2. ✅ Implement strict RLS policies in Supabase
3. ✅ Add domain restrictions in Supabase Dashboard
4. ✅ Enable rate limiting
5. ✅ Use GitHub Secrets for build-time injection (keeps keys out of git)
6. ⚠️ Accept that keys will be visible in production bundle (standard for static sites)

**For production with higher security needs:**
- Migrate to Netlify, Vercel, or Cloudflare Pages
- Use serverless functions for all Supabase calls
- Keep service role keys server-side only

## Setup Instructions

### Step 1: Create .env.local
```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key
```

### Step 2: Add to .gitignore
```
.env.local
.env*.local
```

### Step 3: Update GitHub Secrets
```bash
# In GitHub Repository Settings > Secrets
VITE_SUPABASE_URL = your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY = your_anon_key
```

### Step 4: Update deploy.yml
Add environment variables to the build step as shown above.

## Security Checklist

- [ ] RLS policies enabled on all tables
- [ ] Domain restrictions configured in Supabase
- [ ] Rate limiting implemented
- [ ] Email confirmation enabled
- [ ] CAPTCHA protection added
- [ ] GitHub Secrets configured
- [ ] .env.local in .gitignore
- [ ] Service role key NEVER exposed client-side

## Additional Resources

- [Supabase Security Best Practices](https://supabase.com/docs/guides/auth/row-level-security)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [GitHub Actions Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)