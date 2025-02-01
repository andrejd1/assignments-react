import { AddTodoFormProps } from "./AddTodoFormProps";
import React, { useState } from "react";
import { StyledAddTodoForm } from "./StyledAddTodoForm";

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd, onCancel }) => {
    const [label, setLabel] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd(label);
        setLabel("");
    };

    return (
        <StyledAddTodoForm onSubmit={handleSubmit}>
            <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="Enter todo item"
                required
            />
            <button type="submit">Add</button>
            <button type="button" onClick={onCancel}>
                Cancel
            </button>
        </StyledAddTodoForm>
    );
};
