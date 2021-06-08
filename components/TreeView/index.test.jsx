import TreeView from '.'
import renderWithProvider from '../../utils/renderWithProvider'

it('renders', () => {
  const { asFragment } = renderWithProvider({}, TreeView)
  expect(asFragment()).toMatchSnapshot()
})
