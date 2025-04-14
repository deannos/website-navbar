# Website Navbar

A customizable and responsive navigation bar component for web applications. This project provides a lightweight and modular solution for implementing navigation menus with dropdown support.It includes a mega menu, dropdowns, and mobile-friendly navigation.

## Features

- Responsive Design: Works seamlessly on desktop and mobile devices.
- Mega Menu: Includes a dropdown with tabs and detailed content.
- Mobile Navigation: Collapsible menu for smaller screens.
- Dynamic Content: Easily customizable navigation items and content.

## Project Structure

The project is organized as follows:

```
website-navbar/
├── src/
│   ├── component/
│   │   └── Navbar.tsx       # Navbar component
│   ├── pages/               # Placeholder for additional pages
│   ├── App.tsx              # Main application file
│   ├── main.tsx             # Entry point
│   ├── index.css            # Tailwind CSS styles
│   └── vite-env.d.ts        # Vite environment types
├── public/                  # Static assets
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies and scripts
├── .gitignore               # Git ignore file
└── README.md                # Project documentation
```

- **`src/components/Navbar/`**: Contains the main `Navbar` component and related files.
- **`App.tsx`**: The entry point for the application where the `Navbar` is integrated.
- **`index.tsx`**: The root file that renders the React application.

## Installation

Clone the repository:

```bash
git clone https://github.com/deannos/website-navbar.git
```

Navigate to the project directory:

```bash
cd website-navbar
```

Install dependencies:

```bash
npm install
```

start the development server:

```bash
npm run dev
```

open the app in your browser

```bash
http://localhost:5173
```

## Usage

### Adding the Navbar to Your Application

In `App.tsx`, the `Navbar` component is imported and used as follows:

```tsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const navItems = [
    {
      title: "What we do",
      tabs: ["Overview", "Industries", "Services", "Products and Platforms"],
      content: {
        Overview: {
          title: "WCS is here to make a difference through technology.",
          description: "Leading the way in innovation for over 55 years...",
          cta: "Discover all solutions",
        },
        Industries: {
          title: "Industry Solutions",
          items: [
            { name: "Banking", link: "/banking" },
            { name: "Insurance", link: "/insurance" },
          ],
        },
      },
    },
    { title: "Who we are" },
    { title: "Insights" },
  ];

  return (
    <div className="App">
      <Navbar items={navItems} />
    </div>
  );
}

export default App;
```

### Adding Navigation Items

The `Navbar` component accepts an `items` prop, which is an array of objects. Each object represents a navigation item with the following structure:

```typescript
{
  label: string; // The text displayed for the menu item
  link: string; // The URL the menu item points to
}
```

Example:

```tsx
const navItems = [
  {
    title: "What we do",
    tabs: ["Overview", "Industries", "Services", "Products and Platforms"],
    content: {
      Overview: {
        title: "WCS is here to make a difference through technology.",
        description:
          "Leading the way in innovation for over 55 years, we build greater futures for businesses across multiple industries and 55 countries.",
        cta: "Discover all solutions",
      },
      Industries: {
        title: "Industry Solutions",
        items: [
          { name: "Banking", link: "/banking" },
          { name: "Insurance", link: "/insurance" },
          { name: "Manufacturing", link: "/manufacturing" },
          { name: "Retail", link: "/retail" },
          { name: "Healthcare", link: "/healthcare" },
          { name: "Life Sciences", link: "/life-sciences" },
        ],
      },
      Services: {
        title: "Our Services",
        items: [
          { name: "Cloud Services", link: "/cloud" },
          { name: "Cyber Security", link: "/security" },
          { name: "Enterprise Solutions", link: "/enterprise" },
          { name: "IoT & Digital Engineering", link: "/iot" },
        ],
      },
      "Products and Platforms": {
        title: "WCS Products & Platforms",
        items: [
          { name: "WCS BaNCS", link: "/bancs" },
          { name: "ignio™", link: "/ignio" },
          { name: "TCS ADD", link: "/add" },
          { name: "TCS OmniStore™", link: "/omnistore" },
        ],
      },
    },
  },
  { title: "Who we are" },
  { title: "Insights" },
  { title: "Careers" },
  { title: "Newsroom" },
  { title: "Investors" },
];
```

Pass this array to the `Navbar` component as shown in the `App.tsx` example above.

## Customization

To customize the appearance of the navbar, modify the `Navbar.css` file located in the `src/components/Navbar/` directory. You can adjust styles such as colors, fonts, and layout to match your project's design.

## Contributing

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes.

- Fork the repository

- create a new branch

```bash
git checkout -b feature/your-feature-name
```

- commit your changes

```bash
git commit -m "Add your message here"
```

- Push to the branch

```bash
git push origin feature/your-feature-name
```

- Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, please contact [contactamish.jha@gmail.com](mailto:contactamish.jha@gmail.com).
