# Soulful Sojourns - Multilingual Travel Website

## Project Overview

Soulful Sojourns is a modern, responsive travel website built with React and Vite. The website features comprehensive multilingual support for English, Spanish, French, and Japanese, allowing users to explore travel destinations and tour packages in their preferred language.

### Key Features

- **Multilingual Support**: Full translation for English, Spanish, French, and Japanese
- **Responsive Design**: Optimized for all device sizes using Tailwind CSS
- **Interactive UI**: Dynamic carousels, testimonials, and navigation
- **Tour Packages**: Detailed itineraries for multiple destinations
- **Language Persistence**: Remembers user language preference using localStorage

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Internationalization**: react-i18next
- **Carousel**: react-slick

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later) or yarn (v1.22.0 or later)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/soulful-project.git
   cd soulful-project
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
nom run build
# or
yarn build
```

The build output will be in the `dist` directory.

## Internationalization

The website supports four languages:

- English (default)
- Spanish
- French
- Japanese

Translation files are located in `src/i18n/locales/` directory. Each language has its own translation file:

- `en/translation.json` - English
- `es/translation.json` - Spanish
- `fr/translation.json` - French
- `ja/translation.json` - Japanese

### Adding a New Language

1. Create a new folder in `src/i18n/locales/` with the language code
2. Create a `translation.json` file in the new folder
3. Add the language to the `languages` array in `src/components/LanguageSelector.jsx`

## Project Structure

- `src/assets/` - Images and static assets
- `src/components/` - Reusable React components
- `src/i18n/` - Internationalization configuration and translation files
- `src/pages/` - Page components
- `src/App.jsx` - Main application component with routing
- `src/main.jsx` - Entry point

## Tour Packages

The website features detailed tour packages for several destinations:

- Kyoto, Japan
- Santorini, Greece
- Sedona, Arizona, USA
- Bali, Indonesia
- Goa, India
- Paris, France

Each package includes comprehensive information about the destination, daily itineraries, and highlights, all available in multiple languages.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-i18next](https://react.i18next.com/)
- [react-slick](https://react-slick.neostack.com/)
