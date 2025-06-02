# Contact Form Setup with Resend

This guide will help you set up the contact form using Resend, a modern email API service.

## 🚀 Quick Setup

### 1. Get Your Resend API Key

1. **Sign up for Resend**: Go to [resend.com](https://resend.com) and create a free account
2. **Verify your email**: Check your email and verify your account
3. **Get your API key**: 
   - Go to [API Keys](https://resend.com/api-keys)
   - Click "Create API Key"
   - Give it a name (e.g., "Portfolio Contact Form")
   - Copy the generated API key

### 2. Configure Environment Variables

1. **Update `.env.local`**: Replace `your_resend_api_key_here` with your actual API key:
   ```bash
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

### 3. Customize Email Settings (Optional)

In `app/api/send-email/route.js`, you can customize:

- **Recipient email**: Change `3570kumarraushan@gmail.com` to your email
- **Sender email**: For production, you can use your own domain
- **Email template**: Modify the HTML template as needed

## 📧 How It Works

1. **User fills the form**: Name, email, and message
2. **Form validation**: Client-side and server-side validation
3. **Email sent via Resend**: Professional HTML email template
4. **Confirmation**: User sees success/error message
5. **You receive email**: Formatted email with sender details

## 🎨 Features

✅ **Professional Email Template**: Beautiful HTML email with your branding  
✅ **Form Validation**: Client and server-side validation  
✅ **Loading States**: Spinner and disabled state during submission  
✅ **Error Handling**: Comprehensive error messages  
✅ **Success Feedback**: Clear confirmation messages  
✅ **Responsive Design**: Works on all devices  

## 🆓 Resend Free Tier

- **3,000 emails/month** for free
- **No credit card required**
- **100 emails/day limit**
- Perfect for portfolio websites!

## 🛠️ Testing

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Test the form**:
   - Go to your contact section
   - Fill out all fields
   - Click "Send Message"
   - Check for success message

3. **Check your email**: You should receive a formatted email with the form submission

## 🚨 Production Notes

- **Domain verification**: For production, verify your domain in Resend
- **Custom sender**: Use your own domain (e.g., `contact@yourdomain.com`)
- **Rate limiting**: Consider adding rate limiting for production
- **Spam protection**: Add CAPTCHA if needed

## 📞 Support

If you encounter any issues:

1. **Check the console**: Look for error messages in browser/server console
2. **Verify API key**: Make sure your Resend API key is correct
3. **Check Resend dashboard**: View sending logs at [resend.com/emails](https://resend.com/emails)

## 🔐 Security

- ✅ API key stored in environment variables
- ✅ Server-side validation
- ✅ No sensitive data exposed to client
- ✅ Input sanitization included

Your contact form is now ready! 🎉
