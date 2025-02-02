import useSWR from "swr";
import { ListItemType } from "../components/todo/ListItem/ListItemType";

const fetchTodoItems = async (): Promise<ListItemType[]> => {
    const response = await fetch("http://localhost:3000/items");
    const items: ListItemType[] = await response.json();
    return items.reverse();
};

export const useTodoItems = () => {
    const { data, error, isLoading } = useSWR("/api/items", fetchTodoItems);

    return {
        todoItems: data ?? [],
        isLoading,
        isError: error,
    };
};
