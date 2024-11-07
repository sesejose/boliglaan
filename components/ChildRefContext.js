import { createContext, useContext, useRef, useEffect } from "react";

const ChildRefContext = createContext(null);

export function useChildRef() {
  return useContext(ChildRefContext);
}

// It is used on Mobile Steps
