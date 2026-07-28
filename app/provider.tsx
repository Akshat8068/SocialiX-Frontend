"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux"

interface ReduxProviderProps {
  children: React.ReactNode;
}

const Providers=({
  children,
}: ReduxProviderProps)=> {
  return <Provider store={store}>{children}</Provider>
}

export default Providers