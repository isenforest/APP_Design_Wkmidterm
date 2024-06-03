import React from 'react';
import { Box, Text, HStack } from '@gluestack-ui/themed';
import ListItem from "../components/ListItem";
import ListItemalter from '../components/ListItemalter';
import { useSelector } from 'react-redux';
import { selectColorMode } from '../components/redux/counterSlice';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingScreen = ({ navigation }) => {
    const colorMode = useSelector(selectColorMode);
    return (
        <Box flex={1} backgroundColor={colorMode == "light" ? "#C5F5E1" : "#4A4A4A"}>
            <Box marginHorizontal={20} gap={8}>
                <HStack alignItems='center' space='lg'>
                    <MaterialCommunityIcons name='wrench-outline' size={24} color={colorMode == "light" ? "black" : "white"}/>
                    <Text
                        fontSize={28}
                        fontWeight='$medium'
                        color={colorMode == "light" ? "black" : "white"}
                    >
                        Accounting</Text>
                </HStack>
                <ListItem title={'budget'} navigation={navigation} />
                <ListItem title={'accounting reminder'} navigation={navigation} />
            </Box>
            <Box marginHorizontal={20} gap={8}>
                <HStack alignItems='center' space='lg'>
                    <MaterialCommunityIcons name='cog-box' size={24} color={colorMode == "light" ? "black" : "white"}/>
                    <Text
                        fontSize={28}
                        fontWeight='$medium'
                        color={colorMode == "light" ? "black" : "white"}
                    >
                        Preferences</Text>
                </HStack>
                <ListItem title={'category'} navigation={navigation} />
                <ListItem title={'notification'} navigation={navigation} />
                <ListItemalter title={'dark mode'} navigation={navigation} />
            </Box>
            <Box marginHorizontal={20} gap={8}>
                <HStack alignItems='center' space='lg'>
                    <MaterialCommunityIcons name='message-question-outline' size={24} color={colorMode == "light" ? "black" : "white"}/>
                    <Text
                        fontSize={28}
                        fontWeight='$medium'
                        color={colorMode == "light" ? "black" : "white"}
                    >
                        Support</Text>
                </HStack>
                <ListItem title={'about us'} navigation={navigation} />
                <HStack justifyContent='space-between'>
                    <Text fontSize={20} color={colorMode == "light" ? "black" : "white"} fontWeight='$medium'>version</Text>
                    <Text color={colorMode == "light" ? "black" : "white"}>2.0.0</Text>
                </HStack>
            </Box>
        </Box>
    );
}

export default SettingScreen;