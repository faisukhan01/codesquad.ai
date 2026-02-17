# Quick Start Guide - Next.js Website

## 🚀 Getting Started

### Development

```bash
npm run dev
```

Visit http://localhost:3000 to see your website.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout (wraps all pages)
│   ├── page.tsx           # Home page (/)
│   ├── not-found.tsx      # 404 page
│   └── services/
│       └── page.tsx       # Services page (/services)
├── components/            # React components
│   ├── Providers.tsx      # Client-side providers
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer
│   ├── HeroSection.tsx    # Hero section
│   └── ui/                # Shadcn UI components
├── assets/                # Images and static assets
├── lib/                   # Utility functions
└── index.css              # Global styles
```

## 🎨 Key Features

- ✅ Next.js 16 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Shadcn UI Components
- ✅ Framer Motion Animations
- ✅ Responsive Design
- ✅ SEO Ready

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests |

## 📝 Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file inside it

Example for `/about` page:
```bash
src/app/about/page.tsx
```

```tsx
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}
```

## 🎯 Important Notes

- Components using hooks or interactivity need `"use client"` at the top
- Use Next.js `<Link>` component for navigation
- Use Next.js `<Image>` component for optimized images
- All routes are automatically generated from the file structure

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

**Your website is ready to go!** 🎉
