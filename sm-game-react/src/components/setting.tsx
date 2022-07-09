import {Button, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr} from "@chakra-ui/react";
import React from "react";

const GaneSetting = () => {
    const newGame = () => {
        console.log("New Game")
    }
    const endGame = () => {
        console.log("End Game")
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
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>
                            <Text fontSize='md' color='red' onClick={endGame}>End game</Text>
                        </Td>
                    </Tr>
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

