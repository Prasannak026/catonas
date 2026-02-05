# Catona's Ice Cream - Modern Website

A sleek, modern static website for Catona's Ice Cream in Painesville, Ohio, built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Tech Stack

- **Framework**: React 18+ with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3+
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite with Rolldown
- **Package Manager**: npm

## 📁 Project Structure

```
Catonas/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── StarRating.tsx
│   │   ├── AnimatedSection.tsx
│   │   └── index.ts        # Component exports
│   ├── sections/            # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── MenuSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SpecialsSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── LocationSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── index.ts        # Section exports
│   ├── data/
│   │   └── business.ts      # Business info, menu, testimonials
│   ├── hooks/
│   │   ├── useInView.ts
│   │   └── index.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── assets/
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Visit `http://localhost:5173`

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## ✨ Features

✅ **8 Complete Sections**
- Hero with CTAs
- Filterable menu/flavors
- About section with stats
- Seasonal specials
- Gallery with hover effects
- Testimonials with ratings
- Location & hours
- Contact form & CTA buttons

✅ **Responsive Design**
- Mobile-first approach
- Fully responsive layout
- Touch-friendly interactions

✅ **Animations & Interactions**
- Framer Motion scroll reveals
- Smooth hover effects
- Page transitions
- Animated CTAs

✅ **SEO & Accessibility**
- Semantic HTML
- Meta tags & Open Graph
- JSON-LD structured data
- ARIA labels
- Keyboard navigation
- Color contrast compliant

✅ **Performance**
- Code splitting
- Optimized build
- Production-ready

## 🎨 Design Features

- **Modern, minimal aesthetic**
- **Custom color palette** (Coral, Rose, Navy, Sage, Gold, Cream)
- **Smooth micro-interactions**
- **High-quality typography** (Playfair Display + Inter)
- **Accessibility-first approach**

## 📊 Business Information

- **Name**: Catona's Ice Cream
- **Location**: Painesville, Ohio
- **Phone**: (440) 555-0123
- **Hours**: 12-10 PM (weekdays), 11-11 PM (weekends)
- **Founded**: 1985
- **Rating**: 4.9 ⭐ (342 reviews)

## 🍦 12 Ice Cream Flavors

Organized in categories:
- **Classic**: Vanilla, Chocolate, Mint
- **Fruit**: Strawberry, Mango
- **Nut**: Pistachio
- **Indulgence**: Salted Caramel, Cookies & Cream, Bananas Foster
- **Specialty**: Lavender Honey, Espresso
- **Fun**: Cotton Candy

Plus 4 seasonal specials!

## 🚀 Deployment

Ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Cloudflare Pages

Just deploy the `dist` folder.

## 📝 Customization

All business data is in `src/data/business.ts`:
- Edit business info
- Add/remove menu items
- Update testimonials
- Modify colors in `tailwind.config.js`

## 🎯 Conversion Features

- Click-to-call buttons
- Multiple CTAs
- Trust elements (ratings)
- Clear contact info
- Mobile-optimized

## 📈 Performance Targets

- Lighthouse: 90+ all categories
- FCP: < 2s
- CLS: < 0.1

---

Built for Catona's Ice Cream in Painesville, Ohio 🍦

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
