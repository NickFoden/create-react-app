# fauna-nf

This package is a script that can be used with CRA - Create React App

To use you run the regulare CRA command and append --scripts-version fauna-nf

This will set you up with a standard Create React App which includes a fauna folder and a file with some basic methods to get you started working with faunadb.

```javascript
create-react-app new-app-name --scripts-version fauna-nf
```

After it completes you will need to run

```javascript
yarn add faunadb
```

And then follow instructions in the fauna\index.js file

Rather than maintain a full fork of the project and include the yarn add faunadb command, this scripts option is lightweight way to get started with some basic boiler plate. As the author dives into more faunadb this package will be updated with more general methods.

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.
