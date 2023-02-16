<div align="center">
  <img alt="react" height="100px" width="100px" src="./src/assets/images/react-logo.png" />
  <h1>Awesome React</h1>
</div>

## Table of Contents

- [Prerequisites](#prerequisites)
- [File structure](#file-structure)
- [Features](#features)
- [Install and Run](#install-and-run)

### Prerequisites

- **[NodeJS](https://nodejs.org/en/)**

I've used node `v18.13.0` and npm `v8.19.3`.

### File structure

```css
project/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── api/
│   │   ├── client.js
│   │   └── ...
│   ├── assets/
│   │   ├── images/
│   │   └── ...
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.js
│   │   │   ├── Button.test.js
│   │   │   ├── Button.css
│   │   │   └── index.js
│   │   ├── Input/
│   │   │   ├── Input.js
│   │   │   ├── Input.css
│   │   │   ├── Input.test.js
│   │   │   └── index.js
│   │   ├── ...
│   │   └── index.js
│   ├── containers/
│   │   ├── HomePage/
│   │   │   ├── HomePage.js
│   │   │   ├── HomePage.test.js
│   │   │   ├── HomePage.css
│   │   │   └── index.js
│   │   ├── AboutPage/
│   │   │   ├── AboutPage.js
│   │   │   ├── AboutPage.css
│   │   │   ├── AboutPage.test.js
│   │   │   └── index.js
│   │   ├── ...
│   │   └── index.js
│   ├── store/
│   │   ├── actions/
│   │   │   ├── counter.js
│   │   │   ├── index.js
│   │   │   └── ...
│   │   ├── reducers/
│   │   │   ├── counter.js
│   │   │   ├── index.js
│   │   │   └── ...
│   │   ├── types.js
│   │   └── index.js
│   ├── utils/
│   │   ├── api.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   ├── setupTests.js
│   ├── serviceWorker.js
│   └── ...
├── .env
├── .gitignore
├── package.json
├── README.md
├── yarn.lock
└── ...
```

Here's a brief explanation of each directory and file:

- **`public/`**: This directory contains the public assets for the project, such as the **`index.html`** file, favicon, etc.
- **`src/`**: This directory contains all the source code for the project.
- **`api/`**: This directory contains the API client code for making HTTP requests to the server.
- **`assets/`**: This directory contains all the static assets (such as images) used in the project.
- **`components/`**: This directory contains all the presentational components used in the application.
- **`containers/`**: This directory contains all the container components that connect to the Redux store and manage the application's state.
- **`store/`**: This directory contains all the Redux-related code, including action creators, reducers, and the Redux store itself.
- **`utils/`**: This directory contains any utility functions or classes that can be used throughout the project.
- **`App.js`**: The main component that renders all the other components and containers.
- **`index.js`**: The entry point for the project that renders the **`App`** component.
- **`index.css`**: The main CSS file for the project that contains global styles.
- **`package.json`**: The npm package file that contains all the dependencies and scripts used in the project.

Note that this is just one example of a file structure with best practices and can vary depending on the size and complexity of your project.

<br>

### Features

- Sidebar
- Navbar with toggling the sidebar

### Install and Run

```sh
git clone https://github.com/shahnawaz-pabon/awesome-react.git
cd awesome-react
npm install
npm start
```
