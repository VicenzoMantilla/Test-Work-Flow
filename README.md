# MINDSET - BACKEND.

**Version 2.0.0**

For this week (8th) we have to work on the backend for the mindset project 

As a group we had to work with branches to solve the given tasks.

The project has 3 main areas to focus in, these are:

 - Psychologist

 - Admins

 - Users/Applicants

---

## DEPENDENCIES INCLUDED.

First of all we need to download the last version of Node.js on [ClickHere](https://nodejs.org/es/download/).

In order to set up a server to work we made use of:

```
npm init

npm install express --save

npm install --save-dev nodemon
```

---

## STEPS TO BUILD AND RUN THE SERVER.

```
const express = require ('express')
const app= express()
const cors = require ('cors')
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
const PORT = process.env.PORT || 4000
app.listen(PORT)
```

---

## GROUPS.

- Paloma and Sabrina were assigned to the user/applicant area.

- Martin and Vicenzo were assigned to the admin area.

- Juan y Andres were assigned to the psychologist area.

---

## RESOLUTION - WEEK 09

### Description

This week we were introduce to the libraries Mongoose and the database MongoDB, throughout the week

we became familiar with Mongo-Atlas & Postman.

## Introduction

For this week (09) we need to rearrange the files for the last week, we include new concepts to simplify

the tasks previously assingned.

We added new files like:

- Controllers

- Models

- Routes

For models:

- We add the schemas so that the database has a basic structure for the data to be included.

For controllers:

- Inside this folder we added the functionality for the actions we needed to do on the database.

For routes:

- Here we configure the routes that include the methods and controllers to be used.

## RUN 

First you need to run server we can do this with:
```
npm run start
```
Then you can either access to the routes with Postman or on your local web browser with the port 5000

e.g. router.use("/", nameRoute);

## Contributors.

- Vicenzo Mantilla <vicenzomantilla94@gmail.com>

- Paloma Quiroz <palomaxquiroz@gmail.com>

- Martin Barea <martin.barea94@gmail.com>

- Sabrina Pereira <pereira.tsabrina@gmail.com>

- Juan Andres Menchaca <juanmenchaca7698@gmail.com>

- Andres Pienizzio <andrespienizzio@gmail.com>

---

## License & Copyright.

© Mindset, Radium Rocket Course.