import React, { createContext, useContext, useReducer } from "react";
import { Box, HStack, Divider, Text } from '@gluestack-ui/themed';
import { useSelector } from "react-redux";
import { selectGeneral } from "./redux/counterSlice";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const moneylist = ({ props }) => {

    const general = useSelector(selectGeneral);

    return (
        <Box w={278} pb={10} borderWidth={2} borderColor="$black" borderRadius="$2xl" mb={20}>
            <HStack p={10} justifyContent="space-between">
                <Text color="$black">20{props.date}</Text>
                <Text color="$red" >${props.money}</Text>
            </HStack>
            <Divider bg="$black" />
            <HStack p={10} justifyContent="space-between">
                <HStack>
                    <MaterialCommunityIcons name="shopping-outline" size={30} />
                    <Text alignSelf="center" ml={3} color="$black" fontWeight="$medium">{props.type}</Text>
                </HStack>
                <Text alignSelf="center" color="$black">${props.money}</Text>
            </HStack>
        </Box>
    );
}

export default moneylist;