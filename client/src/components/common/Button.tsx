import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const ButtonStyled = styled.button`
    text-align: center;
    padding: 0.2rem 0.25rem;
`;

export const Button = ({ children, ...props }: ButtonProps) => {
    return <ButtonStyled {...props}>{children}</ButtonStyled>;
};
