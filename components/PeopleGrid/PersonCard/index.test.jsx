import PersonCard from '.'
import renderWithProvider from '../../../utils/renderWithProvider'

it('renders', () => {
  const { asFragment } = renderWithProvider({}, PersonCard)
  expect(asFragment()).toMatchSnapshot()
})
