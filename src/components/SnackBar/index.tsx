import React from 'react';

import {
  Icon, MainInfo, MainText, TimeShowing, Wrapper,
} from './styled';
import success from '../../assets/images/success.svg';
import { IObserver, Observer } from '../../model/observer';

export interface ISnackBar{
  observer: Observer;
}
export interface SnackBarState {
  data: boolean;
}
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
            The chart was built successfully
          </MainText>
        </MainInfo>
        <TimeShowing />
      </Wrapper>
    );
  }
}
