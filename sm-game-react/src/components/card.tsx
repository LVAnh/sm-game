import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
} from '@chakra-ui/react';
import ProductCard from "../types/productCard";
import SmartContractService from "../services/smart-contract-services";


interface CardProps {
    data: ProductCard;
}

function Card({data}:CardProps) {
    const joinGame = ()=>{
        SmartContractService.instance().registerGame("101",data.name)
    }
    return (
        <Flex p={50} w="full" alignItems="center" justifyContent="center">
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                onClick={joinGame}
                position="relative">
                {data.isNew && (
                    <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="red.200"
                    />
                )}

                <Image
                    src={data.imageURL}
                    alt={`Picture of ${data.name}`}
                    roundedTop="lg"
                />

                <Box p="6">
                    <Box display='flex' alignItems="baseline">
                        {data.isNew && (
                            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                                New
                            </Badge>
                        )}
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight">
                            {data.name}
                        </Box>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                        <Box display="flex" alignItems="center">
                            <Box as="span" color="gray.600" fontSize="sm">
                                {data.players} player{data.players > 1 && 's'}
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
}

export default Card;
