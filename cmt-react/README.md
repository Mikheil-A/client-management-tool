# Client Management Tool in React

* run `npm start` to start the app and go to http://localhost:3002
* run `npm run mock:server` to start server (go to http://localhost:3005/clients or http://localhost:3005/accounts to watch the data).


<!--
I was told to build this app as a TBC test task on a Angular developer position.
But I build it in React later just for the sake of learning and practising React.
-->



<!-- Initial mock data:

{
  "clients": [
    {
      "id": 1,
      "firstName": "Misho",
      "lastName": "Aleksidze",
      "gender": "კაცი",
      "pid": "000000000",
      "phone": 555555555,
      "legalAddress": {
        "country": "Georgia",
        "city": "Gori",
        "address": "address"
      },
      "actualAddress": {
        "country": "Georgia",
        "city": "Tbilisi",
        "address": "address"
      },
      "photo": ""
    },
    {
      "id": 2,
      "firstName": "Jennifer",
      "lastName": "Smith",
      "gender": "ქალი",
      "pid": "111111111",
      "phone": 544444444,
      "legalAddress": {
        "country": "USA",
        "city": "San Jose",
        "address": "str 1"
      },
      "actualAddress": {
        "country": "Canada",
        "city": "Vancouver",
        "address": "Howe St, Vancouver, BC VZS 2S8"
      },
      "photo": ""
    },
    {
      "id": 3,
      "firstName": "Jane",
      "lastName": "Doe",
      "gender": "ქალი",
      "pid": "222222222",
      "phone": 544444444,
      "legalAddress": {
        "country": "USA",
        "city": "Delaware",
        "address": "str 2"
      },
      "actualAddress": {
        "country": "Canada",
        "city": "Toronto",
        "address": "Howe St, BC VZS 2S8"
      },
      "photo": ""
    },
    {
      "id": 4,
      "firstName": "John",
      "lastName": "Doe",
      "gender": "კაცი",
      "pid": "999999999",
      "phone": 544444444,
      "legalAddress": {
        "country": "Georgia",
        "city": "Tbilisi",
        "address": "str 1"
      },
      "actualAddress": {
        "country": "Canada",
        "city": "Vancouver",
        "address": "Howe St, Vancouver, BC VZS 2S8"
      },
      "photo": ""
    }
  ],

  "accounts": [
    {
      "id": 1,
      "client-id": 1,
      "type": "მიმდინარე",
      "currency": "USD",
      "status": "აქტიური"
    },
    {
      "id": 2,
      "client-id": 1,
      "type": "დაგროვებითი",
      "currency": "GEL",
      "status": "გახურული"
    },
    {
      "id": 3,
      "client-id": 2,
      "type": "შემნახველი",
      "currency": "EUR",
      "status": "აქტიური"
    },
    {
      "id": 4,
      "client-id": 2,
      "type": "მიმდინარე",
      "currency": "RUB",
      "status": "გახურული"
    },
    {
      "id": 5,
      "client-id": 3,
      "type": "მიმდინარე",
      "currency": "USD",
      "status": "აქტიური"
    }
  ]
}

-->





<!--

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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
