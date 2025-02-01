import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
`;

export const AddIconButton = styled.button`
    all: unset;
    width: 25px;
    height: 25px;
    text-align: center;
    background-color: ${(props) => props.theme.colors.grass9};
    border: 1px solid ${(props) => props.theme.colors.olive9};
    border-radius: 50%;
    color: #fff;
`;
