# SocialConnect

A modern social media platform built with HTML, Tailwind CSS, and JavaScript. This project features a responsive design with authentication pages, a feed page, and a profile page.

## Features

- Responsive design that works on mobile and desktop
- Authentication system (Login/Register)
- Form validation
- Modern UI with Tailwind CSS
- Interactive navigation
- Profile management
- Social feed with post creation and interaction

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
│   └── style.css
├── js/
│   └── script.js
├── feed/
│   └── index.html
├── profile/
│   └── index.html
├── images/
│   ├── Avatar.png
│   ├── Book.jpg
│   └── Hiking.jpg
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

- `index.html`: Main authentication page with login/register forms
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
