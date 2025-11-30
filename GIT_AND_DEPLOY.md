Git Commands - Ready to Deploy

## 🔄 Push Your Project to GitHub

Copy and paste these commands in your terminal:

### Step 1: Check Git Status

```bash
cd C:\Users\ISHU\dhaba-junction-nit
git status
```

You should see new files:

- ✅ vercel.json
- ✅ api/index.ts
- ✅ .env.example
- ✅ VERCEL_DEPLOYMENT.md
- ✅ DEPLOYMENT_STEPS.md
- ✅ PROJECT_STRUCTURE.md
- ✅ DEPLOYMENT_READY.md

### Step 2: Stage All Changes

```bash
git add .
```

### Step 3: Commit Changes

```bash
git commit -m "Configure for Vercel deployment - all errors fixed"
```

### Step 4: Push to GitHub

```bash
git push origin main
```

Or if your default branch is `master`:

```bash
git push origin master
```

---

## 🌐 If You Don't Have a GitHub Repository Yet

### 1. Create Repository on GitHub

- Go to https://github.com/new
- Name: `dhaba-junction-nit`
- Description: `Dhaba Junction Faridabad - Restaurant Website`
- Choose Public or Private
- Click "Create repository"

### 2. Initialize Git (if not already done)

```bash
cd C:\Users\ISHU\dhaba-junction-nit
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### 3. Add GitHub Remote

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/dhaba-junction-nit.git
git branch -M main
```

### 4: Add All Files and Push

```bash
git add .
git commit -m "Initial commit - Dhaba Junction website ready for Vercel"
git push -u origin main
```

---

## ✅ Verify Everything Was Pushed

Visit your GitHub repository:

```
https://github.com/YOUR_USERNAME/dhaba-junction-nit
```

You should see:

- ✅ All project files
- ✅ vercel.json
- ✅ api/ folder with index.ts
- ✅ Documentation files
- ✅ .gitignore updated
- ✅ package.json with updated scripts

---

## 🚀 Deploy on Vercel

### Option 1: Using Vercel Website (Easiest)

1. Go to https://vercel.com/dashboard
2. Click **"Add New"** → **"Project"**
3. Click **"Continue with GitHub"** (authorize if needed)
4. Select your repository: `dhaba-junction-nit`
5. Click **"Import"**
6. Vercel auto-detects settings ✅
7. Click **"Deploy"**
8. Wait 1-3 minutes for deployment
9. Your live URL appears! 🎉

### Option 2: Using Vercel CLI

```bash
npm install -g vercel
cd C:\Users\ISHU\dhaba-junction-nit
vercel
```

Follow the prompts and your app will deploy!

---

## 📊 Expected Deployment Flow

```
Your Computer (Local)
        ↓
    git push
        ↓
GitHub Repository
        ↓
Vercel Webhook Triggered
        ↓
Vercel Build Process
  1. npm install
  2. npm run build
  3. Deploy to CDN
        ↓
YOUR APP IS LIVE! 🚀
```

---

## 🔍 Monitor Deployment

### Check build logs on Vercel:

1. Go to https://vercel.com/dashboard
2. Click on your project
3. Click "Deployments" tab
4. Click your latest deployment
5. Click "Build" to see logs

### Your live URL will be:

```
https://dhaba-junction-nit.vercel.app
```

Or custom domain if you add one!

---

## 🆘 Troubleshooting

### Build Failed on Vercel?

1. Check Vercel build logs
2. Common fixes:
   ```bash
   npm install  # Make sure all dependencies installed
   npm run build  # Test build locally
   git push origin main  # Re-push
   ```

### Files Not in GitHub?

1. Check: `git status`
2. If files show as untracked: `git add .`
3. Then commit and push: `git commit -m "..." && git push`

### Can't Find Your Repository?

1. Go to https://github.com/settings/repositories
2. Look for `dhaba-junction-nit`
3. If missing, create new repo and push again

---

## 💾 Quick Reference

| Task         | Command                   |
| ------------ | ------------------------- |
| Check status | `git status`              |
| Add changes  | `git add .`               |
| Commit       | `git commit -m "message"` |
| Push         | `git push origin main`    |
| See logs     | `git log --oneline`       |
| Undo commit  | `git reset HEAD~1`        |
| View remote  | `git remote -v`           |

---

## ✨ After Deployment

1. **Test your live app**: Click Vercel URL
2. **Share with others**: Send them the live URL
3. **Set up custom domain** (optional):
   - In Vercel dashboard → Settings → Domains
   - Point your domain to Vercel

---

## 🎯 Final Checklist

Before running `git push`:

- [ ] All changes committed: `git status` shows clean
- [ ] No large files accidentally added: `git status`
- [ ] `node_modules/` is NOT being tracked (check .gitignore)
- [ ] `dist/` folder exists and has content
- [ ] Ready to deploy to Vercel: ✅

---

## 🚀 One-Liner Commands

### If you're experienced with git:

```bash
cd C:\Users\ISHU\dhaba-junction-nit && git add . && git commit -m "Vercel deployment ready" && git push origin main
```

### Then deploy:

```bash
# Go to https://vercel.com/dashboard and import from GitHub
# Or use CLI:
npm install -g vercel && vercel
```

---

## 📱 Mobile Testing

After deployment, test on mobile:

1. Visit your Vercel URL on phone
2. Check:
   - ✅ Layout responsive
   - ✅ Images load
   - ✅ Navigation works
   - ✅ Buttons clickable

---

**Everything is ready! Just push and deploy! 🚀**
