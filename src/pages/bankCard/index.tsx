import React from 'react';

import { Wrapper } from './styled';
import { MapComponent } from '../../components/Map/index';
import { SearchForm } from '../../components/SearchForm/index';

export interface IBankCard{

}
export interface BankCardState {
  search: string;
}
export class BankCard extends React.Component<IBankCard, BankCardState> {
  constructor(props: IBankCard) {
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
      <Wrapper data-cy="bankcard">
        <SearchForm handleChange={this.handleChange} />
        <MapComponent value={search} />
      </Wrapper>
    );
  }
}
