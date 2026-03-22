# Complete Deployment Guide - Sabse Sasta Option (₹199/year)

## 🎯 Final Result
- Website: `mystictarot.com` ya `mystictarot.in`
- Total Cost: ₹199/year only
- Database: Tumhare control mein
- SSL Certificate: Free
- Professional email: Free

## 📋 Step-by-Step Process

### Step 1: Domain Purchase (₹199/year)

#### Option A: mystictarot.com (Recommended)
**BigRock se kharido:**
1. Go to bigrock.in
2. Search "mystictarot.com"
3. Add to cart (₹199 first year)
4. Complete payment
5. Domain tumhara ho gaya!

#### Option B: mystictarot.in (Indian domain)
**ResellerClub se:**
1. Go to resellerclub.com
2. Search "mystictarot.in"
3. Price: ₹149/year
4. Purchase karo

### Step 2: Free Hosting Setup (Vercel)

#### Create Vercel Account
1. Go to vercel.com
2. Sign up with GitHub/Google
3. Free account banao

#### Install Vercel CLI
```bash
# Terminal mein run karo
npm install -g vercel
```

### Step 3: Database Setup (Free - Supabase)

#### Create Supabase Account
1. Go to supabase.com
2. Sign up (free account)
3. Create new project:
   - Name: "mystic-tarot-gems"
   - Password: Strong password banao
   - Region: "Southeast Asia (Singapore)" select karo

#### Get Database URL
1. Project dashboard mein jao
2. Settings → Database
3. Connection string copy karo:
```
postgresql://postgres:[YOUR-PASSWORD]@[PROJECT-REF].supabase.co:5432/postgres
```

### Step 4: Deploy Website

#### Prepare Project
```bash
# Tumhare project folder mein
cd mystic-tarot-gems

# Environment file banao
echo "DATABASE_URL=your-supabase-url-here" > .env.local
echo "NEXTAUTH_SECRET=your-secret-key-here" >> .env.local
echo "NEXTAUTH_URL=https://mystictarot.com" >> .env.local
```

#### Deploy to Vercel
```bash
# Login karo
vercel login

# Deploy karo
vercel

# Questions ka answer:
# Set up and deploy? Y
# Which scope? (your account)
# Link to existing project? N
# Project name: mystic-tarot-gems
# In which directory? ./
# Want to override settings? N
```

#### Production Deploy
```bash
# Production mein deploy karo
vercel --prod
```

### Step 5: Connect Domain

#### Add Domain to Vercel
```bash
# Domain add karo
vercel domains add mystictarot.com
vercel domains add www.mystictarot.com
```

#### Update DNS Settings
**BigRock mein jao:**
1. Login to BigRock account
2. My Domains → Manage DNS
3. Add these records:

**A Records:**
- Name: `@` → Value: `76.76.19.61`
- Name: `www` → Value: `76.76.19.61`

**CNAME Record:**
- Name: `www` → Value: `cname.vercel-dns.com`

### Step 6: Database Migration

#### Setup Database Tables
```bash
# Database tables banao
npx prisma db push

# Sample data add karo
npx prisma db seed
```

### Step 7: Environment Variables (Production)

#### Add to Vercel
```bash
# Production environment variables
vercel env add DATABASE_URL
# Paste your Supabase URL

vercel env add NEXTAUTH_SECRET
# Paste: mystic-tarot-secret-key-2024

vercel env add NEXTAUTH_URL
# Paste: https://mystictarot.com
```

### Step 8: Final Deployment
```bash
# Final deploy with all settings
vercel --prod
```

## 🎉 Verification Checklist

### Test Your Website
- [ ] `mystictarot.com` opens
- [ ] `www.mystictarot.com` redirects properly
- [ ] All pages load (Home, Services, Shop, About, Contact, Booking)
- [ ] Forms work properly
- [ ] Mobile responsive
- [ ] SSL certificate active (https://)

### Database Check
- [ ] Supabase dashboard accessible
- [ ] Tables created properly
- [ ] Sample data visible

## 📧 Free Professional Email Setup

### Using Zoho Mail (Free)
1. Go to zoho.com/mail
2. Sign up for free plan
3. Add domain: mystictarot.com
4. Verify domain ownership
5. Create email: info@mystictarot.com

### Email Verification Steps
1. Zoho will give you DNS records
2. Add to BigRock DNS:
   - MX Record: `mx.zoho.in` (Priority: 10)
   - TXT Record: Verification code from Zoho

## 💰 Total Cost Breakdown

### One-Time Setup
- Domain (mystictarot.com): ₹199/year
- Hosting (Vercel): FREE
- Database (Supabase): FREE
- SSL Certificate: FREE
- Email (Zoho): FREE
- **Total: ₹199/year**

### Renewal Costs
- Domain renewal: ₹999/year (after first year)
- Everything else: FREE
- **Annual cost after first year: ₹999**

## 🔧 Maintenance & Updates

### Regular Tasks
```bash
# Update website
git add .
git commit -m "Update website"
git push

# Vercel automatically deploys
```

### Database Backup
1. Supabase dashboard → Database → Backups
2. Download backup weekly
3. Store safely

## 🆘 Troubleshooting

### Common Issues

#### Domain not working?
- Wait 24-48 hours for DNS propagation
- Check DNS settings in BigRock
- Verify Vercel domain configuration

#### Database connection error?
- Check Supabase URL in environment variables
- Verify database is running
- Check network connectivity

#### Website not updating?
```bash
# Force new deployment
vercel --prod --force
```

## 📞 Support Contacts

### Domain Issues
- BigRock Support: 1800-123-8880
- Email: support@bigrock.in

### Hosting Issues
- Vercel Discord: vercel.com/discord
- Documentation: vercel.com/docs

### Database Issues
- Supabase Discord: supabase.com/discord
- Documentation: supabase.com/docs

## 🚀 Go Live Timeline

### Day 1: Purchase & Setup
- Buy domain (5 minutes)
- Create accounts (10 minutes)
- Deploy website (15 minutes)

### Day 2-3: DNS Propagation
- Wait for domain to propagate
- Test all functionality
- Setup email

### Day 4: Launch!
- Website fully live
- All features working
- Ready for customers

## 📈 Next Steps (Optional)

### Analytics (Free)
- Google Analytics setup
- Vercel Analytics enable
- Monitor traffic

### SEO Optimization
- Google Search Console
- Submit sitemap
- Optimize meta tags

### Marketing
- Social media setup
- Business listings
- Customer acquisition

---

**Total Investment: ₹199 only!**
**Timeline: 2-3 days**
**Result: Professional website live on mystictarot.com**