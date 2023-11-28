import { Home } from '@pages/Home/index';
import { CODES_NAMES } from '@constants/currency';
import { cleanup, render, screen } from '../test.utils';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

const mockData = {
  currencies: [
    {
      code: CODES_NAMES[0],
      value: 12,
    },
    {
      code: CODES_NAMES[1],
      value: 7,
    },

  ],
};
describe('Home page', () => {
  test('should render Home page', () => {
    const component = render(<Home />);
    expect(component.getByTestId('home-page')).toBeInTheDocument();
  });
  test('should show Loader if number of cards = 0', () => {
    render(
      <Home />,
    );
    expect(screen.getByTestId('infinity-loader')).toBeInTheDocument();
  });
  test('should render 2 cards', () => {
    const component = render(<Home />, { preloadedState: { currenciesReducer: mockData } });
    const cardsWrapper = component.getByTestId('cards-currency-wrapper');
    expect(cardsWrapper.children.length).toBe(2);
  });
});
