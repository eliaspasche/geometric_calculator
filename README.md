# Geometric Calculator

This application was developed as part of a school project for the BBS II Göttingen.

## Local Setup

To run this application locally, you must have Node.js installed.
Please go to [https://nodejs.org/en/download/current](https://nodejs.org/en/download/current) and
download the latest version of Node.js for your operating system and follow the instructions of the installer.

After successful installation, the libraries used must be installed. To do this, run `npm install` in the root folder of
the application.
This automatically installs all required dependencies.

The application can then be started:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The entire application code is located in the `./app` folder. In addition to a folder for the classes respectively
types (`./app/types`)
and a folder for your own interface components (`./app/components`), there is a folder for each page of the
application (`./app/figures`, `./app/shapes`, `./app/imprint`).
The individual pages of the application are rooted via this folder structure. The respective folders of a page contain
the user interface implementation (`page.tsx`) of this page as well as a separate file for defining the layout (`layout.tsx`).
