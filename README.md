# Land Properties Management - Client

The frontend for Ideal Properties, a comprehensive Land and Properties Management System. Built with React, Vite, Tailwind CSS, Firebase authentication, and React Leaflet for interactive maps.

## Live Link

- **Frontend:** https://aisc-7ccbf.web.app/

## Features

- Responsive design for all devices
- Firebase authentication (Email/Password + Google + GitHub)
- Interactive maps with React Leaflet
- Land and property listings
- Animated CSS features
- Dynamic page titles
- Protected routes
- Modern UI with Tailwind CSS and DaisyUI

## Technologies Used

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, DaisyUI, Animate.css
- **Authentication:** Firebase
- **Maps:** React Leaflet, Leaflet
- **Routing:** React Router DOM
- **Icons:** React Icons
- **Notifications:** React Toastify, SweetAlert2

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Jewel-190237/Land-Properties-Management.git
   ```

2. Open the project folder:
   ```bash
   cd Land-Properties-Management
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
Land-Properties-Management/
├── public/
├── src/
│   ├── Components/
│   ├── Pages/
│   ├── Context/
│   ├── Hooks/
│   ├── Assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── firebase.json
├── .firebaserc
└── README.md
```

## Special Features

### Responsive Design
- Ensured the website is visually appealing and functional across all devices, including desktops, tablets, and mobile phones.

### Animated CSS Features
- Incorporated CSS animations to enhance user experience and engagement throughout the website.

### Dynamic Titles
- Used dynamic title generation to display relevant and descriptive titles for each page, improving SEO and user navigation.

### React Leaflet Integration
- Utilized React Leaflet to integrate interactive maps and geospatial data visualization into the website, enhancing user interaction and information presentation.

### Authentication
- Integrated authentication functionalities using Google Sign-In, email-password authentication, and GitHub authentication, ensuring secure access control for users.

### Protected Routes
- Created protected routes to restrict access to certain pages or features based on user authentication status, ensuring secure navigation and data protection.

### React Router
- Employed React Router for efficient client-side navigation, providing seamless and responsive routing within the single-page application (SPA) architecture.

### Error Page
- Developed a dedicated error page to handle and gracefully display error messages or fallback content when users encounter unexpected issues or pages not found.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Environment Setup

This project uses Firebase for authentication. Make sure to configure your Firebase project with the correct credentials in the Firebase configuration file.

## Author

**Jewel-190237**
- GitHub: [Jewel-190237](https://github.com/Jewel-190237)
- Email: jewel190237@gmail.com

## Contributing

Feel free to fork this project and create pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).
