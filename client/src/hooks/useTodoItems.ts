import useSWR from "swr";
import { ListItemType } from "../components/todo/ListItem/ListItemType";

const fetchTodoItems = async (): Promise<ListItemType[]> => {
    const response = await fetch("http://localhost:3000/items");
    const items: ListItemType[] = await response.json();

    return items.sort((a, b) => {
        if (a.isDone === b.isDone) {
            return b.createdAt - a.createdAt;
        }
        return a.isDone ? 1 : -1;
    });
};

export const useTodoItems = () => {
    const { data, error, isLoading } = useSWR("/api/items", fetchTodoItems);

    return {
        todoItems: data ?? [],
        isLoading,
        isError: error,
    };
};
