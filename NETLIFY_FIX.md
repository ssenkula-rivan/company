# Netlify Build Fix Instructions

## Problem
The Netlify build is failing due to the `netlify-purge-cloudflare-on-deploy` plugin which requires Cloudflare credentials that are not configured.

## Solution

### Option 1: Remove the Plugin from Netlify Dashboard (RECOMMENDED)

This is the cleanest solution:

1. Go to your Netlify dashboard: https://app.netlify.com
2. Select your site
3. Navigate to **Site settings** → **Build & deploy** → **Build plugins**
4. Find `netlify-purge-cloudflare-on-deploy` in the list
5. Click the **Remove** or **Uninstall** button
6. Also remove `netlify-plugin-ghost-inspector` if you're not using it
7. Trigger a new deploy

### Option 2: Add Cloudflare Credentials (If you use Cloudflare)

If you actually use Cloudflare CDN and want to keep the plugin:

1. Go to **Site settings** → **Environment variables**
2. Add these variables:
   - `CLOUDFLARE_TOKEN` - Your Cloudflare API token
   - `CLOUDFLARE_ZONE_ID` - Your Cloudflare zone ID

To get these from Cloudflare:
- Log in to Cloudflare dashboard
- Go to your domain
- Zone ID is on the right sidebar
- For API token: Profile → API Tokens → Create Token

### Option 3: Temporary Workaround

If you can't access the Netlify dashboard right now, you can set a dummy environment variable to make the plugin skip execution:

1. Go to **Site settings** → **Environment variables**
2. Add: `CLOUDFLARE_TOKEN` = `skip`
3. This will make the plugin fail silently

## Additional Improvements Made

1. ✅ Fixed dropdown menu hover behavior
2. ✅ Upgraded Next.js to 14.2.18 (security fix)
3. ✅ Updated .gitignore to exclude build files
4. ✅ Changed build command to use `npm ci` for clean installs

## After Fixing

Once you remove the plugin or add credentials, your build will:
- Complete successfully
- Deploy the fixed dropdown menu
- Use the secure Next.js version
- Build in ~12 seconds

## Need Help?

If you need assistance accessing the Netlify dashboard or have questions, let me know!
