import React from 'react';
import { Text, HStack, Pressable, Switch } from '@gluestack-ui/themed';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ListItemalter = ({ title, navigation, destination }) => {
   return (
     <Pressable
       onPress={() => {
         destination ? navigation.navigate(destination) : null;
       }}
     >
       <HStack
         bg="#C5F5E1"
         px="4"
         py="2"
         justifyContent="space-between"
       >
         <Text fontSize={20} color='#7b7b7b' fontWeight='$medium'>{title}</Text>
         <Switch size='lg' isDisabled={false}/>
       </HStack>
     </Pressable>
   );
}

export default ListItemalter;