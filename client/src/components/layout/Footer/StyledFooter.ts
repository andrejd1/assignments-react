import styled from "styled-components";

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: space-between;

    margin-top: 15px;
    padding-top: 15px;

    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

export const FooterItem = styled.div`
    display: flex;
    align-items: center;
`;