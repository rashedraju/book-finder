import { useEffect } from "react";
import { Section, SectionTitle } from "../../assets/styles/Component.styled";
import { useSearch } from "../../hooks/useSearch";
import { useLocation } from "react-router-dom";
import Bookshelf from "../../components/Bookshelf/Bookshelf";

const Explore = () => {
    const { books, search } = useSearch();
    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        search(urlParams.get("q"));
    }, [search, location.search]);

    return (
        <Section>
            <SectionTitle>Search</SectionTitle>
            <Bookshelf books={books} />
        </Section>
    );
};
export default Explore;
