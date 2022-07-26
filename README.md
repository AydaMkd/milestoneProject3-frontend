# milestoneProject3-frontend
This milestone project takes place at the end of the web engineer unit, and concludes the software development program. It's meant to put into practice the skills you learned in courses 9 (Cybersecurity), 10 (Principles of Programming with Python), and 11 (Advanced Topics)¸ as well as the rest of the course.

## Deployment

https://recipesharingfrontend.herokuapp.com/



## Table of Contents

- [Description](#description)
- [Team](#team)
- [Credits](#credits)
- [Application](#application)
- [Api](#api)
- [App](#app)
- [Wireframe](#wireframe)
- [Technology](#technology)
- [Install & Run](#install)
- [Usage](#usage)
- [Sources](#sources)
- [Tracking](#tracking)
- [relationships](#relationships)
- [Issues](#issues)
- [Work In Progress](#WorkInProgress)

## Project Description
This milestone project takes place at the end of the web engineer unit, and concludes the software development program. It's mean to put into practice the skills you learned in courses 9 (Cybersecurity), 10 (Principles of Programming with Python), and 11 (Advanced Topics)Â¸ as well as the rest of the course.

## Team Name

 **Team Hungry**

### Credits
Made by:
- [![Linkedin](https://i.stack.imgur.com/gVE0j.png)][Christina Hurt](https://www.linkedin.com/in/christina-hurt-27445550/)
- [![Linkedin](https://i.stack.imgur.com/gVE0j.png)][Justin Whistle](https://www.linkedin.com/in/justin-whistle/)
- [![Linkedin](https://i.stack.imgur.com/gVE0j.png)][Ayda Mkaddem](https://www.linkedin.com/in/ayda-mkaddem-5a6b6a238/)
- [![Linkedin](https://i.stack.imgur.com/gVE0j.png)][Bertha Zhao](https://www.linkedin.com/in/bertha-zhao-21653b91/)       


## Application name

![Image of our logo](https://github.com/AydaMkd/milestoneProject3-frontend/blob/main/public/images/HangryLogo2.jpeg?raw=true)

### API (http://localhost:5000)
| Method | Path                                 | Purpose                                   |
| ------ | ------------------------------------ | ----------------------------------------- |
| POST   | /                                    | Adds a recipe                             |
| GET    | /                                    | Shows details of a recipe                 |
| GET    | /myrecipes.                          | Show details of your saved myrecipe       |              
| DELETE | /myrecipes/:id.                      | Deletes your saved myrecipe               |
| PUT    | /myrecipes/:id/user.                 | Edits your saved myrecipe                 |
| DELETE | /search/:query.                      | Searches recipe names                     | 

### App (http://localhost:3000)
| Path                  | Component                 | Purpose                                                                         |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------- |
| /sign-up              | `users/SignUpForm.js`     | Takes you to the signup form                                                    |
| /login                | `users/LoginForm.js`      | Takes you to the login screen                                                   |
| /edit                 | `components/Edit.js`      | Allows you to edit a myrecipe                                                   |
| /about                | `components/About.js`     | Takes you to the about page.                                                    |
| /recipes.             | `components/Recipes.js`   | Shows all user's saved recipes                                                  |
| /myrecipe             | `components/MyRecipe.js`  | Shows all saved recipes by logged in user                                       |
| /newrecipe            | `components/MyRecipe.js`  | Takes logged in user to the add recipe page                                     |
| /nutrition            | `components/Nutrition.js` | Search for calories

## Wireframe
<br>
 
 ### Home Page before Login

 ![Image of our Home page before login](https://github.com/AydaMkd/milestoneProject3-frontend/blob/main/public/images/HomePage.png?raw=true)
 <br>

 ![Image of our recipes before login](https://github.com/AydaMkd/milestoneProject3-frontend/blob/main/public/images/Recipes.png?raw=true)
 
 <br>

 ### Home Page after Login
<br>

![Image of our Home Page after login](https://github.com/AydaMkd/milestoneProject3-frontend/blob/main/public/images/Profile.png?raw=true)

<br>

![Image of My Recipes after login](https://github.com/AydaMkd/milestoneProject3-frontend/blob/main/public/images/MyRecipes.png?raw=true) 
<br>

## Technology
  ### Front End
    - Bootstrap
    - React
  ### Back End  
    - Node w/express
    - MongoDb
    - Heroku
    - Postman

## Install & Run
 - #### Frontend (https://github.com/AydaMkd/milestoneProject3-frontend.git)
 - #### npm install
 - #### Backend (https://github.com/AydaMkd/milestoneProject3-backend.git)
 - #### nodemon
## Usage

User should be able to submit their own recipes, keep their favorite recicpes, rate and comment on other users recipes.
## Sources

#### :star: :star: :star: Special Thanks to Software Developer Mai Vang for walking us through Edit, Delete buttons and our Modal :star: :star: :star:

### Learned to align images on readme.
(https://stackoverflow.com/questions/12090472/how-do-i-center-an-image-in-the-readme-md-file-on-github)

### guide to add background images.
(https://www.w3schools.com/jsref/prop_style_backgroundimage.asp)

### bootstrap cards documentation.
(https://www.w3schools.com/bootstrap4/bootstrap_cards.asp)

## Tracking progress

- [Trello](https://trello.com/invite/b/AsBfEMwg/66a0d22147eb32999c88a726b98d6b04/kans-sd-01-final-project)

## Relationships
- Recipes to Comment one to many
- User to Comments one to many
- User to Recipes one to many


### Additional Resources:

 ### Home Page

- Used cards from bootstrap

[calorieninjas API](https://calorieninjas.com/api)

:art:
[ColorPalettes1](https://coolors.co/palette/f7b267-f79d65-f4845f-f27059-f25c54)
:art:
[ColorPalettes2](https://coolors.co/palette/fff460-fccf3c-fc9d28-ed7c1a-f25b09)


<br>

### What we learned:
- When working as a team, make sure to work in the latest version of the repository.
- Connecting the Front-End with Back-End.
- Some dependencies have different versions so our code deprecated. The code was superseded by the newer one. Code was not inmediately removed because this can cause a regression in the application. 
- Time frame, implementing the features we planned in a short amount of time.

### Work In Progress
- Calories Count
- Serving Conversion (MyCookbook.io)
- Add Difficulty Rating
- Inventory of ingredients in pantry 
- Link to grocery store shopping cart for missing ingredients

