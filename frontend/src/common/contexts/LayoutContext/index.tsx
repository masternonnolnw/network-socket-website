import React, { createContext, useContext, useMemo, useState } from "react";

import { ILayoutContext } from "./types";

const LayoutContext = createContext<ILayoutContext>({} as ILayoutContext);

export const useLayout = () => useContext(LayoutContext);

export const LayoutProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [isHideFooter, setHideFooter] = useState<boolean>(false);
  const [isHideNavbar, setHideNavbar] = useState<boolean>(false);

  const value = useMemo(
    () => ({
      isHideNavbar,
      setHideNavbar,
      isHideFooter,
      setHideFooter
    }),
    [isHideNavbar, setHideNavbar, isHideFooter, setHideFooter]
  );

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};
