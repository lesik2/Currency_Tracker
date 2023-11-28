import circleAnimation from '@assets/images/circleAnimation.svg';
import { STATIC_INFO } from '@constants/index';
import { useAppSelector } from '@hooks/redux';
import {
  DateImage, DateWrapper, TextDate, Wrapper,
} from './styled';

export function DateUpdate() {
  const time = useAppSelector((state) => state.appReducer.timeOfUpdate);

  return (
    <Wrapper>
      <DateWrapper>
        <DateImage alt="circle animation" src={circleAnimation} />
        <TextDate dateTime={time}>
          {STATIC_INFO.LAST_UPDATE}
          {' '}
          {time}
        </TextDate>
      </DateWrapper>
    </Wrapper>

  );
}
