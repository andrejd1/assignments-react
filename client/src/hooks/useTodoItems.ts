import useSWR from "swr";

const fetchTodoItems = async () => {
    const response = await fetch("http://localhost:3000/items");
    return await response.json();
};

export const useTodoItems = () => {
    const { data, error, isLoading, mutate } = useSWR("/api/items", fetchTodoItems);

    return {
        todoItems: data,
        mutate,
        isLoading,
        isError: error,
    };
};
