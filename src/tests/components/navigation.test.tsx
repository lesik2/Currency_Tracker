import { NavigationComponent } from '@components/Navigation/index';
import { LINKS_NAMES, PATHS_NAMES } from '@app/index';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render, screen } from '../test.utils';

jest.mock('chart.js/auto', () => ({
  __esModule: true,
  default: {
    register: jest.fn(),
  },
}));
describe('navigation', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });
  test('should render navigation component', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <NavigationComponent active={LINKS_NAMES[0]} handleClick={handleClick} />,
      </BrowserRouter>,
    );
    const navigationElement = getByTestId('navigation');
    expect(navigationElement).toBeInTheDocument();
    LINKS_NAMES.forEach((linkName) => {
      const linkTextElement = screen.getByText(linkName);
      expect(linkTextElement).toBeInTheDocument();
    });
  });
  test('should call handleClick when a link is clicked', async () => {
    const handleClick = jest.fn();
    render(
      <BrowserRouter>
        <NavigationComponent active={LINKS_NAMES[0]} handleClick={handleClick} />
      </BrowserRouter>,
    );
    const link = screen.getByText('Home');
    const timelineLink = screen.getByText('Timeline');
    await userEvent.click(link);
    expect(handleClick).toHaveBeenCalledTimes(1);
    await userEvent.click(timelineLink);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
  test('should navigate to the correct URL when a link is clicked', async () => {
    render(
      <BrowserRouter>
        <NavigationComponent active={LINKS_NAMES[0]} handleClick={jest.fn()} />
      </BrowserRouter>,
    );
    const timelineLink = screen.getByText('Timeline');
    const bankCardLink = screen.getByText('Bank card');
    const contactLink = screen.getByText('Contato');
    await userEvent.click(timelineLink);
    expect(window.location.pathname).toBe(PATHS_NAMES.timeline);
    await userEvent.click(bankCardLink);
    expect(window.location.pathname).toBe(PATHS_NAMES.bankCard);
    await userEvent.click(contactLink);
    expect(window.location.pathname).toBe(PATHS_NAMES.contact);
  });
});
