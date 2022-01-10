import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { User } from "../types/API/users";

export type loginUserContextType = {
    loginUser: (User & {isAdmin: boolean}) | null;
    setLoginUser: Dispatch<SetStateAction<LoginUser | null>>
}

export const loginUserContext = createContext<loginUserContextType>({} as loginUserContextType);

type LoginUser = User & {isAdmin: boolean} ;

export const LoginUserProvider = (props: { children: ReactNode;}) => {
    const [ loginUser, setLoginUser] = useState<LoginUser | null>(null);
    const { children } = props;
    return(
        <loginUserContext.Provider value={{loginUser,setLoginUser}}>
            { children }
        </loginUserContext.Provider>
    )
}