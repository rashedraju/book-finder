import Home from "./containers/Home/Home";
import { Route, Redirect } from "react-router-dom";
import asyncComponent from "./hoc/asyncComponent";
import Layout from "./components/Layout/Layout";
const Explore = asyncComponent(() => import("./containers/Explore/Explore"));
const Search = asyncComponent(() => import("./containers/Search/Search"));
const MyShelf = asyncComponent(() => import("./containers/MyShelf/MyShelf"));
const Book = asyncComponent(() => import("./containers/Book/Book"));

const App = () => {
    return (
        <Layout>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/explore">
                <Explore />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/book/:id">
                <Book />
            </Route>
            <Route exact path="/myshelf">
                <MyShelf />
            </Route>
            <Redirect to="/" />
        </Layout>
    );
};

export default App;
