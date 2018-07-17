## Nom Nom Recipe App

A simple application which displays a list of recipes, with options to add, edit, delete or view recipes. Built using React, Redux, ES6, Sass, Docker.

To run it should be simple!

In the terminal navigate to the directory, and the first step is to start the api,
```
npm run start-api
```

I have created a simple seed file to add a few recipes, in another window run:
```
npm run seed
```

Then start the app:
```
npm start
```

This will kick off the docker build, it will take a while to build (around 5 mins or so) and then go to http://localhost:3000 to see the app.
