import { createContext, useContext, useState } from "react";

const loginContext = createContext();

export const LoginContextProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <loginContext.Provider value={{isLogin, setIsLogin}}>
            {props.children}
        </loginContext.Provider>
    )
} 

export const useLogin = () => {
    return useContext(loginContext)
} 

