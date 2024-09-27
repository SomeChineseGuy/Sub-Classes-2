# M05W13 - Mid-term Project Kickoff

## What is the point of this meeting

- Set you up for success
- Learn to work as a team

### Picking a project

- Wiki Map
- Quiz App
- Story Creator
- Decision Maker
- PasswordKeepR
- Smart TODO List
- Resource Wall
- Buy/Sell Listing Website
- Schoodle
- Food Pick-up Ordering

### User Stories Quiz App

- as a login user I want to create a quiz for me and my friend to do
- as a login user I want to see all of my previous quizzes
- as a login user I want to see my previous attempts at quizzes
- as a user I want to see my friends score on quizzes

## ERD

- The user stories provided you with nouns (user, quizzes, attempt, favourites)
- Nouns are your tables
- From there you take your tables and start to make connections

## What is your site?

- Easy way to think about this:
- is my site a TinyApp or a Twitter
- is my app multi pages or SPA

## Routes

GET /urls
POST /urls/edit

Quiz App
/Quiz/:id - show you a single quiz
/quiz - show you all the quizzes
/quiz/:user/:attempt - show you results of previous quiz
POST /quiz/add `res.redirect`
/api/quiz - just know that if you use API this means you are sending JSON data and not rendering a page

Quzz app into a single page app SPA
/ - this is your homepage and will show everything
/api/quiz - this will give you a JSON data with all the Quizzes
/api/quiz/id - this will give you a JSON data of one Quiz
POST /api/quiz/add - this is a post route of adding a quiz but this route will not redirect - instead you will send a 200 and app will contiunue

### MVP

- Minimum viable product
- @KV Minimum viable Demo

### Wireframes

- Drawing out the site
- Drawing doesn't need to be VERY good - all it needs to do is just layout the site

## User Login

- Don't worry about this feature
- Don't do this feature

```js
// We don't want to see you do this
app.post('/login', (req, res) => {
  req.session.user_id = req.body.user.id;
  res.redirect('/');
});

app.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
});
```
