import React, { createContext, useContext, useReducer} from "react";
import { Box, HStack, Divider, Text } from '@gluestack-ui/themed';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const moneylist = () => {
    return(
        <Box w={278} pb={10} borderWidth={2} borderColor="$black" borderRadius="$2xl">
            <HStack p={10}>
                <Text marginRight={65} color="$black">2024/03/32 Monday</Text>
                <Text color="$red">$-500</Text>
            </HStack>
            <Divider bg="$black"/>
            <HStack p={10}>
                <MaterialCommunityIcons name="shopping-outline" size={30}/>
                <Text alignSelf="center" ml={3} color="$black" fontWeight="$medium" mr={111}>Shopping</Text>
                <Text alignSelf="center" color="$black">$-500</Text>
            </HStack>
        </Box>
    );
}

export default moneylist;