# Ghana IEP Website

This is the official website for Ghana International Exchange Program (IEP), built with React, Vite, and TypeScript.

## Features

- Modern, responsive design
- Interactive UI components with animations
- SEO-friendly structure
- Easy to convert to WordPress

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Material UI Icons

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd iep-ghana
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## WordPress Conversion

This project is structured to be easily converted to WordPress. Key considerations:

1. Components are modular and reusable
2. Styles use Tailwind CSS classes
3. Data structure is separated from presentation
4. Routes match WordPress URL structure

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  │   └── layout/    # Layout components (Header, Footer)
  ├── pages/         # Page components
  ├── styles/        # Global styles and Tailwind config
  ├── App.tsx        # Main app component
  └── main.tsx       # Entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 