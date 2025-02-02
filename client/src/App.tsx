import { Container } from "./components/common/Container";
import { Layout } from "./components/layout/Layout/Layout";
import { List } from "./components/todo/List/List";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { useTodoItems } from "./hooks/useTodoItems";

export const App = () => {
    const { todoItems, isError, isLoading } = useTodoItems();
    const doneItems = todoItems.filter((item) => item.isDone).length;

    let content;
    if (isLoading) {
        content = "Loading...";
    } else if (isError) {
        content = "Something went wrong... :(";
    } else {
        content = <List todoItems={todoItems} />;
    }

    return (
        <ThemeProvider>
            <Container>
                <Layout todoItems={todoItems.length} doneItems={doneItems}>
                    {content}
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
