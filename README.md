# Jonathan Hollinger - Resume Site

A modern, responsive resume website built with Next.js 14, TypeScript, and Tailwind CSS. This site showcases my professional experience, skills, education, and publications in a clean, accessible format.

## Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Static site generation for optimal loading speeds
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags, structured data, and optimized for search engines
- **GitHub Pages Ready**: Configured for automatic deployment to GitHub Pages

## Sections

- **About**: Professional summary and contact information
- **Experience**: Detailed work history with accomplishments
- **Education**: Academic background and degrees
- **Skills**: Technical skills and competencies
- **Publications & Presentations**: Research and speaking engagements
- **Interests**: Personal interests and background

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jmhollinger/jmhollinger.github.io.git
cd jmhollinger.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `out/` directory, ready for deployment.

## Deployment

This site is configured for automatic deployment to GitHub Pages via GitHub Actions. Simply push to the `main` branch and the site will be automatically built and deployed.

### Manual Deployment

If you need to deploy manually:

1. Build the site:
```bash
npm run build
```

2. The static files will be generated in the `out/` directory
3. Deploy the contents of the `out/` directory to your web server

## Customization

### Content Updates

- Edit `app/page.tsx` to update the main content
- Modify `app/globals.css` for styling changes
- Update `app/layout.tsx` for metadata and SEO changes

### Styling

The site uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.ts`
- Typography in `app/globals.css`
- Component styles using Tailwind classes

### Configuration

- Update `next.config.js` for build configuration
- Modify `package.json` for dependencies and scripts
- Edit `.github/workflows/deploy.yml` for deployment settings

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: jonathanmhollinger@gmail.com
- **LinkedIn**: [Jonathan Hollinger](https://www.linkedin.com/in/jonathanmhollinger/)
- **GitHub**: [jmhollinger](https://github.com/jmhollinger)
