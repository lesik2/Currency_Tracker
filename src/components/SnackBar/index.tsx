import React from 'react';

import { IObserver, ISnackBar, SnackBarState } from '@customTypes/index';
import success from '@assets/images/success.svg';
import { STATIC_INFO } from '@constants/index';
import {
  Icon, MainInfo, MainText, TimeShowing, Wrapper,
} from './styled';

export class SnackBar extends React.Component<ISnackBar, SnackBarState> implements IObserver {
  private timeoutId: ReturnType<typeof setTimeout> | undefined;

  constructor(props: ISnackBar) {
    super(props);
    this.state = {
      data: false,
    };
    this.update = this.update.bind(this);
  }

  override componentDidMount(): void {
    const { observer } = this.props;
    observer.addObserver(this);
  }

  override componentDidUpdate(_prevProps: Readonly<ISnackBar>, prevState: Readonly<SnackBarState>) {
    const { data } = this.state;
    if (data !== prevState.data) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      if (data) {
        this.timeoutId = setTimeout(() => {
          this.setState({ data: false });
        }, 3200);
      }
    }
  }

  override componentWillUnmount(): void {
    const { observer } = this.props;
    observer.removeObserver(this);
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
  }

  update(data: boolean): void {
    this.setState({ data });
  }

  override render() {
    const { data } = this.state;

    return (
      <Wrapper data-cy="snack-bar" $isVisible={data}>
        <MainInfo>
          <Icon src={success} alt="success icon" />
          <MainText>
            {STATIC_INFO.SNACK_BAR_MESSAGE}
          </MainText>
        </MainInfo>
        <TimeShowing />
      </Wrapper>
    );
  }
}
