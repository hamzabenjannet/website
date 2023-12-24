import { useEffect, useState } from "react";

function useDidScrolledDownHook() {
  const [didScrolledDown, setDidScrolledDown] = useState(false);

  useEffect(() => {
    const handleScrollingDown = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setDidScrolledDown(true);
        return;
      }

      setDidScrolledDown(false);
    };

    window.addEventListener("scroll", handleScrollingDown);

    return () => window.removeEventListener("scroll", handleScrollingDown);
  }, []);

  return didScrolledDown;
}

export default useDidScrolledDownHook;
