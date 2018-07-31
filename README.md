
Project 5 - by Tawfik, Noor & Suha.
---

Our link:
---

Our aim:
---

Our aim for this week project is to provide the user with updated live news according tp the country he chooses in the search box, so an updated list of suggestion of the coutries names appears according to the string/letter, thus the user can easily pick up the country name he is searching for. after that, a specific number of different type of news will be shown, the user can choose the category of the news, and then he gets a relavant news about what he's searching for. note that, the user will get different news updated news every few hours he do searching. 


Project goals:
---

- [ ] Use at least 1 API

- [ ] Make your API calls from the back-end using the Request module (or one you build yourself)

- [ ] Your server should contain a minimum of 2 routes

- [ ] We expect back-end testing using Tape (test as many components as you can) and basic front-end testing.

- [ ] Test your server by injecting fake HTTP requests using Supertest (consider testing for 404's and 500's).

- [ ] Host your project on Heroku, see resources

- [ ] Use module.exports and require to break a single large server file into smaller modules.

- [ ] Consider a good server file structure based on what we have discussed over the week.

- [ ] Employ continuous intergration on your project with Travis or a similar tool. (If you decide to use Travis, we strongly recommend that you host this project in your own repo rather than in your cohort's FAC repository to avoid all builds getting queued together)

- [ ] Use CodeCov or a similar tool for test coverage.

- [ ] Include Error Handling. For example:

.if a user attempts to make a request to a non-existent route to your server (404 - as mentioned above), provide the user with a custom response.
.if there is a programmer error on your server (e.g. a handler function does not act as intended, or receives a datatype it is not expecting), provide the user with a custom response (500 status code).
- [ ] Include a user input field on your web app and include server-side validation to protect your server from potentially malicious user input.
---
Stretch goal :
---
- [ ] Create a route and functionality for a POST request.

- [ ] Display continuous intergration and code coverage badges on your project README.
---
Software architecture:
---
![untitled diagram 1](https://user-images.githubusercontent.com/33840142/43459642-cc2eb824-94d6-11e8-9a10-01e19cc40a8d.png)

---
Statement process:
---
- [ ] The user chooses a country name
- [ ] a variety of live updated news appears on the page
- [ ] the user can choose the catigory of the news he wants
- [ ] Make sure that each time we choose to navigate, the news will be updated
- [ ] An automatic translation to english for news in different languages
---
User's stories:
---
 - [ ] Show a list of coutries names suggestion according to the letters/string being typed.
 - [ ] Update and filter the list of suggestion each time we add more letter.
 - [ ] Creating a large data file (JSON).
 - [ ] A quick and easy search through the data file and loading.
 
