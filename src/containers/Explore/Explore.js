import { useEffect } from 'react';
import { Section, SectionTitle } from '../../assets/styles/Component.styled';
import Bookshelf from '../../components/Bookshelf/Bookshelf';
import { useSearch } from '../../hooks/useSearch';

const Explore = () => {
    const { books, search } = useSearch();

    useEffect(() => {
        const queryData = [
            'universe',
            'programming',
            'science',
            'machine learning',
            'data science',
            'artificial intelligence',
            'software'
        ];

        const query = queryData.join('\\');
        search(query);
    }, [search]);

    return (
        <Section>
            <SectionTitle>Explore</SectionTitle>
            <Bookshelf books={books} />
        </Section>
    );
};
export default Explore;
