# CryptoSuggester Frontend

This is the Frontend for my CrypoSuggester project. This project fetches prices of Bitcoin and Ethereum from the backend. Then displays it in smallcards on a webpage which also will recommend where to buy and where to sell. I made this project for an interview assignment for Chainalysis. 

## What I learned
* Next.js with Tailwind CSS
* React
* Fetching data from the backend
* JS fundamentals

## Usage
Make sure the backend is running before you run the frontend\
Open terminal and type these commands
```bash
cd CryptoSuggester-Frontend-main
npm install
npm run dev
```
Open brower and go to:
```bash
http://localhost:3000
```
## Chainalysis Questionnaire:
### Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?
Yes, my front end was not well designed. I could have designed it to be more interactive. Also, I have very little experience with React so it takes me a long time to figure out how to make a whole webpage that fetches data from the backend. Lastly, this was the first Springboot project I did, but that was not that hard to figure out since I am well experienced in Java. 
### Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)
Well, one of the designed features are the small cards, when you hover over it with your mouse it pops up. Moreover you can view this webpage on mobile, a small screen and large screen. The webpage was designed with the thought that users will look at it from different size screens. You can try it out too, just minimize your webpage to your liking and see how everything just flows.
### If you have to scale your solution to 100 users/second traffic what changes would you make, if any?
First, I would create a feature for users to login. Which will require me to build a database to store login information. I would use spring security to secure my API and database. I would also add an option where if you want to buy bitcoin from the recommended exchange with a click of a button it will relocate you to that webpage. I would’ve made sure the backend is deployed and hosted so the API’s will always work.
### What are some other enhancements you would have made, if you had more time to do this implementation
* Database for login
* I would add more coins, not just Bitcoin and Etherium.
* I would add more exchanges for the user to choose from

