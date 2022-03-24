import React from 'react'
import styled from 'styled-components'

export default function AccordionFilter({ genres }) {
  console.log('Genres', genres)
  return (
    <div>
      Genres
      {genres.map((genre) => (
        <div key={genre.id}>{genre.name}</div>
      ))}
    </div>
  )
}
