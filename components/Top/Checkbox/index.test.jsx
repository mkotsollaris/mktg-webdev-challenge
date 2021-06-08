import Checkbox from '.'
import renderWithProvider from '../../../utils/renderWithProvider'

it('renders', () => {
  const { asFragment } = renderWithProvider({}, Checkbox)
  expect(asFragment()).toMatchSnapshot()
})
