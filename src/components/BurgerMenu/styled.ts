import styled from 'styled-components';

export const Wrapper = styled.div<{ $isOpen?: boolean }>`
    display: none;
    z-index: ${(props) => props.theme.zIndex.burgerBtn};
    width: 30px;
    height: 30px;
    padding: 8px 6px 8px 5px;
    position: relative;
    cursor: pointer;
    border-radius: 50%;
    &:hover {
        background-color: ${(props) => props.theme.colors.hover};
    }
    &::before {
        content: '';
        position: absolute;
        top: ${(props) => (props.$isOpen ? '14px' : '6px')};
        width: 20px;
        background: ${(props) => props.theme.colors.secondary};
        height: 2px;
        border-radius: 1px;
        transition:
            transform 0.3s,
            top 0.3s;
        transform: ${(props) => (props.$isOpen ? 'rotate(45deg)' : 'none')};
    }
    &::after {
        content: '';
        position: absolute;
        bottom: ${(props) => (props.$isOpen ? '14px' : '6px')};
        width: 20px;
        background: ${(props) => props.theme.colors.secondary};
        height: 2px;
        border-radius: 1px;
        transition:
            transform 0.3s,
            bottom 0.3s;
        transform: ${(props) => (props.$isOpen ? 'rotate(-45deg)' : 'none')};
    }
    @media (max-width: ${(props) => props.theme.breakPoints.tablet}px) {
        display: block;
    }
`;
export const Line = styled.span<{ $isOpen?: boolean }>`
    position: absolute;
    top: 14px;
    width: 20px;
    background: ${(props) => props.theme.colors.secondary};
    height: 2px;
    border-radius: 1px;
    transition: transform 0.3s;
    transform: ${(props) => (props.$isOpen ? 'scale(0)' : 'scale(1)')};
`;
