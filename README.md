# Next.js Portfolio

Welcome to my personal portfolio built with Next.js! This project showcases my skills, projects, certifications, and more.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Demo

Check out the live demo of the portfolio [here](https://your-live-portfolio-link.com).

## Features

- Dynamic content fetching with React Query
- Responsive design using Tailwind CSS
- Full-stack development with Next.js
- Project management with Scrum and Jira
- UI/UX design proficiency
- GitHub integration for version control

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://react-query.tanstack.com/)
- [Axios](https://axios-http.com/)
- [Figma](https://www.figma.com/)
- [Adobe XD](https://www.adobe.com/products/xd.html)
- [MongoDB](https://www.mongodb.com/)
- [MySQL](https://www.mysql.com/)

## Setup

To run this project locally, follow these steps:

1. **Clone the repository**
    ```sh
    git clone https://github.com/Chry1911/chris-portfolio.git
    cd chris-portfolio
    ```

2. **Install dependencies**
    ```sh
    npm install
    ```

3. **Create a `.env.local` file**
    ```sh
    touch .env.local
    ```

    Add your environment variables in `.env.local`:
    ```
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    ```

4. **Run the development server**
    ```sh
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- **Navigating the Portfolio**: Explore different sections such as About Me, Projects, Certifications, and Contact.
- **Fetching Data**: Data is fetched dynamically using React Query from API endpoints.
- **Responsive Design**: The portfolio is designed to be responsive and looks great on all devices.

## API Endpoints

- **/api/certifications**: Fetches the list of certifications.
- **/api/projects**: Fetches the list of projects.
- **/api/recommendations**: Fetches recommendations/testimonials.

## Folder Structure
├── components
│   ├── CertificationCard.js
│   ├── Recommendations.js
│   └── ...
├── pages
│   ├── api
│   │   ├── certifications.js
│   │   └── ...
│   ├── index.js
│   └── ...
├── public
│   ├── images
│   └── ...
├── styles
│   └── globals.css
├── .env.local
├── package.json
└── README.md

Example API response for `/api/certifications`:
```json
[
  {
    "id": 0,
    "title": "Certified JavaScript Developer",
    "image": "images/javascript_cert.png",
    "description": "A certification that demonstrates proficiency in JavaScript programming and advanced concepts."
  },
  ...
]



