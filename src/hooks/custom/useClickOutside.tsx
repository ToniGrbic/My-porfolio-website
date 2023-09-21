import { useEffect } from "react";

const useClickOutside = (ref, callback, ...args) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(...args);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useClickOutside;
