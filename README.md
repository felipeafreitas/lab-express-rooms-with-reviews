![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Rooms App with Reviews - final practice for project #2

## Introduction

In this lab, we will create a fullstack application from scratch over the span of multiple iterations.

## Instructions

The app needs to have users (signup, login, logout functionality) and full CRUD on at least one of the models, but that one model can't be just users (you can have CRUD on users as well, but that can't be the only one). So let's summarize the requirements:

- **Models**: user, room, reviews
- **Routes**: auth, rooms, reviews, users (optional, in case you want to add CRUD on users as well)
- **Views**: all the necessary pages so the users can auth themselves and do the CRUD. For easier navigation through your files and consistent naming please organize all the pages into folders (ex. _auth-views_, _room-views_, _comment-views_, ...)

### Iteration 0 | Create the project

First of all, we need to separate our Frontend from our Backend. Let's create two folders inside our project folder, server (for our backend) and client (for our frontend):

```bash
$ mkdir server
$ mkdir client
```

Now, let's go to our server folder and initialize an empty Express app there:

```bash
$ npm init -y
$ touch app.js
$ npm install express body-parser mongoose dotenv
```

## Iteration #1: The "Plumbing"

Configure your app.js file with all necessary parts for the Express server to run: dotenv and environment variables, configurations for receiving JSON and URLEncoded requests, importing routers and setting the database up, and lastly, initializing the server to listen for HTTP requests.

Remember that everything that you need is in our class examples, let's exercise that research muscle!

## Iteration #1.1: The CRUD on `room` model

Great, we have the boilerplate so let's start adding some more functionality to our app.
Our rooms will have following schema:

```js
const roomSchema = new Schema({
  name: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  reviews: [], // we will update this field a bit later when we create review model
});
```

When the app is ready, our users should be able to:

- create new rooms
- edit and delete the rooms
- see the list of the rooms

Please proceed to creating all the routes and files necessary for the Room CRUD to work

<!-- ## Iteration #3: The `review` model and (optional) CRUD on it

Great, you already have fully functioning CRUD app with users but we will go one more step: let's create *reviews section* for each room.

The review schema can look like this:
```js
const reviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  comment: { type: String,  maxlength: 200 }
})
```
Now we can go ahead and update `reviews` property in the *roomSchema*:
```js
...
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' } ]
...
```
Our users can:
- when logged in, make reviews for all the rooms  but the ones they created
- when logged in, edit and/or delete their comments (optional)
- when logged out, see the rooms and all the comments -->

<!-- ## Iteration #1: The Signup & Login & Logout Features

Our app will have users, and they will use `email` and `password` to authenticate themselves. They will also have to input their full name when signing in. In addition to this way, please feel free to use any  of the social strategies (this is bonus feature).

So your user schema should look somewhat like this:
```js
const userSchema = new Schema({
  email: String,
  password: String,
  fullName: String,
  // slack login - optional
  slackID: String,
  // google login - optional
  googleID: String
}, {
  timestamps: true
});
```

Now create all the routes and views needed to have users successfully signup/login/logout. We suggest using `passport.js` and its local strategy for the mandatory part of this iteration.

💡 Make sure you install all the packages: *bcrypt*, *passport*, *passport-local*, and if you have social login: *passport-google-oauth* and/or *passport-slack*.

**Hint**: You have already everything set up in the previous lessons + class examples, be resourceful 🥳. -->

Happy coding! :heart:
