import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3'

export async function fetchMovies() {
  const { data } = await axios.get(`${API_URL}/movie/popular`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  })
  console.log('data.results', data)
  return data.results
}
