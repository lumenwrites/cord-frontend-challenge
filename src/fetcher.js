import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3'

export async function fetchMovies(filters) {
  // No filters, returning top movies
  if (!filters.keyword && !filters.year) {
    const { data } = await axios.get(`${API_URL}/movie/popular`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
      },
    })
    return data.results
  }
  // Searching by keyword or by year
  const { data } = await axios.get(`${API_URL}/search/movie`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      query: filters.keyword,
      year: filters.year,
    },
  })
  return data.results
}

export async function fetchGenres() {
  const { data } = await axios.get(`${API_URL}/genre/movie/list`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY
    },
  })
  return data.genres
}
