# Glisten.ai Website

[![Next.js](https://img.shields.io/badge/Next.js-13+-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Prismic](https://img.shields.io/badge/Prismic-CMS-5163BA?style=for-the-badge&logo=prismic&logoColor=white)](https://prismic.io/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

This repository contains the source code for Glisten.ai's marketing website. The site is built with Next.js, using Prismic as a headless CMS for content management, and styled with Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Built with Next.js for optimal performance and SEO
- **Content Management**: Content editable through Prismic CMS
- **Component-Based Architecture**: Using Prismic's SliceZone for modular content blocks
- **Fully Responsive Design**: Beautiful on all devices
- **TypeScript**: Type-safe codebase
- **Animations**: Smooth animations and interactive elements

## 📋 Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn
- Prismic account and repository

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/Amadou-dot/AI-CMS.git
cd AI-CMS
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## 🧩 Project Structure

- `/src/app` - Next.js app directory with routes and layouts
- `/src/slices` - Prismic slice components for modular content
- `/src/components` - Shared React components
- `/customtypes` - Prismic custom type definitions

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
# or
yarn slicemachine
```

Then open [http://localhost:9999](http://localhost:9999) to access the Slice Machine interface.

### Deployment

The site is deployed via Vercel. Any push to the main branch will trigger an automatic deployment.

## 🎨 Design Features

- Custom animated components
- Glass-like UI elements
- Gradient and blur effects
- Responsive design with mobile-first approach

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
