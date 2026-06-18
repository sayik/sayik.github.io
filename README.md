# Systemic Identity | Developer Portfolio

A high-performance portfolio for systems thinkers and software engineers, built with Next.js, Firebase, and Genkit.

This portfolio uses a **Swiss Design System** with bold typography, high-contrast grid layouts, and sharp corners.

## 🛠 Customization Guide

To make this portfolio your own, modify the following files:

### 1. Personal Identity & Branding
- **`src/components/navbar.tsx`**: Update the brand name (default: "Sayi Krishna") and initials in the logo.
- **`src/components/footer.tsx`**: Update the name, copyright year, and social media links (GitHub, Twitter, LinkedIn).
- **`src/components/profile-hero.tsx`**: 
    - Change your professional title (e.g., "Backend Engineer").
    - Update the **Core Stack** list with your specific skills and proficiency levels.
    - Update the bio description.
    - Update the status badge if you are not currently available for hire.

### 2. Projects & Work
- **`src/components/selected-projects.tsx`**: Update the `projects` array with your own technical projects, categories, descriptions, and tags.
- **`src/components/contributions-list.tsx`**: Update the `contributions` array with your real Open Source PRs and repository names.

### 3. Images & Media
- **`src/app/lib/placeholder-images.json`**: Update the image URLs and hints for your profile portrait and project screenshots. 
- **`public/`**: Replace `cv.pdf` with your actual curriculum vitae file.

### 4. Technical Journal (Blog)
- **`src/app/blog/page.tsx`**: Update the `blogPosts` list with your article metadata (slugs, dates, excerpts).
- **`src/app/blog/[slug]/page.tsx`**: Update the `blogPosts` object with the full HTML content of your technical essays.

### 5. GitHub Activity
- **`src/components/github-contribution-graph.tsx`**: Currently uses mock data. To show your actual stats, you can integrate with the GitHub API or update the numbers manually for a static representation.

### 6. Theme & Colors
- **`src/app/globals.css`**: Modify the HSL values for `--primary` (Orange) and `--accent` (Green) if you want to change the brand colors.

## 🚀 Deployment to GitHub Pages

This app is pre-configured for **GitHub Pages**.

1.  Push your code to a GitHub repository.
2.  Enable **GitHub Actions** in your repository settings.
3.  The workflow in `.github/workflows/deploy.yml` will automatically build and deploy the app to `https://<username>.github.io/<repo-name>/` or your custom domain.
4.  **Important**: If you are deploying to a project page (not a user page), you may need to add `basePath: '/your-repo-name'` to `next.config.ts`.

## 🎨 Design Features
- **Swiss Design System**: Bold typography and high-contrast grid layouts.
- **Dynamic Journal**: Technical blog with smooth routing (Static Export compatible).
- **GitHub Heatmap**: Visual representation of engineering activity.
- **CV CTA**: High-impact section for sharing professional credentials.
- **Mobile Responsive**: Fully optimized navigation for all screen sizes.
- **Light Mode Default**: Optimized for legibility and professional aesthetic.
