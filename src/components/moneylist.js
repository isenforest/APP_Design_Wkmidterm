import React, { createContext, useContext, useReducer } from "react";
import { Box, HStack, Divider, Text } from '@gluestack-ui/themed';
import { useSelector } from "react-redux";
import { selectGeneral, selectColorMode } from "./redux/counterSlice";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const moneylist = ({ props }) => {

    const general = useSelector(selectGeneral);
    const colorMode = useSelector(selectColorMode);

    return (
        <Box w={278} pb={10} borderWidth={2} borderColor={colorMode == "light" ? "black" : "white"} borderRadius="$2xl" mb={20} backgroundColor={colorMode == "light" ? "white" : "black"}>
            <HStack p={10} justifyContent="space-between">
                <Text color={colorMode == "light" ? "black" : "white"}>20{props.date}</Text>
                <Text color="$red" >${props.money}</Text>
            </HStack>
            <Divider bg={colorMode == "light" ? "black" : "white"} />
            <HStack p={10} justifyContent="space-between">
                <HStack>
                    <MaterialCommunityIcons name="shopping-outline" size={30} color={colorMode == "light" ? "black" : "white"}/>
                    <Text alignSelf="center" ml={3} color={colorMode == "light" ? "black" : "white"} fontWeight="$medium">{props.type}</Text>
                </HStack>
                <Text alignSelf="center" color={colorMode == "light" ? "black" : "white"}>${props.money}</Text>
            </HStack>
        </Box>
    );
}

export default moneylist;