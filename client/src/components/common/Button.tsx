import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "edit" | "delete" | "check" | "cancel";
}

const buttonVariants = {
    edit: css`
        background-color: #4caf50;
        color: white;
    `,
    delete: css`
        background-color: #f44336;
        color: white;
    `,
    check: css`
        background-color: #2196f3;
        color: white;
    `,
    cancel: css`
        background-color: #ff9800;
        color: white;
    `,
};

export const ButtonStyled = styled.button<ButtonProps>`
    text-align: center;
    padding: 0.2rem 0.25rem;
    border: none;
    ${(props) => props.variant && buttonVariants[props.variant]}
`;

export const Button = ({ children, variant, ...props }: ButtonProps) => {
    return (
        <ButtonStyled variant={variant} {...props}>
            {children}
        </ButtonStyled>
    );
};
