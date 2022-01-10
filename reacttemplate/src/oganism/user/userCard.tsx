import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { memo, VFC } from "react";

type Props = {
    id : number;
    imageUrl: string; 
    name: string;
    fullName: string;
    onClick:(id:number) => void;
}

export const UserCard: VFC<Props> = memo((props) => {
    const { imageUrl, name, fullName, onClick, id } = props;
        return (
            <Box
            w="260px" h="260px" 
            backgroundColor="white" 
            borderRadius="10px" 
            shadow="md"
            _hover={{ cursor: "pointer", opacity: "0.8"}}
            p={4}
            onClick={() => onClick(id)}
            >
            <Stack textAlign="center">
                <Image 
                    m="auto"
                    src={imageUrl} 
                    alt="string"
                    boxSize="160px"  
                    borderRadius="full" 
                />
                <Text fontSize="lg" fontWeight="bold">{name}</Text>
                <Text fontSize="sm" color="gray">{fullName}</Text>
            </Stack>
            </Box>
)
});