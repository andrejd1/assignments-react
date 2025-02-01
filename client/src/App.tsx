import { Container } from "./components/common/Container";
import { Layout } from "./components/layout/Layout/Layout";
import { List } from "./components/todo/List/List";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { useEffect, useState } from "react";
import { ListItemProps } from "./components/todo/ListItem/ListItemProps";

export const App = () => {
    const [todoItems, setTodoItems] = useState<ListItemProps[]>([]);

    const fetchTodoItems = async () => {
        try {
            const response = await fetch("http://localhost:3000/items");
            // const response = await fetch(import.meta.env.VITE_API_URL);
            const data = await response.json();
            setTodoItems(data);
        } catch (error) {
            console.error("Error fetching todo items:", error);
        }
    };

    useEffect(() => {
        fetchTodoItems();
    }, []);

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <List todoItems={todoItems} />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
