import React from 'react'
import { Box, HStack, Text } from '@gluestack-ui/themed'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListEarningScreen = () => {

    const obj = {
        shopping: {
            name: 'Salary',
            populartion: 2000,
            color: '#fd8',
            icon: "alpha-c-circle-outline"
        },
        T: {
            name: 'Pocket money',
            populartion: 500,
            color: '#Fbf',
            icon: "account"
        }
    }

    return (
        <Box flex={1} backgroundColor='#fff' >
            <Box marginHorizontal={30} mt={20}>
                <HStack justifyContent='space-between' >
                    <HStack>
                        <MaterialCommunityIcons name={obj.shopping.icon} size={30} />
                        <Text ml={10} fontWeight='$medium' alignSelf='center' color='#000'>{obj.shopping.name}</Text>
                    </HStack>
                    <Text fontWeight='$medium' alignSelf='center' color='#000'>+{obj.shopping.populartion}</Text>
                </HStack>
                <HStack justifyContent='space-between' marginTop={20}>
                    <HStack>
                        <MaterialCommunityIcons name={obj.T.icon} size={30} />
                        <Text ml={10} fontWeight='$medium' alignSelf='center' color='#000'>{obj.T.name}</Text>
                    </HStack>
                    <Text fontWeight='$medium' alignSelf='center' color='#000'>+{obj.T.populartion}</Text>
                </HStack>
            </Box>
        </Box >
    );
}

export default ListEarningScreen;