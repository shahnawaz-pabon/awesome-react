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
