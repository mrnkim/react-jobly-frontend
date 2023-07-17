<a id="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<!-- <details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#component-design">Component Design</a></li>
        </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#start-the-server">Start the Server</a></li>
        <li><a href="#start-the-client">Start the Client</a></li>
      </ul>
    </li>
       <li><a href="#todos">To-Dos</a></li>
    <li><a href="#credits">Credits</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## 1. About The Project

Jobly is a job-searching platform where a user can browse a list of companies and jobs that belong to each company. A user can search for a specific company or job using a keyword search. A user should sign up to access the company and job list and is able to log in and log out.

[![Product Name Screen Shot][product-screenshot]](https://jobly-mkim.surge.sh/)

### Built With

- JavaScript
- React
- React Bootstrap
- CSS

### Component Design

![Component Design Screen Shot][component-design]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 2. Getting Started

### Start the Server

1. Go to the backend server repo at [react-jobly-backend](https://github.com/mrnkim/react-jobly-backend)
2. Clone the repo
3. Create and connect database
   ```sh
   psql -f jobly.sql jobly
   ```
4. Install and start the server
   ```sh
   npm install
   npm start
   ```

### Start the Client

1. Clone the current repo
2. Install and start the client
   ```sh
   npm install
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## 3. To-Dos

- Add tests
- Fix error messages in signup form
- Style loading spinner in login form
- Add back button in company list and job list

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CREDITS -->

## 4. Credits

This app uses a backend server built by Rithm School. The goal of this project was to focus on the frontend portion of the app. However, I did build my version of the backend server [here](https://github.com/mrnkim/express-jobly) using Node and Express.

The initial construction of the frontend (the current repository) was a collaborative effort with @stzheng716, undertaken during a 3-day sprint at Rithm School. Following my graduation, I refactored the code to enhance its functionality and styling.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[product-screenshot]: public/Screenshot.png
[component-design]: public/component-design.png
