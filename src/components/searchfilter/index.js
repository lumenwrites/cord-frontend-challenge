import React from 'react'
import styled, { css } from 'styled-components'

import * as colors from '../../colors'
import AccordionFilter from '../accordionfilter'
import SearchBar from '../../components/searchbar'

import SearchIcon from '../../images/search-icon-yellow.png'
import YearIcon from '../../images/year-icon.png'

import { useSearchContext } from '../../pages/discover'

export default function SearchFilters() {
  const { filters, updateFilters } = useSearchContext()

  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          id="keyword_search_input"
          type="text"
          icon={{ src: SearchIcon, alt: 'Magnifying glass' }}
          placeholder="Search for movies"
          value={filters.keyword}
          onChange={(e) =>
            updateFilters((prev) => ({ ...prev, keyword: e.target.value }))
          }
        />
        <SearchBar
          id="year_search_input"
          type="number"
          icon={{ src: YearIcon, alt: 'Calendar icon' }}
          placeholder="Year of release"
          value={filters.year}
          onChange={(e) =>
            updateFilters((prev) => ({ ...prev, year: e.target.value }))
          }
        />
      </SearchFiltersCont>
      <SearchFiltersCont>
        <AccordionFilter
          items={filters.genreOptions}
          title="Select genre(s)"
        />
        <AccordionFilter
          items={filters.ratingOptions}
          title="Select min. vote"
        />
        <AccordionFilter
          items={filters.languageOptions}
          title="Select language"
        />
      </SearchFiltersCont>
    </FiltersWrapper>
  )
}

const FiltersWrapper = styled.div`
  position: relative;
`

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`
