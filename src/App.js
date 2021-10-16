import { Redirect, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import asyncComponent from './hoc/asyncComponent';

const Explore = asyncComponent(() => import('./containers/Explore/Explore'));
const Search = asyncComponent(() => import('./containers/Search/Search'));
const MyShelf = asyncComponent(() => import('./containers/MyShelf/MyShelf'));
const Book = asyncComponent(() => import('./containers/Book/Book'));

const App = () => (
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

export default App;
