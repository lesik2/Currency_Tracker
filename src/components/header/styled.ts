import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
`;
export const Wrapper = styled.section`
  display: flex;
  height: 103px;
  align-items: center;
  justify-content: space-around;
`;
export const HeaderImage = styled.img`
  width: 40px;
  height: 41px;
`;
export const LinkText = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.fontWeight.light};
  line-height: 41px;
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 115px;
`;
export const WrapperLabel = styled.section`
  display: flex;
  margin: 0px 16px 0px 20px;
  background: ${(props) => props.theme.colors.secondaryGradient};
  padding: 33px 0px 59px 46px;
  align-items: center;
`;
export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const WrapperTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 64px;
`;
export const MainTitle = styled.h1`
  font-size: 75px;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-family: ${(props) => props.theme.fonts.bold};
  font-style: normal;
  line-height: normal;
  background: ${(props) => props.theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  user-select: none;
`;
export const SecondTitle = styled.h1`
  font-size: 88px;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-family: ${(props) => props.theme.fonts.bold};
  font-style: normal;
  line-height: normal;
  background: ${(props) => props.theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: -17px 0px 0px 0px;
  user-select: none;
`;
export const HeaderText = styled.p`
  color: ${(props) => props.theme.colors.darkWhite};
  font-size: 25px;
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeight.light};
  line-height: 47px;
  text-align: center;
  width: 397px;
`;
export const LabelImage = styled.img`
  width: 300px;
  height: 312px;
`;
