# Deploying AgriPredict to Render.com

This guide provides step-by-step instructions for deploying the AgriPredict ML Model to Render.com's free tier.

## Prerequisites
- Your AgriPredict code pushed to a GitHub repository
- A Render.com account (free)

## Deployment Steps

### 1. Prepare Your Repository
Ensure your repository contains these files:
- `requirements.txt` - Lists project dependencies
- `Procfile` - Contains the command to run your app

### 2. Create a Render Account
1. Go to [Render.com](https://render.com/)
2. Sign up for a free account (can use GitHub to sign up)

### 3. Create a New Web Service
1. From your Render dashboard, click **New** and select **Web Service**
2. Connect your GitHub account if not already connected
3. Find and select your AgriPredict repository
4. Click **Connect**

### 4. Configure Your Web Service
1. Enter a **Name** for your service (e.g., "agripredict")
2. Ensure **Environment** is set to "Python 3"
3. Set the **Build Command** to: `pip install -r requirements.txt`
4. Set the **Start Command** to: `gunicorn app:app`
5. Select **Free Plan**
6. Leave other settings as default

### 5. Environment Variables (Optional)
If needed, add these environment variables:
1. Scroll to the **Environment** section
2. Add key-value pairs:
   - Key: `SECRET_KEY`, Value: [generate a random string]
   - Key: `FLASK_ENV`, Value: `production`

### 6. Deploy the Service
1. Click **Create Web Service**
2. Render will automatically build and deploy your application
3. Monitor the logs in the "Events" tab to track the deployment progress

### 7. Access Your Deployed Application
Once deployment is complete (typically 5-10 minutes):
1. You'll see a URL like `https://your-app-name.onrender.com`
2. Click this URL to open your deployed AgriPredict application

## Updating Your Application
Whenever you push changes to your GitHub repository:
1. Render automatically detects the changes
2. Initiates a new build and deployment
3. Your app will update without any manual intervention

## Troubleshooting
If your deployment fails:
1. Check the build logs in the Render dashboard
2. Ensure all dependencies are correctly listed in requirements.txt
3. Verify your Procfile contains the correct startup command
4. Check that your app runs locally without errors 