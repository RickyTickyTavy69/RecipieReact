import React from "react";
import {createPortal} from "react-dom";

type PortalProps = {
    children: React.ReactNode;
    element? : HTMLElement;
}

const Portal = ({element = document.body, children} : PortalProps) => {

    return createPortal(children, element);
}

export default Portal;