import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Platform } from "react-native";
import { Pressable, Select, SelectTrigger, SelectInput, SelectIcon, Icon, ChevronDownIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@gluestack-ui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screen/HomeScreen';
import AddScreen from '../screen/AddScreen';
import ListsExpenditrueScreen from '../screen/listsScreen';
import AnalysisExpenditrueScreen from '../screen/Analysis_expenditureScreen';
import AnalysisEarningScreen from '../screen/Analysis_earningsScreen';
import SettingScreen from '../screen/SettingScreen';
import ListEarningScreen from '../screen/List_earningScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}

const MyStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShadowVisible: false

            }}>
            <Stack.Screen
                name="HomeTabs"
                component={MyTabs}
                options={{
                    title: '',
                    headerRight: () => (
                        <Pressable onPress={() => navigation.navigate("Setting")}>
                            <MaterialCommunityIcons name="cog-outline" size={30} />
                        </Pressable>
                    ),
                    headerLeft: () => (
                        <Select initialLabel='2024/03' w={90}>
                            <SelectTrigger variant="underlined" size="sm">
                                <SelectInput />
                                <SelectIcon mr="$3">
                                    <Icon as={ChevronDownIcon} />
                                </SelectIcon>
                            </SelectTrigger>
                            <SelectPortal>
                                <SelectBackdrop />
                                <SelectContent>
                                    <SelectDragIndicatorWrapper>
                                        <SelectDragIndicator />
                                    </SelectDragIndicatorWrapper>
                                    <SelectItem label="2024/03" value="2403" />
                                    <SelectItem label="2024/02" value="2402" />
                                    <SelectItem label="2024/01" value="2401" />
                                    <SelectItem label="2023/12" value="2312" />
                                    <SelectItem label="2023/11" value="2311" />
                                </SelectContent>
                            </SelectPortal>
                        </Select>
                    ),
                }}
            />
            <Stack.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 32
                    }
                }}
            />
        </Stack.Navigator>
    );
}

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Add"
            screenOptions={{
                tabBarActiveTintColor: '#000',
                tabBarStyle: { height: 80, backgroundColor: '#D9D9D9', paddingBottom: Platform.OS === 'ios' ? 12 : 0 },
                tabBarIconStyle: { marginTop: Platform.OS === 'android' ? 12 : 8 },
                tabBarLabelStyle: {
                    fontSize: 16,
                    marginBottom: Platform.OS === 'android' ? 8 : 0,
                    paddingBottom: Platform.OS === 'android' ? 0 : 0
                },
            }}
        >
            <Tab.Screen
                name="Add"
                component={AddScreen}
                options={{
                    headerShown: false,
                    title: "add",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus-circle-outline" color={color} size={40} />
                    ),
                }}
            />
            <Tab.Screen
                name="HomeStack"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={40} />
                    ),
                }}
            />
            <Tab.Screen
                name="AnalysisStack"
                component={AnalysisTab}
                options={{
                    headerShown: false,
                    title: "analysis",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="align-vertical-bottom" color={color} size={40} />
                    ),
                }}
            />

            <Tab.Screen
                name="Lists"
                component={ListsTab}
                options={{
                    headerShown: false,
                    title: "lists",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="format-list-bulleted" color={color} size={40} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

const AnalysisTab = () => {
    return (
        <TopTab.Navigator
            initialRouteName='expenditure'
            id='Analysis'
            screenOptions={{
                tabBarStyle: { backgroundColor: '#9d9d9d', height: 56 },
                tabBarLabelStyle: { textTransform: 'none', fontSize: 16, fontWeight: '600' },
                tabBarIndicatorStyle: { backgroundColor: '#000' }
            }}

        >
            <TopTab.Screen name="earnings" component={AnalysisEarningScreen} />
            <TopTab.Screen name="expenditure" component={AnalysisExpenditrueScreen} />
        </TopTab.Navigator>
    );
}

const ListsTab = () => {
    return (
        <TopTab.Navigator
            id='Lists'
            screenOptions={{
                tabBarStyle: { backgroundColor: '#9d9d9d', height: 56 },
                tabBarLabelStyle: { textTransform: 'none', fontSize: 16, fontWeight: '600' },
                tabBarIndicatorStyle: { backgroundColor: '#000' }
            }}
        >
            <TopTab.Screen name="earnings" component={ListEarningScreen} />
            <TopTab.Screen name="expenditure" component={ListsExpenditrueScreen} />
        </TopTab.Navigator>
    );
}

export default Navigation;