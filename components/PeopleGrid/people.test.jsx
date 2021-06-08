import PeopleGrid from '.'
import renderWithProvider from '../../utils/renderWithProvider'

it('renders', () => {
  const { asFragment } = renderWithProvider({}, PeopleGrid)
  expect(asFragment()).toMatchSnapshot()
})
