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
- Delete `./styles/Home.module.css`
- Install [Styled Components](https://styled-components.com/)
  - `npm install --save styled-components`.
- Set up global styles file using styled-components.
  - [global.ts](./styles/global.ts)
- SURPRISE: I need to get the types for styled-components now by running `npm install --save @types/styled-components`.
- No surprise: I have untyped `theme`, `colors`, and `breakpoint` variables in [global.ts](./styles/global.ts).
- I read styled-components's TypeScript [documentation](https://styled-components.com/docs/api#typescript).
- Ok cool so according to ☝️ I need to create a declarations file, extend the default theme, and create a theme. 
- I read TypeScript's documentation on [declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
- Eventually I realize I just need to make folders and files at `@types/styled.d.ts` and `/styles/theme.ts`.
- I set up [@types/styled.d.ts](@types/styled.d.ts) and [/styles/theme.ts](/styles/theme.ts).
  - The theme and the type declaration file seem to check out, but I am having some problems with [/styles/global.ts](/styles/global.ts).
  - I am getting an error `Property 'primary' does not exist on type '{}'`.
  - I resolved this by removing the default values `theme` and `colors`.
  - Typically I write these as `theme = {}` and `colors = {}`. It's a practice I've gotten used to when writing React because you don't want your app to crash if it tries to call `.length()` for example on `undefined`, completely halting a user who is unlucky enough to get this error. It also is often just needed because not all data is ready at one time in react, so we have defaults that get used and then new data causes rerenders until we get what we want. Without the default though, it just stops. I'm curious to see if using TypeScript somehow is going to give default values where needed, or if there is a different way to write your types with defaults that won't causes the error above.
- Ok Boom! Add the `<ThemeProvider>` and `<GlobalStyle />` components to `/pages/_app.tsx` and we complete setting up styled-components with TypeScript.
  - It was all mostly harmless too. How about that.
- Gather inputs and outputs for this app:
  - Inputs:
    - Total Bill - Number
    - Percentage of - Number
    - Number of people to split with - Number
  - Outputs:
    - The dollar tip amount per person - Number
    - The dollar total amount per person - Number
- Build out a mobile mockup with no functionality simply to achieve the mobile design.
- I did that, and then it became very easy to figure out how to just do it with all the values. It's nearly done now. Not much left but the tweaks.
- Break down Calculator component in to separate components: Bill, TipPercent, People, Display(output).
- Write reset function that I forgot about.
- Write function to get all my line item data.
- Update styled components to use the DefaultTheme interface.
- Style it for Desktop.
- Tweak vertical spacing between elements.
- Add icons to the inputs
  - Used a psuedo element on the label, url encoded the svg, and put it on a `background-image` property.
  - I got to use my [alfred-svg](https://github.com/rickMcGavin/alfred-svg) workflow. It's been ages since I used that.
- Set up the correct active states styling.
- Add ability to disable reset button

Things Left:
- Set up [eslint airbnb eslint config](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
### Built with

- Mobile-first workflow
- Semantic HTML5 markup - _sure why not say this?_
- Flexbox
- [TypeScript](https://www.typescriptlang.org/) - Types for JS
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

For me, this is largely about practice, staying sharp with Frontend skills, and learning how TypeScript works with a React project. Ultimately, it will serve as a reference for myself to work with TypeScript in React and Nextjs. I'm also trying to push myself to document as much of my process as possible while going through this. Not only to serve as a tool for my own future use, but simply for the journey of spending that much time focused on my own process and gleaning what I can from that.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [TypeScript Docs](https://www.typescriptlang.org/) - Official TypeScript docs. Helped in particular with declaring types for objects. 
- [TypeScript Docs for styled-components](https://styled-components.com/docs/api#typescript) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
