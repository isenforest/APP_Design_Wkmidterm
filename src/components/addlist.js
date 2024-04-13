import React from "react";
import { Pressable } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const addlist = ({ navigation }) => {
    const inset = useSafeAreaInsets();
    return (
        <Pressable position="absolute" right={32} bottom={Platform.OS === "android" ? -180 : (-180 + inset.bottom) } onPress={() => navigation.navigate("Detail")}>
            <MaterialCommunityIcons name="plus-box-outline" size={60} />
        </Pressable>
    );
}

export default addlist;