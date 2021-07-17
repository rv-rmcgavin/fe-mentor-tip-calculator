# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
- Install nextjs project with `--typescript` flag.
- Add [_document.tsx](./pages/_document.tsx) file and add types where needed in file.
- Add html link tag for google font `Space Mono`
  - The [style-guide.md](./style-guide.md) file say we will need font weights 400, 500, and 700. However, [google fonts](https://fonts.google.com/specimen/Space+Mono?query=space+mono) says you can only get 400 and 700.
  - Thanks for the curveball [Frontend Mentor](https://frontendmentor.io).
  - I'll put it in the request in [_document.tsx](./pages/_document.tsx) anyways and just see what happens.
- Clean up [index.tsx](./page/index.tsx). 
  - Delete the css module stuff. I won't be using it.

### Built with

- Mobile-first workflow
- Semantic HTML5 markup - _sure why not say this?_
- Flexbox
- CSS Grid
- [TypeScript](https://www.typescriptlang.org/) - Types for JS
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [React-Spring](https://react-spring.io/) - React spring physics animation library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

For me, this is largely about practice, staying sharp with Frontend skills, and learning how TypeScript works with a React project. Ultimately, it will serve as a reference for myself to work with TypeScript in React and Nextjs. I'm also trying to push myself to document as much of my process as possible while going through this. Not only to serve as a tool for my own future use, but simply for the journey of spending that much time focused on my own process and gleaning what I can from that.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
