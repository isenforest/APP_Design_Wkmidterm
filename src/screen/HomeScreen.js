import { React, useState, useEffect } from "react";
import { Box, Heading, Center, Text, HStack, SafeAreaView, FlatList, Fab, FabIcon, AddIcon, FabLabel } from "@gluestack-ui/themed";
import { useSelector } from "react-redux";
import { selectGeneral } from "../components/redux/counterSlice";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Moneylist from "../components/moneylist";
import Addlist from "../components/addlist";
import { current } from "@reduxjs/toolkit";

const HomeScreen = ({ navigation }) => {
  const general = useSelector(selectGeneral);
  const [data, setData] = useState([]);
  var surplus = 1875 + parseInt(general.money);

  useEffect(() => {
    data.push(general);
  }, [general])

  const countingsurplus = () => {
    for(var i = 0; i < data.length; i++){
      surplus = surplus + parseInt(data[i].money)
    }
    return surplus
  }

  return (
    <><SafeAreaView backgroundColor={"#fff"} flex={1}>
      <Center >
        <Heading fontSize={24} mt={60} mb={20}>cash surplus</Heading>
        <Box w={206} h={206} m="$2" borderRadius="$full" borderWidth={3} borderColor="$black" marginBottom={50}>
          <Center w={200} h={200} mt={0} paddingRight={20}>
            <HStack >
              <MaterialCommunityIcons name="circle-slice-8" size={30} color="orange" />
              <Text fontSize={24} color="$black" fontWeight="$medium">${countingsurplus()}</Text>
            </HStack>
          </Center>
        </Box>
        <Box h={250}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Moneylist props={item} />
          )}
          />
        </Box>
      </Center>
      <Fab
        size="lg"
        placement="bottom right"
        isHovered={true}
        isDisabled={false}
        isPressed={false}
        backgroundColor="#9d9d9d"
        onPress={() => navigation.navigate('Add')}
      >
        <MaterialCommunityIcons name="plus" size={24} />
      </Fab>
    </SafeAreaView>
    </>
  );
}
export default HomeScreen;