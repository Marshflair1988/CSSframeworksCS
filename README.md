## SocialConnect

A modern social media platform built with HTML, Tailwind CSS, and JavaScript. This project features a responsive design with authentication pages, a feed page, and a profile page.

## Features

- **Responsive layout** that works on mobile, tablet, and desktop
- **Authentication UI** (Login/Register) with tabbed switching
- **Modern styling** using Tailwind CSS and a gradient background hero
- **Form validation** with inline error messages and success states
- **Improved UX**:
  - Show/hide password toggles on all password fields
  - Submit buttons disabled until the form is valid
  - Remember-me helper text for clearer security guidance
- **Interactive navigation** on feed and profile pages
- **Profile management UI**
- **Social feed** with post creation and interaction elements

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Marshflair1988/CSSframeworksCS.git
cd CSSframeworksCS
```

2. Install dependencies:

```bash
npm install
```

## Project Structure

```
CSSframeworksCS/
├── css/
│   ├── input.css
│   └── style.css          # compiled Tailwind CSS
├── js/
│   ├── script.js          # auth page validation + interactions
│   └── mobilenav.js       # mobile navigation toggle for feed/profile
├── feed/
│   └── index.html
├── profile/
│   └── index.html
├── images/
│   ├── Avatar.png
│   ├── Book.jpg
│   ├── Hiking.jpg
│   ├── conference1.jpg
│   ├── conference2.jpg
│   ├── conference3.jpg
│   ├── conference4.jpg
│   ├── figma-design-systems-1024x576.png
│   └── website.jpg
├── index.html
├── package.json
└── tailwind.config.js
```

## Development

To start the development server and watch for changes:

```bash
npm run dev
```

This will:

- Watch your CSS files for changes
- Automatically compile Tailwind CSS
- Update the output file in real-time

## Building for Production

To build the project for production:

```bash
npm run build
```

This will:

- Compile and minify your CSS
- Create an optimized production build

## Dependencies

- **Tailwind CSS**: ^3.4.17
  - Used for styling and responsive design
  - Handles all CSS utilities and components

## Browser Support

The project is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## File Descriptions

- `index.html`: Main authentication page with login/register tabs, gradient background, and enhanced validation
- `feed/index.html`: Social feed page showing posts and interactions
- `profile/index.html`: User profile page with stats and information
- `css/input.css`: Source CSS file with Tailwind directives
- `css/style.css`: Compiled CSS file (generated)
- `js/script.js`: JavaScript for form validation and interactivity
- `tailwind.config.js`: Tailwind CSS configuration file

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- Font Awesome for icons
- All contributors and maintainers
