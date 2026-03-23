# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with your email: `vmadan6113@gmail.com`
3. Verify your email

## Step 2: Create Email Service
1. Go to "Email Services" in dashboard
2. Click "Add New Service"
3. Select "Gmail"
4. Connect your Gmail account: `vmadan6113@gmail.com`
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template:

**Subject:** New Booking Request - Mystic Tarot & Gems

**Content:**
```
🔮 NEW BOOKING REQUEST

👤 Name: {{from_name}}
📧 Email: {{from_email}}
📱 Phone: {{phone}}
🎯 Service: {{reading_type}}
📅 Preferred Date/Time: {{preferred_datetime}}

💬 Message:
{{message}}

---
Reply to customer: {{from_email}}
Phone: {{phone}}
```

4. Copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" settings
2. Copy your **Public Key** (e.g., `user_abc123xyz`)

## Step 5: Update Environment Variables
Update your `.env` file:
```
EMAILJS_SERVICE_ID="your_service_id_here"
EMAILJS_TEMPLATE_ID="your_template_id_here"
EMAILJS_PUBLIC_KEY="your_public_key_here"
```

## Step 6: Deploy to Vercel
1. Add environment variables in Vercel dashboard
2. Redeploy your application

## Free Limits
- 200 emails/month (Free plan)
- Upgrade to paid plan for more emails if needed

## Test Email
After setup, test the booking form to ensure emails are received at `vmadan6113@gmail.com`