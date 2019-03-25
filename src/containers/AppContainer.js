import React from 'react'
import Portfolio from '../components/Portfolio/Portfolio'

import withThemeContext from './withThemeContext'
import withModalContext from './withModalContext'
import { compose } from '../utils/functional'

const AppContainer = () => {
  return <Portfolio />
}

export default compose(
  React.memo,
  withThemeContext,
  withModalContext,
)(AppContainer)
