import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

const AsyncImage = (props) => {
    const { src, alt } = props;
    const [loadedSrc, setLoadedSrc] = useState();

    useEffect(() => {
        const loadSrc = () => {
            setLoadedSrc(src);
        };

        if (src) {
            const image = new Image();
            image.addEventListener('load', loadSrc);
            image.src = src;

            return () => {
                image.removeEventListener('load', loadSrc);
            };
        }

        return () => {};
    }, [src]);

    if (loadedSrc === src) {
        return <img src={src} alt={alt} />;
    }

    return null;
};

AsyncImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
};

export default AsyncImage;
