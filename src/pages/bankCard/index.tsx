import React from 'react';

import { MapComponent } from '../../components/Map/index';
import { SearchForm } from '../../components/SearchForm/index';
import { Wrapper } from './styled';

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
