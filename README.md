# Ivor

Ivor is a React-based front-end project built with Vite and TailwindCSS. It provides a modern development environment with fast builds and a streamlined setup.

## About

Ivor is a social media platform inspired by **X** and **Bluesky**, aiming to provide a modern and user-friendly experience for connecting and sharing with others.

## Features

- **React 19**: Leverages the latest version of React for building user interfaces.
- **Vite**: A fast and lightweight build tool for modern web projects.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **React Router**: For handling client-side routing.
- **ESLint**: Configured for linting JavaScript and React code.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm or yarn package manager

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ivor
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs ESLint to check for code issues.

## Project Structure

```
ivor/
├── public/          # Static assets
├── src/             # Source code
│   ├── App.jsx      # Main application component
│   ├── routes.jsx   # Application routes
│   ├── index.css    # TailwindCSS styles
├── index.html       # HTML entry point
├── vite.config.js   # Vite configuration
├── eslint.config.js # ESLint configuration
└── package.json     # Project metadata and dependencies
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
