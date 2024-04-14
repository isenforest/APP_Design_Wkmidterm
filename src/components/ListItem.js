import React from 'react';
import { Text, HStack, Pressable } from '@gluestack-ui/themed';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ListItem = ({ title, navigation, destination }) => {
   return (
     <Pressable
       onPress={() => {
         destination ? navigation.navigate(destination) : null;
       }}
     >
       <HStack
         bg="white"
         px="4"
         py="2"
         justifyContent="space-between"
       >
         <Text fontSize={20} color='#7b7b7b' fontWeight='$medium'>{title}</Text>
         <AntDesign name="right" color="gray" size={24} />
       </HStack>
     </Pressable>
   );
}

export default ListItem;