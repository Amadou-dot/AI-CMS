<p align="center">
  <img src="https://raw.githubusercontent.com/Amadou-dot/Amadou-dot/main/assets/banners/glisten-ai-banner.png" 
       alt="Glisten.ai Banner" 
       width="100%" />
</p>

<h1 align="center">✨ Glisten.ai – Modern AI Marketing Website</h1>

<p align="center">
  <a href="https://glisten.aseck.dev/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Preview-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Preview"/>
  </a>
  <img src="https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Prismic-CMS-5163BA?style=for-the-badge&logo=prismic&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
</p>

<p align="center">
  A cutting-edge marketing website for Glisten.ai built with Next.js 15, featuring a headless CMS architecture, modern design elements, and exceptional performance. Showcases advanced web development techniques with glass morphism effects and modular content management.
</p>

---

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 15 for optimal performance and SEO
- **Headless CMS**: Content editable through Prismic CMS with real-time preview
- **Slice Architecture**: Modular content blocks using Prismic's SliceZone
- **Glass Morphism Design**: Modern UI with glass-like effects and gradients
- **Type Safety**: Complete TypeScript implementation across the codebase
- **Performance Optimized**: Server components, image optimization, and code splitting
- **Responsive Design**: Mobile-first approach with beautiful cross-device experience
- **Smooth Animations**: Interactive elements with custom CSS animations

## 🛠 Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/) with App Router, [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **CMS**: [Prismic](https://prismic.io/) headless CMS with Slice Machine
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom animations
- **Tools**: [Vercel Analytics](https://vercel.com/analytics), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

## � Quick Start

### Prerequisites
- Node.js (v18 or later recommended)
- npm or yarn package manager
- Prismic account and repository

### Installation

```bash
# Clone the repository
git clone https://github.com/Amadou-dot/AI-CMS.git
cd AI-CMS

# Install dependencies
npm install
```

### Environment Setup

**Prismic Configuration**
1. Create a Prismic repository at [prismic.io](https://prismic.io/)
2. Set up your content types using Slice Machine
3. Add to `.env.local`:
```env
PRISMIC_ENVIRONMENT=your-repo-name
```

### Initialize & Run

```bash
# Start Slice Machine (for content development)
npm run slicemachine

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
AI-CMS/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # Shared React components
│   ├── slices/          # Prismic slice components
│   └── prismicio.ts     # Prismic configuration
├── customtypes/         # Prismic custom type definitions
├── public/              # Static assets
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🖋 Content Editing

Content is managed through the Prismic CMS. The website uses several content types:

- **Page** - Standard pages with customizable sections
- **Case Studies** - Portfolio case studies
- **Settings** - Global settings like navigation and metadata

## 🛠️ Development

### Slice Machine

This project uses Prismic Slice Machine for managing CMS components. To run the Slice Machine locally:

```bash
npm run slicemachine
```

Then open [http://localhost:9999](http://localhost:9999) to access the Slice Machine interface.

### Deployment

The site is deployed via Vercel. Any push to the main branch will trigger an automatic deployment.

## 🎨 Design Features

- Custom animated components
- Glass-like UI elements
- Gradient and blur effects
- Responsive design with mobile-first approach

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<p align="center">
  Made by <a href="https://github.com/Amadou-dot">Amadou</a>
</p>
