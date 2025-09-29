# Production Deployment Checklist

## ✅ Completed

- [x] Remove Lovable references from meta tags
- [x] Remove Twitter/social media placeholder links
- [x] Configure robots.txt for SEO
- [x] Create sitemap.xml
- [x] Add manifest.json for PWA support
- [x] Document Supabase environment variable strategy
- [x] Create .env.example file
- [x] Update .gitignore for environment variables
- [x] Add comprehensive ENVIRONMENT.md documentation

## 🔧 Manual Steps Required

### 1. Update URLs (CRITICAL)

Replace `yourusername` with your actual GitHub username in:

- [ ] `index.html` line 13 - Open Graph URL
- [ ] `public/sitemap.xml` lines 3, 9 - Page URLs
- [ ] `public/robots.txt` line 6 - Sitemap location

**Find and replace:** `yourusername.github.io` → `your-actual-username.github.io`

### 2. Environment Variables Setup

#### Local Development:
```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local with your actual Supabase credentials
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

#### GitHub Secrets:
1. Go to Repository Settings → Secrets and variables → Actions
2. Add two secrets:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`

### 3. Supabase Security Configuration (CRITICAL)

#### Enable Row Level Security:
```sql
-- In Supabase SQL Editor
ALTER TABLE signup_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (for demo requests)
CREATE POLICY "Allow public inserts"
ON signup_submissions
FOR INSERT
WITH CHECK (true);

-- Restrict reads to authenticated users
CREATE POLICY "Restrict reads to authenticated users"
ON signup_submissions
FOR SELECT
USING (auth.uid() IS NOT NULL);
```

#### Domain Restrictions:
1. Go to Supabase Dashboard → Settings → API
2. Add allowed domains:
   - `localhost:8080` (development)
   - `your-username.github.io` (production)

### 4. Favicon & Icons

Current status: Using placeholder favicon.ico

**To update:**
1. Create a SilentSpeak logo (🔉 icon or custom design)
2. Generate favicon files:
   - `favicon.ico` (48x48)
   - `icon-192.png` (192x192)
   - `icon-512.png` (512x512)
   - `apple-touch-icon.png` (180x180)
   - `og-image.jpg` (1200x630 for social sharing)
3. Place in `public/` folder

**Recommended tool:** [favicon.io](https://favicon.io/) or [realfavicongenerator.net](https://realfavicongenerator.net/)

### 5. Image Optimization (HIGH PRIORITY)

```bash
# Current image sizes:
- erica_picture_cartoon.png: 1.15 MB ⚠️ TOO LARGE
- hero-healthcare.jpg: 154.73 KB ✅ Good
- surgery-team.jpg: 73.89 KB ✅ Good
- therapy-group.jpg: 60.51 KB ✅ Good
- david_fw_profile.jpg: 117.26 KB ✅ Good
```

**Action Required:**
Optimize `erica_picture_cartoon.png` to <200KB using:
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- ImageMagick: `convert erica_picture_cartoon.png -quality 85 -resize 400x400 erica_picture_cartoon_optimized.png`

### 6. Update GitHub Actions Workflow

Edit `.github/workflows/deploy.yml` to inject environment variables:

```yaml
- name: Build
  env:
    VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
    VITE_SUPABASE_PUBLISHABLE_KEY: ${{ secrets.VITE_SUPABASE_PUBLISHABLE_KEY }}
  run: npm run build
```

## 🎯 Optional Improvements

### Analytics
- [ ] Add Google Analytics or Plausible
- [ ] Add conversion tracking for demo requests
- [ ] Set up Google Search Console

### Performance
- [ ] Enable Gzip/Brotli compression (automatic on GitHub Pages)
- [ ] Implement lazy loading for below-fold images
- [ ] Add loading states for demo form

### Accessibility
- [ ] Run Lighthouse audit (target 90+ scores)
- [ ] Test with screen reader (NVDA/JAWS)
- [ ] Ensure keyboard navigation works everywhere

### Security
- [ ] Add CAPTCHA to demo request form (hCaptcha/reCAPTCHA)
- [ ] Implement rate limiting in Supabase Edge Functions
- [ ] Set up email notifications for demo requests

### Content
- [ ] Create actual Privacy Policy page
- [ ] Create Terms of Service page
- [ ] Add contact information or contact form

## 📋 Pre-Launch Checklist

Before deploying to production:

- [ ] Run `npm run build` locally - verify no errors
- [ ] Run `npm run lint` - fix all errors (warnings OK)
- [ ] Test all navigation links work
- [ ] Test demo request form submission
- [ ] Test on mobile devices (iOS & Android)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify all images load correctly
- [ ] Check console for errors
- [ ] Test 404 page works
- [ ] Verify favicon displays correctly
- [ ] Test smooth scrolling to Solutions section

## 🚀 Deployment Steps

1. **Commit all changes:**
   ```bash
   git add .
   git commit -m "Production ready: Remove Lovable branding, add SEO, configure env vars"
   git push origin main
   ```

2. **Verify GitHub Actions deployment:**
   - Go to Repository → Actions tab
   - Watch the deployment workflow
   - Check for any errors

3. **Enable GitHub Pages:**
   - Repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (auto-created by workflow)

4. **Verify live site:**
   - Visit `https://your-username.github.io/silentspeak-website/`
   - Test all functionality
   - Check browser console for errors

## 📊 Post-Launch Monitoring

- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Supabase usage/rate limits
- [ ] Check demo request submissions
- [ ] Monitor error rates
- [ ] Track page load performance

## 🐛 Known Issues to Monitor

1. **Carousel on mobile:** Test swipe gestures work smoothly
2. **Form validation:** Ensure proper error messages display
3. **Image loading:** Monitor for any 404s on images
4. **Routing:** Ensure deep links work with GitHub Pages base path

## 📞 Support

For issues or questions:
- See [ENVIRONMENT.md](./ENVIRONMENT.md) for security details
- See [CLAUDE.md](./CLAUDE.md) for development guidance
- See [README.md](./README.md) for project overview