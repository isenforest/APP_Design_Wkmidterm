import React from 'react';
import { Text, HStack, Pressable, Switch } from '@gluestack-ui/themed';
import { useSelector, useDispatch } from "react-redux";
import { selectColorMode, toggleColorMode } from "./redux/counterSlice"



const ListItemalter = ({ title, navigation, destination }) => {
  const colorMode = useSelector(selectColorMode);
  const dispatch = useDispatch();

   return (
     <Pressable
       onPress={() => {
         destination ? navigation.navigate(destination) : null;
       }}
     >
       <HStack
         bg={colorMode == "light" ? "#C5F5E1" : "#4A4A4A"}
         px="4"
         py="2"
         justifyContent="space-between"
       >
         <Text fontSize={20} color={colorMode == "light" ? "black" : "white"} fontWeight='$medium'>{title}</Text>
         <Switch 
          name="light Mode"
          value={colorMode === "dark"}
          onToggle={() => dispatch(toggleColorMode())}
          accessibilityLabel="display-mode"
          accessibilityHint="light or dark mode"
          size='md'
        />
       </HStack>
     </Pressable>
   );
}

export default ListItemalter;