import circleAnimation from '../../assets/images/circleAnimation.svg';
import { STATIC_INFO } from '../../constants/index.ts';
import { useAppSelector } from '../../hooks/redux.ts';
import {
  DateImage, DateWrapper, TextDate, Wrapper,
} from './styled.ts';

export function DateUpdate() {
  const time = useAppSelector((state) => state.appReducer.timeOfUpdate);
  return (
    <Wrapper>
      <DateWrapper>
        <DateImage alt="circle animation" src={circleAnimation} />
        <TextDate>
          {STATIC_INFO.LAST_UPDATE}
          {' '}
          {time}
        </TextDate>
      </DateWrapper>
    </Wrapper>

  );
}
