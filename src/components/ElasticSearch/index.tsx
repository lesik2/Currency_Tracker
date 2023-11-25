import React from 'react';

import { IElasticSearch } from '@customTypes/index';
import { List, Wrapper } from './styled';

export class ElasticSearch extends React.Component<IElasticSearch> {
  constructor(props: IElasticSearch) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: React.MouseEvent): void {
    const { setShow, handleChange, setValue } = this.props;
    setShow(false);
    const value = event.currentTarget.textContent;
    if (value) {
      handleChange(value);
      setValue(value);
    }
  }

  override render() {
    const { list } = this.props;
    return (
      <Wrapper>
        {list.map((item) => (
          <List onClick={this.handleClick} key={item.id}>
            {item.nameOfCurrency}
          </List>
        ))}
      </Wrapper>
    );
  }
}
