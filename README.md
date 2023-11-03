# Phase 2, Lecture 7: Client-Side Routing

## Lecture Topics

- React Router

## Introduction

Today we'll continue to build our app for the pet adoption center, Flatapets, that displays a list of pets available for adoption at this pet adoption center. We will be using React Router to organize our single-page app into separate routes that will allow us to display different pages in this single-page app.

## Setup

1. Run `npm install` in your terminal to install the dependencies for this React app.
2. Run `npm install react-router-dom@6` to install react-router-dom so you can start using React Router version 6 (the curriculum covers React Router version 6, so make sure to include @6 at the end of the install command to install React Router version 6).
3. Run `npm run server`. This will run your backend on port `4000`.
4. In a new terminal, run `npm start` in your terminal to run this React app in the browser. If your browser does not automatically open the page for you, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

In our React application, the data about the Pets is in the `db.json` file. This file will mimic an API that follows RESTful conventions.

Make sure to open [http://localhost:4000/pets](http://localhost:4000/pets) in the browser to verify that your backend is working before you proceed!