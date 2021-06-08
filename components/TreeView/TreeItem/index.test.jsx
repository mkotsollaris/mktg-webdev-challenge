import TreeItem from '.'
import renderWithProvider from '../../../utils/renderWithProvider'

it('renders', () => {
  const { asFragment } = renderWithProvider({}, TreeItem)
  expect(asFragment()).toMatchSnapshot()
})
