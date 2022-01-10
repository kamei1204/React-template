import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { ChangeEvent, Children, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "./atom/button/PrimaryButton";

export const Login: VFC = memo(() => {
    const { login, loading} = useAuth();
    
    const [ userId, setUserId] = useState('');

    const onChangeUserId = (e:ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

    const onClickLogin = () => login(userId); 
    return (
        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderRadius="md" boxShadow="md">
            <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
                <Divider my={4}/>
                <Stack spacing={6} py={4} px={10} >
                <Input placeholder="ID入力" value={ userId } onChange={onChangeUserId}/>
                <PrimaryButton 
                loading={loading} 
                disabled={ userId === ''}
                onClick={onClickLogin}>ログイン</PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    )
});


