import ClearFilter from '.'
import renderWithProvider from '../../utils/renderWithProvider'

it('renders', () => {
  const providerProps = {
    setFilteredDepartments: jest.fn(),
  }
  const { asFragment } = renderWithProvider(providerProps, ClearFilter)
  expect(asFragment()).toMatchSnapshot()
})
