import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  id: string;
}

const Portal = ({ children, id }: Props) => {
  const el = document.createElement("div");
  const wrapper: React.RefObject<HTMLElement> = useRef(el);

  useEffect(() => {
    const current = wrapper.current as HTMLElement;
    current.setAttribute("id", id);
    document.body.appendChild(current);
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = "fixed";
    document.body.style.left = "0";
    document.body.style.right = "0";

    return () => {
      document.body.removeChild(current);
      document.body.style.scrollBehavior = "unset";
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      // @ts-expect-error [mildly irritated message]
      window.scrollTo({ top: parseInt(scrollY || "0") * -1, left: 0, behavior: "instant" });
      document.body.style.scrollBehavior = "smooth";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!wrapper.current) {
    return <>{null}</>;
  }
  return createPortal(children, wrapper.current);
};

export default Portal;
