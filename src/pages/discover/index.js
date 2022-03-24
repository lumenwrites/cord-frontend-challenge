import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

import * as colors from '../../colors'
import { fetchMovies } from '../../fetcher'

import SearchFilters from '../../components/searchfilter'
import MovieList from '../../components/movielist'

import { useState, useEffect, createContext, useContext } from 'react'

const DEFAULT_SEARCH_FILTERS = {
  keyword: '',
  year: '',
  totalCount: 0,
  genreOptions: [],
  ratingOptions: [
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 },
  ],
  languageOptions: [
    { id: 'GR', name: 'Greek' },
    { id: 'EN', name: 'English' },
    { id: 'RU', name: 'Russian' },
    { id: 'PO', name: 'Polish' },
  ],
}

const SearchContext = createContext({
  filters: {},
  updateFilters: (name, value) => {},
})

export function useSearchContext() {
  return useContext(SearchContext)
}

export default function Discover() {
  const [results, updateResults] = useState([])
  const [filters, updateFilters] = useState(DEFAULT_SEARCH_FILTERS)
  useEffect(() => {
    console.log(filters.year)
    // DONE: Preload and set the popular movies and movie genres when page loads
    fetchMovies().then((results) => {
      updateResults(results)
    })
  }, [filters])

  return (
    <SearchContext.Provider value={{ filters, updateFilters }}>
      <DiscoverWrapper>
        <MobilePageTitle>Discover</MobilePageTitle>{' '}
        {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
        <TotalCount>{filters.totalCount} results</TotalCount>
        <MovieFilters>
          <SearchFilters />
        </MovieFilters>
        <MovieResults>
          <MovieList
            movies={results || []}
            genres={filters.genreOptions || []}
          />
        </MovieResults>
      </DiscoverWrapper>
    </SearchContext.Provider>
  )
}

const DiscoverWrapper = styled.main`
  padding: 35px;
`

const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 295px);
`

const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-top: 15px;
`

const MobilePageTitle = styled.h1`
  display: none;
`

const TotalCount = styled.strong`
  display: block;
`
