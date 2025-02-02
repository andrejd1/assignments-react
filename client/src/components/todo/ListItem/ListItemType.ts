export type ListItemType = {
    id: number;
    createdAt: number;
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string, id?: number) => void;
    onItemDoneToggle: (isDone: boolean, id?: number) => void;
    onItemDelete: (id: number) => void;
};
