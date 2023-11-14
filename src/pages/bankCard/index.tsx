import React from 'react';

import { MapComponent } from '../../components/Map/index.tsx';
import { SearchForm } from '../../components/SearchForm/index.tsx';
import { Wrapper } from './styled.ts';

export interface IBankCard{

}
export interface BankCardState {
  search: string;
}
export class BankCard extends React.Component<IBankCard, BankCardState> {
  constructor(props:IBankCard) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value: string) {
    this.setState({ search: value });
  }

  override render() {
    const { search } = this.state;
    return (
      <Wrapper>
        <SearchForm handleChange={this.handleChange} />
        <MapComponent value={search} />
      </Wrapper>
    );
  }
}
