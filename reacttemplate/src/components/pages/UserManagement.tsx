
import { Center, Wrap, WrapItem } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { memo, useCallback, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserCard } from "../../oganism/user/userCard";
import { UserDetailModal } from "../../oganism/user/userDetailModal";

export const UserManagement: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { getUsers, users, loading } = useAllUsers();
    const { onSelectUser, selectedUser} = useSelectUser();
    const { loginUser } = useLoginUser();
    console.log(loginUser);

    useEffect(() => getUsers(),[]);

    const onClickUser = useCallback((id: number) => {
    console.log(id)
    onSelectUser({ id, users, onOpen});
    },[users]);
    return (
        <>
        {loading ? (
        <Center h="100vh">
            <Spinner top="100vh" />
            </Center>
            ) : (
            <Wrap p={{ base: 4, md: 10}} justify="center">
            {users.map((user) => (
            <WrapItem key={user.id}>
                <UserCard 
                id={user.id}
                onClick={onClickUser}
                imageUrl="https://source.unsplash.com/random" 
                name={user.username}
                fullName={user.name} />
            </WrapItem>
            ))}
        </Wrap>
        )}
        <UserDetailModal user={selectedUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose}/>
        </>
    );
});


