import React, { useEffect, useState } from "react";

const AsyncImage = (props) => {
    const { src, alt } = props;
    const [loadedSrc, setLoadedSrc] = useState();

    useEffect(() => {
        const loadSrc = () => {
            setLoadedSrc(src);
        };

        if (src) {
            const image = new Image();
            image.addEventListener("load", loadSrc);
            image.src = src;

            return () => {
                image.removeEventListener("load", loadSrc);
            };
        }
    }, [src]);

    if (loadedSrc === src) {
        return <img {...props} alt={alt} />;
    }

    return null;
};

export default AsyncImage;
