import React from "react";

export type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};