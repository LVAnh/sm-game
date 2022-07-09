import {Button, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr} from "@chakra-ui/react";
import React, {useEffect} from "react";
import SmartContractService from "../services/smart-contract-services";
import {useSelector} from "react-redux";
import {RootState} from "../reduxs/store";

let isLoaded = false

const GaneSetting = () => {
    const {rollStatus,games} = useSelector((state: RootState) => state.game)
    const newGame = () => {
        SmartContractService.instance().startNewGame()
    }

    async function fetchAllGame() {
        await SmartContractService.instance().getAllGame()
        isLoaded = false
    }

    useEffect(() => {
        if (!isLoaded) {
            isLoaded = true;
            fetchAllGame();
        }
    }, [])

    const endGame = () => {
        SmartContractService.instance().roll()
    }
    const finishRoll = ()=>{
        SmartContractService.instance().finishRoll()
    }

    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Inning</Th>
                        <Th>Player</Th>
                        <Th isNumeric>action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {games.map((game) => {
                        return (<Tr key={game.inning}>
                            <Td>{game.inning}</Td>
                            <Td>{game.total_player}</Td>
                            {(game.winner !== '' || games.length !== game.inning) ? <Td isNumeric>{game.winner}</Td>
                                :(rollStatus===0?
                                <Td isNumeric>
                                    <Text fontSize='md' color='red' onClick={endGame}>End game</Text>
                                </Td>
                                    :(rollStatus===1?<Td isNumeric>
                                        <Text fontSize='md' color='orange' >Rolling...</Text>
                                    </Td>:
                                            <Td isNumeric>
                                                <Button colorScheme='teal' variant='solid' onClick={finishRoll}>
                                                    Finish
                                                </Button>
                                            </Td>
                                    ))}
                        </Tr>)
                    })}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th> </Th>
                        <Th> </Th>
                        <Th isNumeric><Button colorScheme='teal' variant='solid' onClick={newGame}>
                            New Game
                        </Button></Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
}
export default GaneSetting;

