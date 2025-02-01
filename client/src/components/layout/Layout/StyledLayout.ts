import styled from "styled-components";

export const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 600px;
    min-height: 50vh;
    margin: 0 30px;
    padding: 20px;

    background-color: rgb(255, 255, 255);
    border: 1px solid ${(props) => props.theme.colors.olive6};
    border-radius: 5px;
`;

export const StyledContent = styled.main`
    flex: 1;
`;