import { fireEvent } from '@testing-library/react';
import { ChartComponent } from '@components/ChartComponent/index';
import { cleanup, render, screen } from '../test.utils';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('chart component', () => {
  test('should render modal context', () => {
    const handleClick = jest.fn();
    const component = render(<ChartComponent addToObserver={handleClick} />);
    expect(component.getByTestId('chart-component')).toBeInTheDocument();
  });
  test('should render button for opening modal', () => {
    const handleClick = jest.fn();
    render(<ChartComponent addToObserver={handleClick} />);
    const buttonChart = screen.getByTestId('button-chart');
    expect(buttonChart).toBeInTheDocument();
  });
  test('should open modal after clicking on button', () => {
    const handleClick = jest.fn();
    render(<ChartComponent addToObserver={handleClick} />);
    fireEvent.click(screen.getByTestId('button-chart'));
    const modalContent = screen.getByTestId('chart-model');
    expect(modalContent).toBeInTheDocument();
  });
});
