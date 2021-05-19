# ![logo](/client/public/img/devlr-logo-dark-sm.png) devlr | show your skills, share your life
![GitHub license](https://img.shields.io/badge/License-MIT-orange)

### Create a customized profile to display your development background, pinned projects and status updates to share with other developers worldwide.

### 📍 [Visit devlr on Heroku](http://devlrapp.herokuapp.com/) 📍

## Table of Contents

- [Program Description](#program-description)
- [Team Members and Rolls](#team-members-and-rolls)
- [Repo and Heroku App Links](#repo-and-heroku-app-links)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Development](#development)
- [Usage](#usage)
- [DEMO VIDEO](#DEMO-VIDEO)
- [Screenshots](#screenshots)
- [Functionality](#functionality)
- [devlr Team](#devlr-team)

## Program Description
Create a customized profile to display your development background, pinned projects and status updates to share with other developers worldwide. devlr is a social media/portfolio/networking site designed just for developers. There is nothing like it on the open market, the nearest competitor would be Stack Overflow or GitHub for code sharing or Reddit for social interaction. 
<br>Our project combines the benefits of GitHub for sharing your code, and Twitter and other social media for sharing your life. 
* Using OAuth, our application reaches out to the GitHub API to retrieve projects to highlight your work. 
* Using a Mongo database allows users to personalize their pages, leave comments on other user’s pages, like and star comments and projects. 
* In future enhancements, our Premiere tier will allow users to connect with other developers to further their careers, such as pairing mentors with junior developers and a job board to post opportunities for career advancement. 

## Team Members and Rolls:

Brandy Quinlan: Project Manager/Git Controller, Front End Development
Kat Buchanan: Front End Development
Liz Townsend: Front End Development
Vinitha Kumar: Back End/DB Development
Keaton Brewster: Back End/DB Development/Dev Ops

## New Features
OAuth
Edit Profile Information
Edit Posts
Reset Password
Comments/Likes
Follow users
Star comments
Pinned projects instead of just last 5
Posting links in posts/comments
Upload images
Notification
Chat Feature
Mentor matching
Job Board

## Repo and Heroku App Links
* [Link to GitHub Repo - https://github.com/brandyquinlan/devlr](https://github.com/brandyquinlan/devlr)
* [Link to Heroku App - http://devlrapp.herokuapp.com](http://devlrapp.herokuapp.com)
* [Link to live App (COMING SOON) - http://devlrapp.com](http://devlrapp.com)


### User Story

```
AS an authenticated user...
I WANT to use an app to display my web development portfolio as a social media profile
SO THAT I can network with other developers
```

### Acceptance Criteria

```
As an authenticated user...
WHEN I log into the app
    THEN I can sign up my initial account
WHEN I click to Edit Profile
    THEN I open a modal for data entry
    THEN I can enter my GitHub username
WHEN I connect to a GitHub-authenticated account
    THEN I can pull my GitHub profile information to fill my profile components
WHEN I submit changes to my profile
    THEN I can see those changes posted to my page
WHEN I click the Appearance button
    THEN I can change the color of my dashboard theme
WHEN I type a Wall status
    THEN I can see it posted to the top of my feed
WHEN I click the New button
    THEN a modal opens with a larger post box to submit a status post
WHEN I click Account on the side menu
    THEN a modal opens where I can delete my devlr account
WHEN I click on Logout
    THEN I follow the /logout route and am sent to the root page
```

## Development
### Updated Wireframe
![Wireframe](/client/public/img/project3_devlr_wireframe.png)

## Usage
### To begin using devlr, sign up for an account.

- Go to http://devlrapp.herokuapp.com/
- Create an account on the "Signup" screen
- Create a Profile
- Have fun!

## DEMO VIDEO
* [Link to demo - https://drive.google.com/file/d/1gXhaNTOKmYi6MdRocPuC5cnHpRPc00q5/view?usp=sharing](https://drive.google.com/file/d/1gXhaNTOKmYi6MdRocPuC5cnHpRPc00q5/view?usp=sharing)

## Screenshots
![Screenshots](/client/public/img/screenshots.png)


## Functionality

The following technologies were used:
```
Node.js
Express
Express-session
Passport-local
Passport Middleware Authentication
Bcrypt(password hashing)
dotenv
HTML
CSS
JavaScript
JQuery
Axios
Heroku
AtlasDB
```

## devlr Team
Please contact the devlr team with questions: [devlr.app.team@gmail.com](mailto:devlr.app.team@gmail.com)
  
- 🔗 Liz Townsend | GitHub: [liztownd](https://github.com/liztownd)
- 🔗 Kat Buchanan | GitHub: [katsign](https://github.com/katsign)
- 🔗 Vinitha Kumar | GitHub: [selvivini](https://github.com/selvivini)
- 🔗 Brandy Quinlan | GitHub: [brandyquinlan](https://github.com/brandyquinlan)
---
This project is MIT licensed. &copy; 2021
