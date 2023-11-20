import React from 'react';

import { IObserver, Observer } from '../../model/observer.ts';

export interface ISnackBar{
  observer: Observer;
}
export interface SnackBarState {
  data: boolean;
}
export class SnackBar extends React.Component<ISnackBar, SnackBarState> implements IObserver {
  constructor(props:ISnackBar) {
    super(props);
    this.state = {
      data: false,
    };
    this.update = this.update.bind(this);
  }

  override componentDidMount() {
    const { observer } = this.props;
    observer.addObserver(this);
  }

  override componentWillUnmount() {
    const { observer } = this.props;
    observer.removeObserver(this);
  }

  update(data: boolean) {
    this.setState({ data });
  }

  override render() {
    const { data } = this.state;
    return (
      <div>
        {data}
      </div>
    );
  }
}
