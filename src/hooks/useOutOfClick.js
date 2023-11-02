import { useEffect } from "react";

export function useOutOfClick(targetRef, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!targetRef.current || targetRef.current.contains(event.target)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [targetRef, handler]);
}
