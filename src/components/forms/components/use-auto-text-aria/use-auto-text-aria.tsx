import { RefObject, useEffect } from "react";

// Updates the height of a <textarea> when the value changes.
export const useAutosizeTextArea = (textAreaRef: RefObject<HTMLTextAreaElement>, value: string) => {
  useEffect(() => {
    setTimeout(() => {
      if (textAreaRef.current) {
        textAreaRef.current.style.height = "auto";
        const scrollHeight = textAreaRef.current.scrollHeight;

        textAreaRef.current.style.height = scrollHeight + "px";
      }
    }, 100);
  }, [textAreaRef]);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      const scrollHeight = textAreaRef.current.scrollHeight;

      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};
