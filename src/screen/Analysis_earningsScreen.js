import React, { useEffect, useState } from 'react';
import { Box, Text, HStack, FlatList } from '@gluestack-ui/themed';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectGeneral, selectColorMode } from '../components/redux/counterSlice';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Analysis_earningScreen = () => {

    const general = useSelector(selectGeneral);
    const colorMode = useSelector(selectColorMode);

    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
        return `#${randomColor}`;
    };

    const [obj, setObj] = useState([
        {
            name: 'Salary',
            populartion: 2000,
            color: '#fd8',
            icon: "alpha-c-circle-outline"
        },
        {
            name: 'Pocket money',
            populartion: 500,
            color: '#Fbf',
            icon: "account"
        }
    ])

    const [data, setData] = useState([
        { name: obj[0].name, population: obj[0].populartion, color: obj[0].color, legendFontSize: 16 },
        { name: obj[1].name, population: obj[1].populartion, color: obj[1].color, legendFontSize: 16 },
    ])

    useEffect(() => {
        if (parseInt(general.money) > 0) {
            const x = { ...general }
            data.push({ name: general.type, population: parseInt(general.money), color: generateColor(), legendFontSize: 16 })
            obj.push({ name: x.type, populartion: x.money, color: generateColor(), icon: "account" })
        }
    },[general]);

    const windowWidth = Dimensions.get('window').width;

    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 0.1) => `rgba(26, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
        
    }

    const most = parseInt(general.money) > 2000 ? general.money : 2000;

    return (
        <Box flex={1} backgroundColor={colorMode == "light" ? "#C5F5E1" : "#4A4A4A"}>
            <PieChart
                data={data}
                width={windowWidth - 15}
                height={200}
                chartConfig={chartConfig}
                accessor={'population'}
                backgroundColor={'transparent'}
                style={styles.piechart}
            />
            <Box marginHorizontal={30} mt={20} maxHeight={200}>
                <FlatList
                    data={obj}
                    renderItem={({ item }) => (
                        <HStack justifyContent='space-between' mb={20}>
                            <HStack>
                                <MaterialCommunityIcons name={item.icon} size={30} color={colorMode == "light" ? "black" : "white"}/>
                                <Text ml={10} fontWeight='$medium' alignSelf='center' color={colorMode == "light" ? "black" : "white"}>{item.name}</Text>
                            </HStack>
                            <Text fontWeight='$medium' alignSelf='center' color={colorMode == "light" ? "black" : "white"}>${item.populartion}</Text>
                        </HStack>
                    )}
                />
            </Box>
            <Box marginHorizontal={30} mt={60}>
                <Text color={colorMode == "light" ? "black" : "white"} fontWeight='$medium' mb={20}>earn most:</Text>
                <HStack justifyContent='space-between' >
                    <HStack>
                        <MaterialCommunityIcons name={parseInt(general.money) > 2000 ? "account" : obj[0].icon} size={30} color={colorMode == "light" ? "black" : "white"}/>
                        <Text ml={10} fontWeight='$medium' alignSelf='center' color={colorMode == "light" ? "black" : "white"}>{parseInt(general.money) > 2000 ? general.type : obj[0].name}</Text>
                    </HStack>
                    <Text fontWeight='$medium' alignSelf='center' color={colorMode == "light" ? "black" : "white"}>${parseInt(general.money) > 2000 ? general.money : 2000}</Text>
                </HStack>
            </Box>
        </Box>
    );
}

const styles = StyleSheet.create({
    piechart: {
        paddingTop: 20,
        marginBottom: 30
        
    }
})


export default Analysis_earningScreen;