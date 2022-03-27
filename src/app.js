import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import SideNavBar from './components/sidenavbar'

import './css/app.scss'

const Discover = lazy(() => import('./pages/discover'))

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <PageContainer>
            <SideNavBar {...this.props} />
            <ContentWrapper>
              <Switch>
                <Route path="/discover" component={Discover} {...this.props} />
              </Switch>
            </ContentWrapper>
          </PageContainer>
        </Suspense>
      </Router>
    )
  }
}

const ContentWrapper = styled.main`
  padding-left: 280px;
  @media (max-width: 1024px) {
    padding-left: 0;
  }
`

const PageContainer = styled.main`
  overflow-x: hidden;
`
