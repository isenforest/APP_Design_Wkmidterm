import { React, useState, useContext } from "react";
import { StoreContext } from "../components/stores";
import { Box, Heading, Center, Text, HStack, SafeAreaView, FlatList, Button, ButtonText } from "@gluestack-ui/themed"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Moneylist from "../components/moneylist";
import Addlist from "../components/addlist";

const HomeScreen = ({ navigation }) => {


  const { addState } = useContext(StoreContext);


  return (
    <><SafeAreaView backgroundColor={"#fff"} flex={1} >
      <Center >
        <Heading fontSize={24} mt={60} mb={20}>cash surplus</Heading>
        <Box w={206} h={206} m="$2" borderRadius="$full" borderWidth={3} borderColor="$black" marginBottom={50}>
          <Center w={200} h={200} mt={0} paddingRight={20}>
            <HStack >
              <MaterialCommunityIcons name="circle-slice-8" size={30} color="orange" />
              <Text fontSize={24} color="$black" fontWeight="$medium">$-500</Text>
            </HStack>
          </Center>
        </Box>
        <Moneylist />
        <Addlist navigation={navigation} />
      </Center>
    </SafeAreaView>
    </>
  );
}

export default HomeScreen;