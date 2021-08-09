import { createContext } from "react";

export const UserContext = createContext({
    email: '',
    setEmail: (email: string) => { }
});

