import { createContext, useContext } from "react";
import { UserContext } from "./useContext";

const MyContext = createContext(null);

export function useHook() {
  return useContext(MyContext);
}

function UseState({ children }) {
  const userContext = UserContext();

  return (
    <MyContext.Provider
      value={{
        userContext,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default UseState;
