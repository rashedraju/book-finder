export const useScroll = (containerRef, scrollerRef) => {
    const scroll = (scrollOffset) => {
        let scrollAmount = 0;
        let scrollLeft = 0;
        let scrollWidth = 0;

        const container = containerRef.current ?? null;

        const slideTimer = setInterval(() => {
            if (container) {
                container.scrollLeft += scrollOffset;
                scrollLeft = container.scrollLeft;
                scrollWidth = container.scrollWidth;
            }

            scrollAmount++;

            if (scrollAmount >= 4) {
                window.clearInterval(slideTimer);
                container.parentNode.firstChild.style.display = "block";
                container.parentNode.lastChild.style.display = "block";

                if (
                    scrollLeft === 0 ||
                    scrollLeft + container.clientWidth >= scrollWidth
                ) {
                    scrollerRef.current.style.display = "none";
                } else {
                    scrollerRef.current.style.display = "block";
                }
            }
        }, 25);
    };

    return [scroll];
};
