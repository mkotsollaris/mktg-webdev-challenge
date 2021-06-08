import Top from '.'
import renderWithProvider from '../../utils/renderWithProvider'

it('renders', () => {
  const { asFragment } = renderWithProvider({}, Top)
  expect(asFragment()).toMatchSnapshot()
})
