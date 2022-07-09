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
                        'https://5.imimg.com/data5/SELLER/Default/2020/10/PX/KF/AW/20193325/ink-pen-500x500.jpg',
                    name: 'Blue ink pen',
                    players: 34,
                }}/>
            </Center>
        </WrapItem>
        <WrapItem>
            <Center>
                <Card data = {{
                    isNew: true,
                    imageURL:
                        'https://product.hstatic.net/200000315505/product/zn1_83649cb3b99543a79832590bcd252bb5_large.jpg',
                    name: 'Wallet',
                    players: 17,
                }}/>
            </Center>
        </WrapItem>
        <WrapItem>
            <Card data = {{
                isNew: true,
                imageURL:
                'https://images.depxinh.net/products/item.12_2017/16/detail/3ce-velvet-new-nude-1-dep-xinh.jpg',
                name: '3CE Velvet Lip Tint New Nude',
                players: 33,
            }}/>
        </WrapItem>
    </Wrap>)
}
export default Home;
