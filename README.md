# Cord Coding Challenge (Front-end)

This is the completed version of the coding challenge for my application at cord.

See the deployed version of the app here: 

https://cord-frontend-challenge.vercel.app/discover

Screenshots - desktop version, mobile version, and mobile with opened sidebar:
![](https://github.com/lumenwrites/cord-frontend-challenge/blob/main/assets/completed-app.png)

## Implemented functionality:

- Users can search for movies by keywords and year of release.
- Search results update in real time as the user types into searchboxes.
- Sidebar displays filter categories and filtering options (by genre, rating, etc.)
- Filter categories can be expanded and collapsed when user clicks on them.
- The website is responsive. 
- On mobile devices the sidebar is hidden, and sildes out when user clicks on the hamburger icon.

## APIs
Movie data is queried via [theMovieDB]:
- Popular movies API doc: [popularMovies]
- Movie Genres API doc: [movieGenres]
- Search movies API doc: [searchMovies]

## Installation instruction
Clone the repo, install the packages:
```
npm i
```

Create a `.env` file containing:
```
REACT_APP_API_KEY=<theMovieDB API key>
```

Run `npm run start-js`.
