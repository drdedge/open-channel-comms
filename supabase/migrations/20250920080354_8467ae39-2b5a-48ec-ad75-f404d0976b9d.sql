-- Create signup_submissions table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.signup_submissions (
  id bigint primary key generated always as identity,
  user_id uuid,
  name text NOT NULL,
  email text NOT NULL,
  organisation text,
  reason text,
  metadata jsonb,
  submitted_at timestamp with time zone DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.signup_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for signup submissions
CREATE POLICY "Allow insert from web" 
ON public.signup_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated select own" 
ON public.signup_submissions 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Authenticated update own" 
ON public.signup_submissions 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Authenticated delete own" 
ON public.signup_submissions 
FOR DELETE 
USING (auth.uid() = user_id);