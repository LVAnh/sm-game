import {Center, Wrap, WrapItem} from "@chakra-ui/react";
import Card from "./card";
import React from "react";

const Home = () => {
    return (<Wrap>
        <WrapItem>
            <Center>
                <Card data = {{
                    isNew: true,
                    imageURL:
                        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
                    name: 'Wayfarer Classic',
                    players: 1,
                }}/>
            </Center>
        </WrapItem>
        <WrapItem>
            <Center>
                <Card data = {{
                    isNew: true,
                    imageURL:
                        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
                    name: 'Wayfarer Classic',
                    players: 34,
                }}/>
            </Center>
        </WrapItem>
        <WrapItem>
            <Center>
                <Card data = {{
                    isNew: true,
                    imageURL:
                        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
                    name: 'Wayfarer Classic',
                    players: 17,
                }}/>
            </Center>
        </WrapItem>
        <WrapItem>
            <Card data = {{
                isNew: true,
                imageURL:
                'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
                name: 'Wayfarer Classic',
                players: 33,
            }}/>
        </WrapItem>
    </Wrap>)
}
export default Home;
