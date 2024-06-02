import React, { useEffect, useState} from 'react';
import { Box, HStack, Text, FlatList } from '@gluestack-ui/themed'
import { useSelector } from 'react-redux';
import { selectGeneral, selectColorMode } from '../components/redux/counterSlice';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListScreen = () => {
    const general = useSelector(selectGeneral);
    const colorMode = useSelector(selectColorMode);

    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');
        return `#${randomColor}`;
      };

    useEffect(() => {
        if(parseInt(general.money) < 0){
            const x ={...general}
            obj.push({name: x.type, populartion: x.money, color: generateColor(), icon: "account" })
        }
    },[general]);

    const [obj, setObj] = useState([
        {
            name: 'Shopping',
            populartion: -500,
            color: '#FF71D7',
            icon: "shopping-outline"
        },
        {
            name: 'Transportation',
            populartion: -125,
            color: '#FFDE68',
            icon: "bus"
        }
    ]);
    
    return (
        <Box flex={1} backgroundColor={colorMode == "light" ? "#C5F5E1" : "#4A4A4A"} >
            <Box marginHorizontal={30} mt={30}>
            <FlatList
                    data={obj}
                    renderItem={({ item }) => (
                        <HStack justifyContent='space-between' marginBottom={30}>
                            <HStack>
                                <MaterialCommunityIcons name={item.icon} size={30} color={colorMode == "light" ? "black" : "white"}/>
                                <Text ml={10} fontWeight='$medium' alignSelf='center' color={colorMode == "light" ? "black" : "white"}>{item.name}</Text>
                            </HStack>
                            <Text fontWeight='$medium' alignSelf='center' color={colorMode == "light" ? "black" : "white"}>{item.populartion}</Text>
                        </HStack>
                    )}
                />
            </Box>
        </Box >
    );
}

export default ListScreen;