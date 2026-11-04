# Advice generator app

My solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io).

## Table of contents

- [Overview](#overview)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Notes](#notes)
- [Author](#author)

## Overview

Users can:

- See a random piece of advice when the page loads
- Click the dice button to generate new advice
- See the advice number and the advice text update together
- See a loading state while the advice is being fetched
- See a friendly error message if the advice can't be loaded
- See the layout and divider image change to suit their screen size (mobile and desktop designs)
- See hover and focus states on the dice button

## Links

- Live site: https://theint-hub.github.io/advice-generator-app/
- Repository: https://github.com/theint-hub/advice-generator-app.git

## Built with

- Semantic HTML5
- CSS custom properties (variables)
- Mobile-first workflow with a `min-width` media query and `rem` units
- Vanilla JavaScript (`fetch`, `async`/`await`)
- [Advice Slip API](https://api.adviceslip.com/)
- Google Fonts (Manrope)

## What I learned

- **My first API project:** I used `fetch` with `async`/`await`, checked `response.ok`, and read the advice and its number from the same response, so they can never mismatch.
- **Handling failure:** a `try`/`catch`/`finally` block shows a friendly error on the page when the request fails or no advice exists for an id, and always re-enables the button afterwards.
- **A loading state:** the dice button is disabled while a request runs, so fast clicks can't send overlapping requests.
- **Responsive images:** the `<picture>` element swaps the mobile and desktop divider images.
- **Positioning:** the dice button overlaps the bottom edge of the card using `position: absolute` and `transform: translate(-50%, 50%)`.
- **Accessibility:** `aria-live="polite"` announces new advice to screen readers, and the icon-only button has an `aria-label`.

## Notes

- The free style guide does not list the hover glow or some of the sizes, so I measured them from the design images. They are close but may not be exact.
- The API sometimes returns the same advice if you click quickly, because its responses can be cached.

## Author

- GitHub: [@YOUR-USERNAME](https://github.com/YOUR-USERNAME)
- Frontend Mentor: [@YOUR-USERNAME](https://www.frontendmentor.io/profile/YOUR-USERNAME)
