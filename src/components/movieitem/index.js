import React from 'react'
import styled from 'styled-components'
import * as colors from '../../colors'

function GenresLabels(genreIds, allGenres) {
  const movieGenres = allGenres.filter((genre) => genreIds?.includes(genre.id))
  const genreNames = movieGenres.map((genre) => genre.name)
  return genreNames.join(' | ')
}

export default function MovieItem({ movie, genres }) {
  console.log('movie', movie)
  console.log(genres[0])
  return (
    <MovieItemWrapper>
      <LeftCont>
        <img src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} />
      </LeftCont>
      <RightCont>
        <Title>{movie.title}</Title>
        <Genres>{GenresLabels(movie.genre_ids, genres)}</Genres>
        <Description>{movie.overview}</Description>
        <ReleaseDate>{movie.release_date}</ReleaseDate>
        <Rating>{movie.vote_average}</Rating>
      </RightCont>
    </MovieItemWrapper>
  )
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
  display: flex;
`

const LeftCont = styled.div`
  margin-right: 20px;
  max-width: 150px;
`

const RightCont = styled.div`
  h2 {
    margin: 0;
  }
`

const Title = styled.h2`
  font-size: 1.4;
`
const Genres = styled.span`
  color: ${colors.primaryColor};
`
const Description = styled.p``

const ReleaseDate = styled.span`
  color: ${colors.primaryColor};
  position: absolute;
  bottom: 20px;
`
const Rating = styled.div`
  background: ${colors.primaryColor};
  color: white;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.4;
  padding: 0 5px;
  border-radius: 5px;
`
