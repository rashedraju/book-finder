import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchField, SearchForm } from './SearchBar.styled';

const SearchBar = () => {
    const searchFieldRef = useRef();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push(`/search?q=${searchFieldRef.current.value}`);
    };

    return (
        <SearchForm onSubmit={handleSubmit}>
            <SearchField ref={searchFieldRef} />
        </SearchForm>
    );
};

export default SearchBar;
