import { fireEvent } from '@testing-library/react';
import { ModalContext } from '@components/ModalContext/index';
import { cleanup, render, screen } from '../test.utils';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('modal context', () => {
  test('should render modal context', () => {
    const component = render(<ModalContext nameCard="Commercial Dollar" valueOfBase={3} />);
    expect(component.getByTestId('modal-currency')).toBeInTheDocument();
  });
  test('should display selected currency value in dropdown', () => {
    render(<ModalContext nameCard="Commercial Dollar" valueOfBase={3} />);
    const dropdown = screen.getByTestId('selected-currency');
    expect(dropdown).toHaveTextContent('Commercial Dollar');

    fireEvent.click(dropdown);

    const dropdownOption = screen.getByText('Euro');
    fireEvent.click(dropdownOption);

    expect(dropdown).toHaveTextContent('Euro');
  });

  test('should update amount input value', () => {
    const component = render(<ModalContext nameCard="Commercial Dollar" valueOfBase={3} />);
    const amountInput = component.getByTestId('input-amount');

    fireEvent.change(amountInput, { target: { value: '10' } });
    expect(amountInput).toHaveValue('10');
  });

  test('should calculate and display converted currency', () => {
    const component = render(<ModalContext nameCard="Commercial Dollar" valueOfBase={5} />);
    const amountInput = component.getByTestId('input-amount');

    fireEvent.change(amountInput, { target: { value: '7' } });
    const result = component.getByTestId('result-currency');
    expect(result).toHaveTextContent('10');
  });
  test('should show error message with invalid input', () => {
    const component = render(<ModalContext nameCard="Commercial Dollar" valueOfBase={3} />);
    const amountInput = component.getByTestId('input-amount');

    fireEvent.change(amountInput, { target: { value: 'd10' } });
    expect(screen.getByTestId('error-message-currency')).toBeInTheDocument();
  });
});
