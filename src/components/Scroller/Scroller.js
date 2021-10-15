import { useRef } from "react";
import { ScrollerStyled } from "./Scroller.styled";
import {
    MdOutlineArrowBackIos,
    MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useScroll } from "../../hooks/useScroll";

const Scroller = ({ containerRef, scrollOffset, left = false }) => {
    const scrollerRef = useRef();
    const [scroll] = useScroll(containerRef, scrollerRef);

    return (
        <ScrollerStyled
            ref={scrollerRef}
            left={left ? 1 : 0}
            onClick={() => scroll(scrollOffset)}
        >
            {left ? <MdOutlineArrowBackIos /> : <MdOutlineArrowForwardIos />}
        </ScrollerStyled>
    );
};

export default Scroller;
