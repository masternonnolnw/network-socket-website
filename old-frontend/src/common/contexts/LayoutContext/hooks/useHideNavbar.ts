import { useLayout } from "common/contexts/LayoutContext";
import { useEffect } from "react";

const useHideNavbar = () => {
  const { setHideNavbar } = useLayout();

  useEffect(() => {
    setHideNavbar(true);
    return () => {
      setHideNavbar(false);
    };
  }, [setHideNavbar]);
};

export default useHideNavbar;
