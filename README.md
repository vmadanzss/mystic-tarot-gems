# Mystic Tarot & Gems Website

A premium AI-powered spiritual services platform that combines tarot reading services with an e-commerce gem shop. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🔮 **Mystical Design System**: Custom Tailwind CSS configuration with deep purple, black, and gold color palette
- ✨ **Glassmorphism Effects**: Modern UI with backdrop blur and glow animations
- 📱 **Responsive Design**: Mobile-first approach optimized for all devices
- ⚡ **Performance Optimized**: Next.js 14 with App Router for fast loading
- 🎨 **Custom Typography**: Elegant serif fonts (Cinzel) and mystical handwritten fonts (Dancing Script)
- 🛠️ **Developer Experience**: TypeScript strict mode, ESLint, and Prettier configured

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom mystical design system
- **State Management**: Zustand (ready for implementation)
- **Animations**: Framer Motion and custom CSS animations
- **Icons**: Lucide React
- **Code Quality**: ESLint + Prettier
- **Fonts**: Google Fonts (Cinzel, Dancing Script, Inter, Playfair Display)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles with mystical theme
│   ├── layout.tsx      # Root layout with SEO metadata
│   └── page.tsx        # Homepage
├── components/         # Reusable UI components
├── lib/               # Utility functions
├── types/             # TypeScript type definitions
├── hooks/             # Custom React hooks
└── utils/             # Helper utilities
```

## Design System

### Colors

- **Primary Purple**: `#4C1D95`
- **Deep Purple**: `#2D1B69`
- **Accent Gold**: `#F59E0B`
- **Mystical Black**: `#0F0F23`
- **Neon Glow**: `#8B5CF6`

### Typography

- **Headings**: Cinzel (elegant serif)
- **Mystical Text**: Dancing Script (handwritten)
- **Body**: Inter (clean sans-serif)
- **Luxury**: Playfair Display (luxury serif)

### Custom Classes

- `.glass-card` - Glassmorphism effect
- `.mystical-button` - Gradient button with hover effects
- `.glow-effect` - Animated glow effect
- `.mystical-gradient` - Background gradient

## Development Guidelines

- Follow TypeScript strict mode
- Use Prettier for code formatting
- Follow ESLint rules
- Use semantic HTML and proper accessibility
- Implement mobile-first responsive design
- Use custom Tailwind classes for consistency

## License

Private project for Mystic Tarot & Gems platform.
