# 🚀 Deployment Guide - Moyhe Hair Branding

This guide explains how to deploy your website on different hosting platforms. All necessary configuration files are included.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure you:
1. ✅ Build the project: `npm run build`
2. ✅ Test the build locally: `npm run preview`
3. ✅ Commit all changes to Git

---

## 🌐 Deployment Options

### 1️⃣ **Vercel** (Recommended - Easiest)

**Configuration:** `vercel.json` ✅ Already configured

**Steps:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

**Or via GitHub:**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

**Features:**
- ✅ Automatic deployments on push
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Zero configuration needed

---

### 2️⃣ **Netlify**

**Configuration:** `netlify.toml` ✅ Already configured

**Steps:**
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy`
3. For production: `netlify deploy --prod`

**Or via GitHub:**
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Deploy automatically

**Features:**
- ✅ Automatic deployments
- ✅ Free SSL certificate
- ✅ Form handling
- ✅ Serverless functions support

---

### 3️⃣ **Shared Hosting (cPanel, Hostinger, etc.)**

**Configuration:** `public/.htaccess` ✅ Already configured

**Steps:**
1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your hosting via FTP/cPanel
3. The `.htaccess` file will handle routing automatically

**Important:**
- Make sure `.htaccess` is in the root directory (same level as `index.html`)
- Ensure Apache `mod_rewrite` is enabled

---

### 4️⃣ **VPS / Dedicated Server (Nginx)**

**Configuration:** `nginx.conf` ✅ Example provided

**Steps:**
1. Build the project: `npm run build`
2. Upload `dist` folder to your server (e.g., `/var/www/moyhe-hair/dist`)
3. Update `nginx.conf` with your domain name
4. Copy the server block to your Nginx config: `/etc/nginx/sites-available/moyhe-hair`
5. Create symlink: `sudo ln -s /etc/nginx/sites-available/moyhe-hair /etc/nginx/sites-enabled/`
6. Test config: `sudo nginx -t`
7. Reload Nginx: `sudo systemctl reload nginx`

**SSL Certificate (Recommended):**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

### 5️⃣ **GitHub Pages**

**Steps:**
1. Install gh-pages: `npm i -D gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Update `vite.config.ts`:
   ```ts
   export default defineConfig({
     base: '/repository-name/',
     // ... rest of config
   })
   ```
4. Run: `npm run deploy`

---

## 🔧 Build Commands Reference

| Platform | Build Command | Output Directory |
|----------|---------------|------------------|
| Vercel | `npm run build` | `dist` |
| Netlify | `npm run build` | `dist` |
| Others | `npm run build` | `dist` |

---

## ✅ Post-Deployment Verification

After deploying, test these URLs:
- ✅ Homepage: `https://yourdomain.com/`
- ✅ Services: `https://yourdomain.com/services`
- ✅ Gallery: `https://yourdomain.com/gallery`
- ✅ Blog: `https://yourdomain.com/blog`
- ✅ Contact: `https://yourdomain.com/contact`

**Check for:**
- All pages load without 404 errors
- Images display correctly
- Navigation works smoothly
- Direct URL access works (refresh on any page)

---

## 🐛 Troubleshooting

### Problem: 404 on page refresh
**Solution:** Ensure the correct config file is in place:
- Vercel: `vercel.json`
- Netlify: `netlify.toml`
- Apache: `.htaccess` in root
- Nginx: Server block with `try_files`

### Problem: Images not loading
**Solution:** 
- Check image paths start with `/images/`
- Verify images are in `public/images/` folder
- Clear browser cache

### Problem: Blank page after deployment
**Solution:**
- Check browser console for errors
- Verify build completed successfully
- Check if `base` URL is set correctly in `vite.config.ts`

---

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for errors (F12)
2. Verify all configuration files are uploaded
3. Ensure build completed without errors
4. Check hosting platform documentation

---

**Current Status:** ✅ All configuration files created and ready for deployment on any platform!
