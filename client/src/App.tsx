import { Container } from "./components/common/Container";
import { Layout } from "./components/layout/Layout/Layout";
import { List } from "./components/todo/List/List";
import { ThemeProvider } from "./components/providers/ThemeProvider";

export const App = () => (
    <ThemeProvider>
        <Container>
            <Layout>
                <List />
            </Layout>
        </Container>
    </ThemeProvider>
);
