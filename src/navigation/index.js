import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Platform, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectColorMode, toggleColorMode } from "../components/redux/counterSlice"
import { Pressable, HStack, Text, Box, Divider, Select, SelectTrigger, SelectInput, SelectIcon, Icon, ChevronDownIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, VStack } from '@gluestack-ui/themed';
import SelectDropdown from 'react-native-select-dropdown';

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
    const colorMode = useSelector(selectColorMode);
    const selectlist = [
        '2024/03',
        '2024/04',
        '2024/05',
        '2024/06',
    ];
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
                            <MaterialCommunityIcons name="cog-outline" size={30} color={colorMode == "light" ? "black" : "white"} />
                        </Pressable>
                    ),
                    headerLeft: () => (
                        <SelectDropdown
                            data={selectlist}
                            onSelect={(selectItem, index) => {
                                console.log(selectItem, index);
                            }}
                            renderButton={(selectedItem, isOpen) => {
                                return (
                                    <Box style={styles.dropdownButtonStyle}>
                                        <Text style={styles.dropdownButtonTxtStyle} color={colorMode == "light" ? '#151E26' : "white"} >{selectedItem || selectlist[selectlist.length-1]}</Text>
                                        <Icon as={ChevronDownIcon} color={colorMode == "light" ? "black" : "white"} />
                                    </Box>
                                );
                            }}
                            renderItem={(item, index, isSelected) => {
                                return (
                                    <Box
                                        style={{
                                            ...styles.dropdownItemStyle,
                                            backgroundColor: colorMode === 'light' ? '#E9ECEF' : "#4A4A4A",
                                            ...(isSelected && { backgroundColor: '#D2D9DF'}),
                                        }}>
                                        <Text style={styles.dropdownItemTxtStyle} color={colorMode == 'light' ? '#151E26' : 'white'}>{item}</Text>
                                    </Box>
                                );
                            }}
                            dropdownStyle={styles.dropdownMenuStyle}
                        />

                    ),
                    headerStyle: {
                        backgroundColor: colorMode === "light" ? "white" : "black",
                    }
                }}
            />
            <Stack.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 32,
                        color: colorMode === 'light' ? "black" : 'white'
                    },
                    headerStyle: {
                        backgroundColor: colorMode === "light" ? "white" : "black",
                    },
                    headerTintColor: colorMode === "light" ? "black" : "white"
                }}
            />
        </Stack.Navigator>
    );
}

const MyTabs = () => {
    const colorMode = useSelector(selectColorMode);
    const setColorMode = colorMode == "light" ? "black" : "white";
    return (
        <Tab.Navigator
            initialRouteName="Add"
            screenOptions={{
                tabBarActiveTintColor: colorMode === "light" ? "black" : "white",
                tabBarStyle: { height: 80, backgroundColor: colorMode === "light" ? '#D9D9D9' : "black", paddingBottom: Platform.OS === 'ios' ? 12 : 0 },
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
    const colorMode = useSelector(selectColorMode);
    return (
        <TopTab.Navigator
            initialRouteName='expenditure'
            id='Analysis'
            screenOptions={{
                tabBarStyle: { backgroundColor: '#9d9d9d', height: 56 },
                tabBarLabelStyle: { textTransform: 'none', fontSize: 16, fontWeight: '600', color: colorMode === 'light' ? 'black' : 'white'},
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 116,
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 90,
        backgroundColor: '#E9ECEF',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 16,
    },
    headerTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#151E26',
    },
    dropdownButtonStyle: {
        width: 130,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
        height: 150,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#B1BDC8',
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    ////////////// dropdown1
    dropdown1ButtonStyle: {
        width: '80%',
        height: 50,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        backgroundColor: '#444444',
    },
    dropdown1ButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    dropdown1ButtonArrowStyle: {
        fontSize: 28,
        color: '#FFFFFF',
    },
    dropdown1ButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
        color: '#FFFFFF',
    },
    dropdown1MenuStyle: {
        backgroundColor: '#444444',
        borderRadius: 8,
    },
    dropdown1ItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#B1BDC8',
    },
    dropdown1ItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    dropdown1ItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
        color: '#FFFFFF',
    },
    ////////////// dropdown2
    dropdown2ButtonStyle: {
        width: '80%',
        height: 50,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#B1BDC8',
    },
    dropdown2ButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdown2ButtonArrowStyle: {
        fontSize: 28,
    },
    dropdown2ButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    dropdown2MenuStyle: {
        backgroundColor: '#FFF',
        borderRadius: 8,
    },
    dropdown2ItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#B1BDC8',
    },
    dropdown2ItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdown2ItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
});

export default Navigation;