import React from "react";
import { FooterProps } from "./FooterProps";
import { FooterItem, FooterStyled } from "./StyledFooter";

export const Footer = ({ todoItems, doneItems }: FooterProps) => {
    
    return (
        <FooterStyled>
            <FooterItem>
                Todo: {todoItems ?? 0}
            </FooterItem>
            <FooterItem>
                Done: {doneItems ?? 0}
            </FooterItem>
        </FooterStyled>
    );
};
