# BLOG APP FROM UDEMY LESSON - 2021

This blog app is part of Brad Schiff's online Udemy course "Learn JavaScript: Full-Stack from Scratch".

## FEATURES BASED ON THE COURSE

Blog app features with users, posts, followers, profile page, post search and public live chat,

### BACKEND: EXPRESS.JS SERVER

- Model View Controller (MVC) pattern,
- Server-side rendering with EJS template engine complemented with Bootstrap,
- Connection to MongoDB database and custom indexing for search feature,
- Implementation of server endpoints for registration, session based authentication and necessary CRUD operations,
- Server-side form validation,
- Security implementation with: field sanitization, password hashing, CSRF handling and CORS,
- Additional API development with JWT based authentication to expose some server functionalities,
- Socket connection for live chat feature,

### FRONTEND: VANILLA JS WEB CLIENT

- Some client-side rendering with DOM manipulation,
- Client-side validation for registration form,
- Search feature accross all posts,
- Public live chat based on socket connection,
- Flash messages / toasts,
- Bundling of client-side code with Webpack,

## CUSTOM ADDITIONS

- The MongoDB database is containerized, with Docker, and is automatically instanciated on the first launch of the container.
- Added .prettierrc file for cohesive code visualisation.
- Added some extra environment variables,
- Added this README.md file.

## HOW TO DEPLOY THIS APP ON YOUR MACHINE

1. Copy the contents of .env.template in a newly created .env file at the root of the project. Fill in the missing fields. Altough it is not required, you may edit the other fields to your convenience.

2. Install Node.js on your machine if you do not already have it. Execute the command "npm i" in a terminal at the project's location.

3. Install Docker on your machine if do not already have it. Execute the command "docker compose up" in a terminal at the project's location. If the process exits because it cannot find a reference to your OS and architecture, this means you will have to use another mongo image. You will have to edit the image field in the docker-compose.yml file. You may try "mongo:latest" or search for another tag here: https://hub.docker.com/_/mongo/tags.

4. Execute the command "npm run start" at the project's location (or "npm run watch" for hot server reload and webpack bundling of client-side code).

5. In your browser, go to the following url: "http://localhost:3000/". Use the port number you have specified if you edited that environment variable.

6. You may now register into the app.
   To try out all the features you will need at least two accounts. You can create as many accounts as needed by registering to the app with different browsers or by using the private navigation feature of your prefered browser.
   Hope you enjoy this blog app!
