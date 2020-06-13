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
|Method|URL|Description|
|---|---|---|
GET | /auth/login | redirects to / if user logged in. Renders auth/login
POST | /auth/login | redirects to / if user logged in


body:
    - email
    - password



GET | /auth/signup| redirects to / if user logged in. Renders auth/createaccount

```
body:
    - email
    - password




## Models

```
User model
- email: String
- password: String
- city: String
- image: String



Wine model

. ID
. Name
. Cellar
. Year
. Grape(s)
. Country
. Region
. Type ['red', 'white', 'rose', 'sparkling', 'fortified', 'sweet', 'other']
. Designation of Origin
. Date of acquisition
. Entry date
. Price o gift
. Is this wine a gift - boolean (no price to add)
. Position in the cellar ( texto campo libre)
. Comments (campo libre)
. Image
. Tasting Notes - open field once the wine goes to the My Tasting Gallery



## Links

###GitHub
https://github.com/marcelavbc/villa-wine

## MOCKUPS

https://excalidraw.com/#room=e88d92032ed37724be6e,HxaIeWUi96tUlAaB0mmsvw

## STORYBOARD

https://www.notion.so/f182c09c97af4277b2b25aa35af493e1?v=e8759d12e53f40ac976504c8fc2c99c7