# Mystic Tarot & Gems - Deployment Guide

## Quick Deployment to Vercel (Recommended)

### Prerequisites
- Domain purchased from registrar
- Vercel account created
- Database setup (Supabase recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
# From your project directory
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: mystic-tarot-gems
# - Directory: ./
# - Override settings? No
```

### Step 4: Add Environment Variables
```bash
# Add production environment variables
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add NEXTAUTH_URL
```

### Step 5: Deploy to Production
```bash
vercel --prod
```

### Step 6: Add Custom Domain
```bash
vercel domains add yourdomain.com
vercel domains add www.yourdomain.com
```

### Step 7: Update DNS Settings
Go to your domain registrar and add:
- **A Record**: `@` → `76.76.19.61`
- **CNAME**: `www` → `cname.vercel-dns.com`

## Alternative: Manual Hosting Setup

### For Shared Hosting (Hostinger/SiteGround)

1. **Build the project:**
```bash
npm run build
npm run export  # If using static export
```

2. **Upload files:**
- Upload `out/` folder contents to `public_html/`
- Or upload `build/` folder for server-side rendering

3. **Database Setup:**
- Create MySQL/PostgreSQL database in hosting panel
- Update connection strings
- Run database migrations

4. **SSL Setup:**
- Enable SSL in hosting panel
- Force HTTPS redirects

## Domain Recommendations

### Budget Domains (India)
- **BigRock**: ₹199/year (.com)
- **HostGator India**: ₹149/year
- **ResellerClub**: ₹299/year

### Premium Domains
- **GoDaddy**: ₹999/year (.com)
- **Namecheap**: $12/year
- **Google Domains**: $12/year

## Database Hosting Options

### Free Tier
- **Supabase**: 500MB free
- **PlanetScale**: 5GB free
- **Railway**: $5/month after trial

### Setup Supabase (Recommended)
1. Go to supabase.com
2. Create new project
3. Copy database URL
4. Add to Vercel environment variables

## Email Setup

### Professional Email
- **Google Workspace**: ₹136/month
- **Zoho Mail**: Free for 5 users
- **Microsoft 365**: ₹125/month

### Email Configuration
```
Email: info@mystictarotgems.com
SMTP: smtp.gmail.com (if using Gmail)
Port: 587
```

## Cost Summary

### Minimal Setup (₹200/year)
- Domain: ₹199/year
- Hosting: Free (Vercel)
- Database: Free (Supabase)
- Email: Free (Zoho)

### Professional Setup (₹8,000/year)
- Domain: ₹999/year
- Hosting: ₹4,000/year
- Database: ₹1,800/year
- Email: ₹1,632/year

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All pages accessible
- [ ] Forms working
- [ ] Mobile responsive
- [ ] SSL certificate active
- [ ] Google Analytics setup
- [ ] Search Console setup
- [ ] Social media links working
- [ ] Contact forms sending emails

## Maintenance

### Regular Tasks
- Update dependencies monthly
- Monitor website performance
- Backup database weekly
- Check for security updates
- Monitor uptime and errors

### Monitoring Tools
- **Vercel Analytics** (free)
- **Google Analytics** (free)
- **UptimeRobot** (free monitoring)

## Support

If you need help with deployment:
1. Check Vercel documentation
2. Contact domain registrar support
3. Use hosting provider's help desk
4. Community forums (Stack Overflow, Reddit)