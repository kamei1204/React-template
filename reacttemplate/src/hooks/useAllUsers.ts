import axios from "axios";
import { useCallback, useState } from "react"
import { User } from "../types/API/users";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
    const { showMessage } = useMessage();
    const [ loading, setLoading ] = useState(false);
    const [ users, setUsers ] = useState<Array<User>>([]);

    const getUsers = useCallback(() => {
        setLoading(true);
        axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .catch(() => {
            showMessage({ title: "データの取得に失敗しました。", status:"error"})
        }).finally(() => {
            setLoading(false);
        });
    },[]);
    return { getUsers, loading, users }
}