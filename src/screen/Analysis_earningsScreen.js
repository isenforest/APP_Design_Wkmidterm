import React from 'react';
import { Box, Text, Center, VStack, HStack } from '@gluestack-ui/themed';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions, StyleSheet } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Analysis_earningScreen = () => {
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

    const windowWidth = Dimensions.get('window').width;

    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
    }

    return (
        <Box flex={1} backgroundColor='#fff'>
            <PieChart
                data={[
                    { name: obj.shopping.name, population: obj.shopping.populartion, color: obj.shopping.color, legendFontSize: 16 },
                    { name: obj.T.name, population: obj.T.populartion, color: obj.T.color, legendFontSize: 16 },
                ]}
                width={windowWidth - 15}
                height={200}
                chartConfig={chartConfig}
                accessor={'population'}
                backgroundColor={'transparent'}
                style={styles.piechart}
            />
            <Box marginHorizontal={30} mt={20}>
                <HStack justifyContent='space-between' >
                    <HStack>
                        <MaterialCommunityIcons name={obj.shopping.icon} size={30} />
                        <Text ml={10} fontWeight='$medium' alignSelf='center' color='#000'>{obj.shopping.name}</Text>
                    </HStack>
                    <Text fontWeight='$medium' alignSelf='center' color='#000'>${obj.shopping.populartion}</Text>
                </HStack> 
                <HStack justifyContent='space-between' marginTop={20}>
                    <HStack>
                        <MaterialCommunityIcons name={obj.T.icon} size={30} />
                        <Text ml={10} fontWeight='$medium' alignSelf='center' color='#000'>{obj.T.name}</Text>
                    </HStack>
                    <Text fontWeight='$medium' alignSelf='center' color='#000'>${obj.T.populartion}</Text>
                </HStack>
            </Box>
            <Box marginHorizontal={30} mt={60}>
                <Text color='#000' fontWeight='$medium' mb={20}>earn most:</Text>
                <HStack justifyContent='space-between' >
                    <HStack>
                        <MaterialCommunityIcons name={obj.shopping.icon} size={30} />
                        <Text ml={10} fontWeight='$medium' alignSelf='center' color='#000'>{obj.shopping.name}</Text>
                    </HStack>
                    <Text fontWeight='$medium' alignSelf='center' color='#000'>${obj.shopping.populartion}</Text>
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