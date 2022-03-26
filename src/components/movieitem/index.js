import React from 'react'
import styled from 'styled-components'
import * as colors from '../../colors'

export default function MovieItem({ movie, genres }) {
  return (
    <MovieItemWrapper>
      <LeftCont>
        <img src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt="Movie poster" />
      </LeftCont>
      <RightCont>
        <Title>{movie.title}</Title>
        <Genres>{GenreLabels(movie.genre_ids, genres)}</Genres>
        <Rating>{movie.vote_average}</Rating>
        <Description>{movie.overview}</Description>
        <ReleaseDate>{movie.release_date}</ReleaseDate>
      </RightCont>
    </MovieItemWrapper>
  )
}

function GenreLabels(genreIds, allGenres) {
  const movieGenres = allGenres.filter((genre) => genreIds?.includes(genre.id))
  const genreNames = movieGenres.map((genre) => genre.name)
  return genreNames.join(' | ')
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
  flex: 0 0 150px;
  img {
    max-width: 100%;
  }
  @media (max-width: 540px) {
    flex: 0 0 100px;
  }
`

const RightCont = styled.div`
  h2 {
    margin: 0;
  }
  @media (max-width: 540px) {
    font-size: 0.8em;
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
  font-weight: 100;
  @media (max-width: 540px) {
    position: static;
  }
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
