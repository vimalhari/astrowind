# AstroWind - Astro Website Template

A free and open-source template using **Astro 5.0** and **Tailwind CSS**. Perfect for creating fast, modern websites.

## 🚀 Quick Start

This project uses **pnpm** as the package manager. Make sure you have pnpm installed:

```bash
npm install -g pnpm
```

### Development

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start the development server:**

   ```bash
   pnpm dev
   ```

3. **Open your browser and visit:**
   `http://localhost:4321`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm check` - Run all checks (Astro, ESLint, Prettier)
- `pnpm fix` - Fix ESLint and Prettier issues

### Quality Assurance

- `pnpm run check:astro` - Check Astro files
- `pnpm run check:eslint` - Check with ESLint
- `pnpm run check:prettier` - Check Prettier formatting
- `pnpm run fix:eslint` - Fix ESLint issues
- `pnpm run fix:prettier` - Fix Prettier formatting

## 📦 Package Management

This project is configured to use **pnpm** exclusively:

- Fast, efficient, and disk space optimized
- Strict dependency resolution
- Better monorepo support
- Faster installations compared to npm/yarn

### Adding Dependencies

```bash
# Production dependencies
pnpm add <package-name>

# Development dependencies
pnpm add -D <package-name>

# Remove dependencies
pnpm remove <package-name>
```

## 🔧 Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.ts
├── package.json
├── pnpm-lock.yaml
└── tailwind.config.js
```

## 🚀 Deployment

This project is configured for **Netlify** deployment:

- **Build Command:** `pnpm run build`
- **Publish Directory:** `dist`
- **Node Version:** 18+ (configured in `package.json` engines)

The `netlify.toml` file contains the deployment configuration. Simply connect your repository to Netlify for automatic deployments.

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [pnpm Documentation](https://pnpm.io/)

## 🤝 Contributing

When contributing to this project, please use pnpm for all package management tasks to maintain consistency.
