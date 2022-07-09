import {Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import SmartContractService from "../services/smart-contract-services";
import PlayerType from "../types/PlayerType";
import {useSelector} from "react-redux";
import {RootState} from "../reduxs/store";

let isLoaded = false
const Player = () => {
    // const [players, setPlayers]= useState()
    const {players} = useSelector((state:RootState)=>state.game)
    async function fetchAllPlayer() {
        await SmartContractService.instance().getAllPlayer()
        isLoaded = false
    }
    useEffect(()=>{
        if(!isLoaded){
            isLoaded = true;
            fetchAllPlayer();
        }
    },[])

    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Player ID</Th>
                        <Th>Reward</Th>
                        <Th isNumeric>Player address</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {players.map((player)=>{
                        return(<Tr key={player.buyerId}>
                            <Td>{player.buyerId}</Td>
                            <Td>Wayfarer Classic</Td>
                            <Td isNumeric>{player.buyerWallet}</Td>
                        </Tr>)
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    );
}
export default Player;
