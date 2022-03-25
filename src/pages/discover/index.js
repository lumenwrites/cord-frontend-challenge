import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

import * as colors from '../../colors'
import { fetchGenres, fetchMovies } from '../../fetcher'

import SearchFilters from '../../components/searchfilter'
import MovieList from '../../components/movielist'

import { useState, useEffect, createContext, useContext } from 'react'

const DEFAULT_SEARCH_FILTERS = {
  keyword: '',
  year: '',
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
  const [results, updateResults] = useState({ results: [], totalCount: 0 })
  const [filters, updateFilters] = useState(DEFAULT_SEARCH_FILTERS)
  // Fetch genres on the first load
  useEffect(() => {
    fetchGenres().then((results) => {
      updateFilters((prev) => ({ ...prev, genreOptions: results }))
    })
  }, [])
  // Fetch movies
  useEffect(() => {
    fetchMovies(filters).then(({ results, totalCount }) => {
      updateResults({ results, totalCount })
    })
  }, [filters])

  return (
    <SearchContext.Provider value={{ filters, updateFilters }}>
      <DiscoverWrapper>
        <MobilePageTitle>Discover</MobilePageTitle>
        <TotalCount>{results.totalCount} results</TotalCount>
        <MovieFilters>
          <SearchFilters />
        </MovieFilters>
        <MovieResults>
          <MovieList
            movies={results.results || []}
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
  @media (max-width: 820px) {
    width: 100%;
  }
`

const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-top: 15px;
  @media (max-width: 820px) {
    display: none;
  }
`

const MobilePageTitle = styled.h1`
  margin-left: 30px;
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`

const TotalCount = styled.strong`
  display: block;
`
