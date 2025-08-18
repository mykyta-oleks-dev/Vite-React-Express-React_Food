# Description

This is a React + Express application for ordering meals to deliver by provided data. Select your meals, manage their quantity before checkout and insert your address data for creating an order on backend!

## Technologies used

-   JavaScript - a high-level, multi-paradigm programming language.

-   Node.JS - free, open-source, cross-platform JavaScript runtime environment.

-   npm - package manager for the JavaScript programming language maintained by npm, Inc., a subsidiary of GitHub.

-   React - a free and open-source front-end JavaScript library for building user interfaces.

-   Vite - a build tool and development server for modern JavaScript projects, designed to provide a fast and lean development experience.

-   Express - a fast, unopinionated, and minimalist web application framework for Node.js

## Installation

The project uses `npm` as the package manager.

```shell
$ npm install
```

Configure your Firebase project with the Realtime Database so it has the `meals.json` file with the contents of `backend/available-meals.json`. The images are stored in a Google Drive and are accessible by their public ID.

## Running the project

To run the application in development mode:

```shell
$ npm run dev
```

To run the server application, navigate to `backend` folder and run:

```shell
$ npm start
```

To build the project files:

```shell
$ npm run build
```

The application needs the server to function correctly.

## Features

-   Select meals: Navigate through the list of meals and select ones you want in the cart.

-   Manage your cart: Open your cart to manage the quantity of meals in the modal window.

-   Checkout: Submit your address data to store it in the orders on the server side, and wait for the order to surely come fast in your hands!
