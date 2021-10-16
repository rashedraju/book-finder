import { Skeleton } from '@mui/material';
import React from 'react';
import AsyncImage from '../../hoc/AsyncImage';
import Button from '../Button/Button';
import {
    Author,
    Description,
    DetailsWrapper,
    ImageWraper,
    StyledBookPreview,
    Title
} from './BookPreview.styled';

const BookPreview = (props) => {
    const { book, onMyShelfAction } = props;

    return (
        <StyledBookPreview>
            {book ? (
                <>
                    <ImageWraper>
                        <AsyncImage src={book.image} alt={book.title} />
                    </ImageWraper>
                    <DetailsWrapper>
                        <Title>{book.title}</Title>
                        <Author>
                            <span>by</span> <small>{book.authors}</small>
                        </Author>
                        <Description>{book.description}</Description>
                        <Button onClick={onMyShelfAction} center>
                            {book.addedToMyShelf ? 'Remove from my shelf' : 'Add to my shelf'}
                        </Button>
                    </DetailsWrapper>
                </>
            ) : (
                <>
                    <ImageWraper>
                        <Skeleton
                            variant="rectangular"
                            animation="wave"
                            width="40%"
                            height={200}
                            style={{ margin: '0 auto' }}
                        />
                    </ImageWraper>
                    <DetailsWrapper>
                        <Skeleton
                            variant="text"
                            animation="wave"
                            width="100%"
                            height={20}
                            style={{ marginBottom: '0.5rem' }}
                        />
                        <Skeleton
                            variant="text"
                            animation="wave"
                            width="90%"
                            height={10}
                            style={{ marginBottom: '1rem' }}
                        />
                        {new Array(5).fill(0).map((_, i) => (
                            <Skeleton
                                // eslint-disable-next-line react/no-array-index-key
                                key={`skeleton-${i}`}
                                variant="text"
                                animation="wave"
                                width="100%"
                                height={10}
                            />
                        ))}
                    </DetailsWrapper>
                </>
            )}
        </StyledBookPreview>
    );
};

export default BookPreview;
