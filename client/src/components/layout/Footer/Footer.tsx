import React from "react";
import { FooterProps } from "./FooterProps";
import { FooterStyled } from "./StyledFooter";

export const Footer = ({ todoItems, doneItems }: FooterProps) => {
    
    return (
        <FooterStyled>
            Todo: {todoItems}
            Done: {doneItems}
        </FooterStyled>
    );
};
