# Rappi challenge(Frontend Developer Challenge)
According to the challenge, I created an e-commerce, called “El Baratón”.
[Live demo](https://rappi-test.herokuapp.com/).

## Main functionalities:
- **Filter products** by price range, availability and stock.
- **Order products** by price, availability and stock.
- **Category filter** that filters products within that category. If the category doesn’t include sub-levels, it will display a search bar.
- Add products to the checkout **cart**.
- Products in the cart **must persist** even if the user closes the browser. They will only be removed if the user completes the checkout process or if the user removes them manually.
- The design must be **responsive**.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Quick start
 1. Make sure that you have Node.js v8.10 and npm v5 or above installed.
 2. Clone this repo.
 3. Run npm install in order to install dependencies.
 4. At this point you can run npm start to see the example app at http://localhost:3000.

## Made with:
[React](https://reactjs.org/) as a js framework.
[Redux](https://redux.js.org/) and [redux-persist](https://github.com/rt2zz/redux-persist) to store the app state. (state management)
[Redux-thunk](https://github.com/reduxjs/redux-thunk) as a middleware for redux.
[Jest](https://jestjs.io/) and [enzyme](https://airbnb.io/enzyme/) to testing.
[Bootstrap](https://react-bootstrap.github.io/) as a css library.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner. Test with: <br>
 - [Mocha](https://mochajs.org/) - The test framework used.
 - [Chai](https://www.chaijs.com/) - The assertion library used.
 - [Enzyme](https://airbnb.io/enzyme/) - A JavaScript Testing utility for React.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
