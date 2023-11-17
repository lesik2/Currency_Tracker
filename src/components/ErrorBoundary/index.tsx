/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { Component, ErrorInfo, ReactNode } from 'react';

import errorIcon from '../../assets/images/error.svg';
import {
  Error, ErrorMessage, Image, Wrapper,
} from './styled.ts';

interface Props {
    // eslint-disable-next-line react/require-default-props
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    message: string,
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      hasError: false,
      message: '',
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Uncaught error:', error, errorInfo);
  }

  public override render() {
    const { hasError, message } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Wrapper>
          <Image src={errorIcon} alt="error" />
          <Error>There was an error</Error>
          <ErrorMessage>{message}</ErrorMessage>
        </Wrapper>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
