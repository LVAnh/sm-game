import React, {ReactNode, useState} from 'react';
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem, TableCaption,
    MenuList, Center, WrapItem, Wrap, TableContainer, Table, Thead, Tbody, Tr, Th, Td, Tfoot, Image
} from '@chakra-ui/react';
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from 'react-icons/fi';
import {IconType} from 'react-icons';
import {ReactText} from 'react';
import Card from "../components/card";
import Footer from "../components/Footer";
import {Token} from "@chakra-ui/styled-system/dist/declarations/src/utils";
import * as CSS from "csstype";

interface LinkItemProps {
    name: string;
    icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
    {name: 'Home', icon: FiHome},
    {name: 'Player', icon: FiTrendingUp},
    {name: 'Setting Game', icon: FiSettings},
];

export default function Game() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [selected, setSelected] = useState('Home');

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                onSelect={(name) => {
                    setSelected(name)
                }}
                display={{base: 'none', md: 'block'}}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose}
                                    onSelect={(name) => {
                                        setSelected(name)
                                    }}
                    />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen}/>
            <Box ml={{base: 0, md: 60}} minH={window.innerHeight} p="4">
                <Box flex='1'>
                    {selected === 'Home' && <Home/>}
                    {selected === 'Player' && <Player/>}
                    {selected === 'Setting Game' && <Home/>}
                </Box>
                <Footer/>
            </Box>
        </Box>
    );
}
const Player = () => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
}


const Home = () => {
    return (<Wrap>
        <WrapItem>
            <Center>
                <Card/>
            </Center>
        </WrapItem>
        <WrapItem>
            <Center>
                <Card/>
            </Center>
        </WrapItem>
        <WrapItem>
            <Center>
                <Card/>
            </Center>
        </WrapItem>
        <WrapItem>
            <Card/>
        </WrapItem>
    </Wrap>)
}

interface SidebarProps {
    onClose: () => void;
    onSelect: (name: string) => void;
    display?: Token<CSS.Property.Display>;
}

const SidebarContent = ({onClose, onSelect, display}: SidebarProps) => {
    const [selected, setSelected] = useState('Home');

    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{base: 'full', md: 60}}
            pos="fixed"
            h="full"
            display = {display}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Image
                    w='200'
                    h='40px'
                    src='https://seeklogo.com/images/A/add-suspension-logo-004A7B07AE-seeklogo.com.png'>
                </Image>
                <CloseButton display={{base: 'flex', md: 'none'}} onClick={onClose}/>
            </Flex>
            {LinkItems.map((link) => (
                <div key={link.name} onClick={() => {
                    setSelected(link.name)
                    onSelect(link.name)
                    console.log(selected)
                }}>
                    <NavItem key={link.name} icon={link.icon} isSelected={selected === link.name}>
                        {link.name}
                    </NavItem>
                </div>
            ))}
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
    isSelected: boolean;
}

const NavItem = ({icon, children, isSelected}: NavItemProps) => {
    return (
        <Link style={{textDecoration: 'none'}} _focus={{boxShadow: 'none'}}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.200',
                    color: 'white',
                }}
                bg={isSelected ? 'cyan.400' : 'white'}
                color={isSelected ? 'white' : 'black'}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}

const MobileNav = ({onOpen, ...rest}: MobileProps) => {
    return (
        <Flex
            ml={{base: 0, md: 60}}
            px={{base: 4, md: 4}}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{base: 'space-between', md: 'flex-end'}}
            {...rest}>
            <IconButton
                display={{base: 'flex', md: 'none'}}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu/>}
            />

            <Image
                display={{base: 'flex', md: 'none'}}
                boxSize='150px'
                objectFit='cover'
                src='https://seeklogo.com/images/A/add-suspension-logo-004A7B07AE-seeklogo.com.png'>
            </Image>

            <HStack spacing={{base: '0', md: '6'}}>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{boxShadow: 'none'}}>
                            <HStack>
                                <Avatar
                                    size={'sm'}
                                />
                                <VStack
                                    display={{base: 'none', md: 'flex'}}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2">
                                    <Text fontSize="sm">Display Name</Text>
                                    <Text fontSize="xs" color="gray.600">
                                        0xn34js0xn34js0xn34js0xn34js...b1
                                    </Text>
                                </VStack>
                                <Box display={{base: 'none', md: 'flex'}}>
                                    <FiChevronDown/>
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <MenuDivider/>
                            <MenuItem>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};
