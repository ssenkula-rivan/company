-- Migration: Add email column to testimonials table
-- Date: 2026-05-05

-- Add email column if it doesn't exist
ALTER TABLE testimonials 
ADD COLUMN IF NOT EXISTS email VARCHAR(255);

-- Add index for email lookups
CREATE INDEX IF NOT EXISTS idx_testimonials_email ON testimonials(email);
