import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import SmartContractService from "../services/smart-contract-services";
import {useNavigate} from "react-router-dom";

export default function ConnectWallet() {
    const navigate = useNavigate();

    const connectWallet = async () => {
        const connected = await SmartContractService.instance().connectWallet()
        if(connected){
            console.log("connected")
            navigate("/game")
        }else {
            console.log("fail")
        }
    }
    return (
        <Center py={6} pt={120}>
            <Box
                maxW={'270px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    h={'120px'}
                    w={'full'}
                    src={
                        'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXRoZXJldW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
                    }
                    objectFit={'cover'}
                />
                <Flex justify={'center'} mt={-12}>
                    <Avatar
                        size={'xl'}
                        css={{
                            border: '2px solid white',
                        }}
                    />
                </Flex>

                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            Connect wallet
                        </Heading>
                        <Text color={'gray.500'}>Connect your wallet to play minigame</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>10+</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Rewards
                            </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>100+</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Players
                            </Text>
                        </Stack>
                    </Stack>

                    <Button
                        w={'full'}
                        mt={8}
                        bg={useColorModeValue('#151f21', 'gray.900')}
                        color={'white'}
                        rounded={'md'}
                        onClick={connectWallet}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}
                        >
                        Connect
                    </Button>
                </Box>
            </Box>
        </Center>
    );
}
