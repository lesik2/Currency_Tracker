import { MouseEvent, Component } from 'react';

import { IElasticSearch } from '@customTypes/index';
import { List, SearchList } from './styled';

export class ElasticSearch extends Component<IElasticSearch> {
  constructor(props: IElasticSearch) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: MouseEvent): void {
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
      <SearchList>
        {list.map((item) => (
          <List onClick={this.handleClick} key={item.id}>
            {item.nameOfCurrency}
          </List>
        ))}
      </SearchList>
    );
  }
}
