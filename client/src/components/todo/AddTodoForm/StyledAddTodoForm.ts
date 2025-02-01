import styled from "styled-components";

export const StyledAddTodoForm = styled.form`
    display: flex;

    input {
        padding: 0.15rem;
        margin-right: 0.3rem;
    }
    button {
        margin: 0 0.15rem;
        background-color: ${(props) => props.theme.colors.grass9};
        border: 1px solid ${(props) => props.theme.colors.olive9};
        border-radius: 10%;
        color: #fff;
    }
`;
