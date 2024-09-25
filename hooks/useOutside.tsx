import { useEffect, useRef } from "react";

export default function useOutside<T>(onClose: () => void) {
  const ref = useRef<(HTMLElement & T) | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClose]);

  return ref;
}
