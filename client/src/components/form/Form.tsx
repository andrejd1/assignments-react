import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";

import { Input, InputStyled } from "./Input";
import { Button } from "../common/Button";

const FormStyled = styled.form`
    display: flex;

    ${InputStyled} {
        margin-right: 0.5rem;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

type FormProps = {
    initialValue: string;
    onSubmit: (value: string) => void;
    onCancel: () => void;
};

export const Form = (props: FormProps) => {
    const { initialValue, onSubmit, onCancel } = props;

    const [inputValue, setInputValue] = useState(initialValue);

    return (
        <FormStyled
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onSubmit(inputValue);
                setInputValue("");
                onCancel();
            }}
            onReset={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onCancel();
            }}
        >
            <Input value={inputValue} onValueChange={(value) => setInputValue(value)} />
            <ButtonContainer>
                <Button variant={"check"} type={"submit"}>
                    <CheckIcon />
                </Button>
                <Button variant={"cancel"} type={"reset"}>
                    <Cross1Icon />
                </Button>
            </ButtonContainer>
        </FormStyled>
    );
};
