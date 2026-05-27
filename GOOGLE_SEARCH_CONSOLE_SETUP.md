# Google Search Console Setup Guide for AMODZ Properties

## Step 1: Go to Google Search Console
Visit: https://search.google.com/search-console/

## Step 2: Add Your Property
1. Click "Add Property"
2. Choose "URL prefix" method
3. Enter: `https://www.amodzporpertieslimited.com`

## Step 3: Verify Ownership
Google will give you a verification code. You have several options:

### Option A: HTML Meta Tag (Recommended)
1. Google will give you a meta tag like:
   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
2. Add this to your `pages/_document.js` file in the `<Head>` section
3. The file already has a placeholder - just replace "your-verification-code" with your actual code

### Option B: HTML File Upload
1. Download the HTML file from Google
2. Upload it to the `public` folder
3. It will be accessible at: `https://www.amodzporpertieslimited.com/google[code].html`

### Option C: DNS Verification
1. Add a TXT record to your domain DNS
2. Use the code Google provides

## Step 4: Submit Your Sitemap
After verification:
1. Go to "Sitemaps" in the left menu
2. Add new sitemap: `https://www.amodzporpertieslimited.com/sitemap.xml`
3. Click "Submit"

## Step 5: Monitor Your Site
- Check "Performance" for search analytics
- Review "Coverage" for indexing issues
- Monitor "Enhancements" for mobile usability
- Check "Security & Manual Actions" for any issues

## Your Sitemap URL
```
https://www.amodzporpertieslimited.com/sitemap.xml
```

## Important Pages to Monitor
- Homepage: /
- Properties: /properties
- Plots: /plots
- Services: /services
- About: /about
- Contact: /contact
- Projects: /projects
- Blog: /blog

## Notes
- Verification can take 24-48 hours
- Sitemap indexing may take a few days
- Check back regularly for insights and issues
