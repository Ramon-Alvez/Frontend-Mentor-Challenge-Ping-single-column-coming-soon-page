# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents 📖

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview 🔭

### The challenge 🏆

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot 🎴🎥🎬

#### Desktop preview
![Desktop preview image](./src/readme/desktop_preview.png)

#### Active states preview
![Active states preview gif](./src/readme/active_states.gif)

#### Mobile preview
![Mobile preview image](./src/readme/mobile_preview.png)

### Links 🔗

- Solution URL: [Frontend Mentor](https://github.com/Ramon-Alvez/Frontend-Mentor-Challenge-Ping-single-column-coming-soon-page)
- Live Site URL: [Site](https://ramon-alvez.github.io/Frontend-Mentor-Challenge-Ping-single-column-coming-soon-page/)

## My process 💻✒

### Built with 🧱🛠

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned 📚

I'm proud because I made this function were I don't need to made a span for every type of error, I just manipulate his innerText property.

I know this is a simple thing, but I'm really proud of that.

```js
function verifyEmail() {

  if (emailInput.value == '') 
  {
    addError()
    errorSpan.innerText = 'Whoops! It looks like you forgot to add your email'
  }
  else if (!emailRegex.test(emailInput.value))
  {
    addError()
    errorSpan.innerText = 'Please provide a valid email address'
  }
  else
  {
    removeError()
    errorSpan.innerText = ''
  }
}
```

### Continued development 🚀

Now my plan is to study React and then practice more with FMentor Junior challenges.

## Author 🧙‍♂️

- GitHub - [Ramon Alvez](https://github.com/Ramon-Alvez)
- Frontend Mentor - [@Ramon Alvez](https://www.frontendmentor.io/profile/Ramon-Alvez)
- LinkedIn - [@Ramon Alvez](https://www.linkedin.com/in/ramon-alvez/)