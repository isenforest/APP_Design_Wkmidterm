import React from 'react';
import { Text, HStack, Pressable } from '@gluestack-ui/themed';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { selectColorMode } from '../components/redux/counterSlice';

const ListItem = ({ title, navigation, destination }) => {
  const colorMode = useSelector(selectColorMode);

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
         <AntDesign name="right" color={colorMode == "light" ? "gray" : "white"} size={24} />
       </HStack>
     </Pressable>
   );
}

export default ListItem;