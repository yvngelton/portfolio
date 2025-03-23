# Portfolio Website

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Dark/Light mode
- Contact form with email functionality
- Project showcase
- About section
- Skills section

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file:

```bash
cp .env.example .env.local
```

4. Update the `.env.local` file with your email credentials:

```
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your-app-specific-password
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables in Vercel's project settings
4. Deploy!

### Other Platforms

1. Build the application:

```bash
npm run build
```

2. The `out` directory will contain your static files
3. Deploy the contents of the `out` directory to your hosting platform

## Environment Variables

- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Your Gmail App Password (not your regular password)

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn/ui
- Nodemailer
