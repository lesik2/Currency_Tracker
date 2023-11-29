import styled from 'styled-components';

export const Wrapper = styled.div<{ $isOpen?: boolean }>`
    width: 80%;
    @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
        position: fixed;
        top: 0px;
        right: ${(props) => (props.$isOpen ? '0px' : '-100%')};
        width: 100%;
        height: 100vh;
        transition: right 0.5s;
        z-index: ${(props) => props.theme.zIndex.burgerMenuBack};
    }
`;
export const Content = styled.div<{ $isOpen?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
        position: fixed;
        top: 0px;
        right: ${(props) => (props.$isOpen ? '0px' : '-100%')};
        width: 320px;
        height: 100vh;
        background-color: ${(props) => props.theme.colors.primary};
        display: flex;
        flex-direction: column-reverse;
        gap: 80px;
        align-items: center;
        justify-content: center;
        transition: right 0.5s;
        z-index: ${(props) => props.theme.zIndex.burgerMenu};
    }
    @media (max-width: ${(props) => props.theme.breakPoints.mobile}px) {
        width: 100%;
    }
`;
