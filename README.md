# Lesson plan
Lesson plan app writen in JavaScript + React.

## Live demo
Live demo is avaiable on https://lesson-plan-js.herokuapp.com/.

## Getting Started
These instructions will start app in development mode

### Prerequisites

1. Install current version of **NodeJS**
2. App uses **MySql** database. Install MySql database on your local machine or use one on online server. Specify address and credentials in  *app-server/src/config.js* file or use enviromental variables to set it.

### Running

Install all dependencsies using
```
npm install --prefix ./app-client && npm install --prefix ./app-server
```

For development purposes we want to have feedback from both server and client sides.

Run these commands in separate terminal windows
```
cd app-client && npm run start-dev
```
```
cd app-server && npm run start-watch
```

If there is no errors your app should be up on http://localhost:8080 and server on http://localhost:3000

## Production

If you want to deploy this app use following commands.

```
npm run postinstall
npm run build
npm start
```

Now app should be running on http://localhost:3000.

You can specify port on which app is running using enviromental *PORT* variable.

### Note

App is still in development and currently lacks a lot of functionalities.

