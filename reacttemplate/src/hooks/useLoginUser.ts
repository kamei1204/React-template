import { useContext } from "react"
import { loginUserContext, loginUserContextType } from "../provider/loginUserProvider";

export const useLoginUser = ():loginUserContextType => useContext(loginUserContext);