# Movie Explorer 

Homework 15 - React based movie browser website

## Features

- Browse a collection of movies with posters, ratings, and genres
- Search movies by title
- Filter by genre and sort by title, year, or rating
- View information for each movie
- Add and remove movies from favourites

## Tech Stack

- React 18 (Vite)
- React Router v6
- CSS Modules

## Project Structure
```
src/
├── components/
│   ├── MovieCard/
│   ├── Loading/
│   ├── Layout/
│   └── Navbar/
├── pages/
│   ├── home/
│   ├── movies/
│   ├── details/
│   ├── favourites/
│   └── error/
├── hooks/
│   ├── useFetchMovies.js
│   ├── useLocalStorage.js
│   └── useDominantColor.js
└── data/
    └── movies.js
```

## Custom Hooks

- `useFetchMovies` — simulates data fetching with loading and error states
- `useLocalStorage` — persists favourites across sessions
- `useDominantColor` — extracts dominant colour from movie poster for dynamic backgrounds

## Getting Started
```bash
npm install
npm run dev
```

## Pages

- `/` — Home page with search bar 
- `/movies` — Browse and filter all movies
- `/movies/:id` — Detailed view of a single movie
- `/favourites` — Your favourited movies
- `*` — 404 Not Found
