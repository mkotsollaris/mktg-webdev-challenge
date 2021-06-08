import Search from '.'
import renderWithProvider from '../../../utils/renderWithProvider'

it('renders', () => {
  const { asFragment } = renderWithProvider({}, Search)
  expect(asFragment()).toMatchSnapshot()
})
