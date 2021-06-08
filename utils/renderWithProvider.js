import { render } from '@testing-library/react'
import AppContext from '../context/AppContext'

function renderWithProvider(props, Component) {
  return render(
    <AppContext.Provider value={props}>
      <Component />
    </AppContext.Provider>
  )
}

export default renderWithProvider
