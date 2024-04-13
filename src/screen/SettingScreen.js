import React from 'react';
import { Box, Text, HStack } from '@gluestack-ui/themed';
import ListItem from "../components/ListItem";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingScreen = ({ navigation }) => {
    return (
        <Box flex={1} backgroundColor='#fff'>
            <Box marginHorizontal={20} gap={8}>
                <HStack alignItems='center' space='lg'>
                    <MaterialCommunityIcons name='wrench-outline' size={24} />
                    <Text
                        fontSize={28}
                        fontWeight='$medium'
                        color='#000'
                    >
                        Accounting</Text>
                </HStack>
                <ListItem title={'budget'} navigation={navigation} />
                <ListItem title={'accounting reminder'} navigation={navigation} />
            </Box>
            <Box marginHorizontal={20} gap={8}>
                <HStack alignItems='center' space='lg'>
                    <MaterialCommunityIcons name='cog-box' size={24} />
                    <Text
                        fontSize={28}
                        fontWeight='$medium'
                        color='#000'
                    >
                        Preferences</Text>
                </HStack>
                <ListItem title={'category'} navigation={navigation} />
                <ListItem title={'notification'} navigation={navigation} />
            </Box>
            <Box marginHorizontal={20} gap={8}>
                <HStack alignItems='center' space='lg'>
                    <MaterialCommunityIcons name='cog-box' size={24} />
                    <Text
                        fontSize={28}
                        fontWeight='$medium'
                        color='#000'
                    >
                        Support</Text>
                </HStack>
                <ListItem title={'about us'} navigation={navigation} />
                <HStack justifyContent='space-between'>
                    <Text fontSize={20} color='#7b7b7b' fontWeight='$medium'>version</Text>
                    <Text >1.0.0</Text>
                </HStack>
            </Box>
        </Box>
    );
}

export default SettingScreen;