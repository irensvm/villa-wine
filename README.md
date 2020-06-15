# VILLA-wine

# Developers: 
Marcela Vilas Boas - Irene Villanueva
# Link to App: 
xxxx
* use in mode mobile device at browser


## Description

The app helps you to keep your personal wine cellar well organized and to quickly and easily locate the right bottle for this special occasion, according to different search criteria. 

Once you have tasted each wine, create a wine library of open bottles with their tasting notes and photos of the pairing.

Socialize with other wine lovers! Take a virtual tour of your friends' cellars and check out their latest and most appreciated purchases. 

After all, wine is made to share. 
 
## User Stories

- **homepage** - As a user I want to be able to access the homepage //  description //  login and signup
- **sign up** - As a user I want to sign up on the webpage 
- **login** - As a user, I want to be able to log in on the web
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **storage view list** - As a user I want to see all my current wines
- **wine create** - As a user I want I want to a add a new wine to my storage.
- **show storage** - As a user, I want to be able to know how many wines I have in my storage
- **edit wine** - As a user I want to be able to attend to event so that the organizers can count me in.
- **delete wine** - As a user I want to see which escape-rooms are available so I can explore them.
- **search** - As a user, I want to locate a wine in my winery (or cellar) 
- **statistics** As a user, I want to be able to know how many wines I have in my storage
**


## Backlog

List of other features outside of the MVPs scope

User profile:
- see my profile
- upload my pictures and my description
- search filters to find wine storage and opened bottles

Wine Cellar:
- see my wines
- edit my wines
- delete my wines

Opened bottles: 
- see my opened wines
- edit my opened wines
- delete my opened wines




## ROUTES:

## LANDING
| Method | URL             | Description          |
| ------ | --------------- | -------------------- |
| GET    | /public/landing | renders landing page |


### AUTH
## LOGIN

| Method | URL         | Description                                                   |
| ------ | ----------- | ------------------------------------------------------------- |
| GET    | /auth/login | redirects to login form/ if user logged in Renders auth/login |
| POST   | /auth/login | redirects to storage/                                         |

FORM:
    - email
    - password

## CREATE ACCOUNT
| Method | URL                 | Description                                                                     |
| ------ | ------------------- | ------------------------------------------------------------------------------- |
| GET    | /auth/createaccount | redirects to create account form/ if user logged in. Renders auth/createaccount |
| POST   | auth/createaccount  | redirect a storage page                                                         |

FORM:
    - email
    - password


## LOGOUT
| Method | URL          | Description                                    |
| ------ | ------------ | ---------------------------------------------- |
| POST   | /auth/logout | redirects to landing page. Renders auth/logout |


## PROFILE 

| Method | URL      | Description                                  |
| ------ | -------- | -------------------------------------------- |
| GET    | /profile | redirects to profile page                    |
| PUT    | /profile | redirects to profile page withe data changed |


## STORAGE 

| Method | URL              | Description                                         |
| ------ | ---------------- | --------------------------------------------------- |
| GET    | /storage         | redirects to storage page                           |
| GET    | /storage/addwine | redirect to add wine form  add wine button          |
| POST   | /storage/addwine | when the wine is created, redirect to add wine form |

| GET     | /storage/:id | redirect to wine details   magnifying glass button       |
| POST    | /storage/:id | redirects to storage page   Open wine                    |  
| PUT     | /storage/:id | redirects to wine details page     EDIT WINE             |   
| DELETE  | /storage/:id | redirects to storage page   Delete wine                  |  
| GET     | /storage/    | redirect to result wines                                 |


## OPENED WINES 

| Method | URL          | Description                                       |
| ------ | ------------ | ------------------------------------------------- |
| GET    | /open        | redirects to open wine's page                     |
| GET    | /open/:id    | redirect to wine details  magnifying glass button |
| POST   | /open/:id    | redirects to storage page   Open wine             |
| PUT    | /open/:id    | redirects to wine details page     EDIT WINE      |
| DELETE | /open/:id    | redirects to storage page   Delete wine           |



## Models

User model
- email: String
- password: String
- city: String
- image: String



Wine model

- ID
- Name
- Cellar
- Year
- Grape(s)
- Country
- Region
- Type ['red', 'white', 'rose', 'sparkling', 'fortified', 'sweet', 'other']
- Designation of Origin
- Date of acquisition
- Entry date
- Price o gift
- Is this wine a gift - boolean (no price to add)
- Position in the cellar ( texto campo libre)
- Comments (campo libre)
- Image
- Tasting Notes - open field once the wine goes to the My Tasting Galler- 


## Links

###GitHub
https://github.com/marcelavbc/villa-wine

## MOCKUPS

https://excalidraw.com/#room=e88d92032ed37724be6e,HxaIeWUi96tUlAaB0mmsvw

## STORYBOARD

https://www.notion.so/f182c09c97af4277b2b25aa35af493e1?v=e8759d12e53f40ac976504c8fc2c99c7