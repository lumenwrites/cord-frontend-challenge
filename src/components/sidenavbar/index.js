import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

import * as colors from '../../colors'
import Arrow from '../../images/arrow-icon.png'
import SearchWhite from '../../images/search-icon-white.png'
import BarsIcon from '../../images/bars.svg'

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <HamburgerMenu
        className={isOpen ? 'hidden' : ''}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img src={BarsIcon} alt="Open sidebar" />
      </HamburgerMenu>
      <DarkBG
        className={isOpen ? 'visible' : ''}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <SideNavBarCont className={isOpen ? 'visible' : ''}>
        <SideNavHeader>
          Wesley
          <img src={Arrow} alt="Arrow pointing down" />
        </SideNavHeader>
        <SideNavMainLink to="/discover" exact>
          Discover
          <img src={SearchWhite} alt="Magnifying glass" />
        </SideNavMainLink>
        <SideNavSectionTitle>
          <HeaderText>Watched</HeaderText>
        </SideNavSectionTitle>
        <NavLink to="/watched/movies">Movies</NavLink>
        <NavLink to="/watched/tv-shows">Tv Shows</NavLink>
        <SideNavSectionTitle>
          <HeaderText>Saved</HeaderText>
        </SideNavSectionTitle>
        <NavLink to="/saved/movies">Movies</NavLink>
        <NavLink to="/saved/tv-shows">Tv Shows</NavLink>
      </SideNavBarCont>
    </>
  )
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  color: white;
  @media (max-width: 1024px) {
    transform: translate3d(-280px, 0, 0);
    transition: transform 0.35s;
    &.visible {
      transform: translate3d(0, 0, 0);
    }
  }
`

const HamburgerMenu = styled.div`
  position:absolute;
  top: 65px;
  left: 35px;
  display: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: block;
  }
  &.hidden {
    display:none;
  }
`

const DarkBG = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  background: #000;
  opacity: 0;
  transition: opacity 0.35s ease-in-out;
  visibility: hidden;
  &.visible {
    visibility: visible;
    opacity: 0.8;
  }
`
const SectionsStyles = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`

const SideNavMainLink = styled(Link)`
  ${SectionsStyles}

  &:hover, &:focus-visible {
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
  }
`

const SideNavHeader = styled.div`
  ${SectionsStyles}
`

const SideNavSectionTitle = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  padding: 25px 0 15px 35px;
`

const HeaderText = styled.div`
  padding: 0 35px 10px 0;
  border-bottom: 1px solid ${colors.lightBackground};
`

const NavLink = styled(Link)`
  display: block;
  color: white;
  opacity: 0.8;
  font-size: 1.2em;
  padding: 10px 35px;

  &:hover,
  &:focus-visible {
    opacity: 1;
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
    opacity: 1;
  }
`
