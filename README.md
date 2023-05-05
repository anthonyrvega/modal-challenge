## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/username/repo-name.git`
2. Install the dependencies: `npm install`

## Available Scripts

In the project directory, you can run the following scripts:

### `npm run dev`

Runs the app in development mode using Vite.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner to run the `vitest` test suite.


Thanks Abineet!



Action Modal with Vite React, Dialog Tags and Vitest Test Suite
This repository contains an implementation of an Action Modal using Vite React and Dialog Tags. The Action Modal allows users to accept or reject a sale, and updates the state of the sale accordingly. Additionally, this implementation includes a vitest test suite to demonstrate the successful implementation of a test suite and showcase the capabilities of testing.

Why Vite React?
Vite is a build tool that provides a faster and more efficient development experience compared to traditional build tools like Webpack. It design to optimize the development experience by providing fast builds, hmr, and an easy-to-use plugin system made action modal experience seamless. 

React is a popular JavaScript library for building user interfaces. It provides a component-based architecture that allows developers to build complex UIs using simple, reusable components. 

Vite React is a template that provides a pre-configured development environment for building React applications with Vite. It includes the necessary plugins and configurations to enable fast development and optimized builds.

Why Dialog Tags?
Dialog Tags are a native HTML element that provides an easy way to create modal dialogs. Dialog tags are supported by all modern browsers, and provide a consistent and accessible way to implement modals without the need for complex JavaScript code. 

Implementation
The Action Modal is implemented using Vite React and Dialog Tags. The ActionModal component renders a dialog with two buttons: "Accept" and "Reject". The handleAccept and handleReject functions are called when the user clicks on the corresponding button. These functions make a POST request to an API endpoint using the fetch function, and update the state of the sale accordingly.

Vitest Test Suite 
The vitest test suite included in this implementation ensures the proper functionality of the Action Modal. The test suite includes tests for rendering the modal, clicking on the "Accept" and "Reject" buttons, and verifying the state of the sale after each button click. 