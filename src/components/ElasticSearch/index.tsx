import { IElasticSearch } from '../../types/index.ts';
import { List, Wrapper } from './styled.ts';

export function ElasticSearch({ list, setShow, setValue }:IElasticSearch) {
  const handleClick = () => {
    setShow(false);
    setValue('');
  };
  return (
    <Wrapper>
      {list.map((item) => (
        <List onClick={handleClick} key={item.id}>
          {item.nameOfCurrency}
        </List>
      ))}
    </Wrapper>
  );
}
