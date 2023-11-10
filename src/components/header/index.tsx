import { NavLink } from 'react-router-dom';

import Label from '../../assets/images/label.svg';
import { STATIC_INFO } from '../../constants/index.ts';
import {
  LabelImage,
  LinkText, Navigation, Wrapper,
} from './styled.ts';

function Header() {
  return (
    <Wrapper>
      <LabelImage alt="label chart" src={Label} />
      <Navigation>
        <NavLink to="/">
          <LinkText>
            {STATIC_INFO.HOME_LINK}
          </LinkText>
        </NavLink>
        <NavLink to="timeline">
          <LinkText>
            {STATIC_INFO.TIMELINE_LINK}
          </LinkText>
        </NavLink>
        <NavLink to="bankcard">
          <LinkText>
            {STATIC_INFO.BANK_CARD_LINK}
          </LinkText>
        </NavLink>
        <NavLink to="contact">
          <LinkText>
            {STATIC_INFO.CONTACT_LINK}
          </LinkText>
        </NavLink>
      </Navigation>
    </Wrapper>
  );
}
export default Header;
