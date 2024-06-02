import { React, useState, useEffect } from "react";
import { Box, Heading, Center, Text, HStack, SafeAreaView, FlatList } from "@gluestack-ui/themed";
import { useSelector } from "react-redux";
import { selectGeneral, selectColorMode } from "../components/redux/counterSlice";
import LottieView from "lottie-react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Moneylist from "../components/moneylist";


const HomeScreen = ({ navigation }) => {
  const general = useSelector(selectGeneral);
  const colorMode = useSelector(selectColorMode);
  const [data, setData] = useState([]);
  const animesource = colorMode == 'light' ? require("../json/Animation - 1717228613495.json") : require("../json/darkAnimation.json")
  var surplus = 1875 + parseInt(general.money);

  useEffect(() => {
    data.push(general);
  }, [general])

  const countingsurplus = () => {
    for (var i = 0; i < data.length; i++) {
      surplus = surplus + parseInt(data[i].money)
    }
    return surplus
  }

  return (
    <><SafeAreaView backgroundColor={colorMode == "light" ? "#C5F5E1" : "#4A4A4A"} flex={1}>
      <Center >
        <Heading fontSize={24} mt={60} mb={20} color={colorMode == "light" ? "black" : "white"}>cash surplus</Heading>
        <Box w={206} h={206} m="$2" borderRadius="$full" marginBottom={50} backgroundColor={colorMode == "light" ? "white" : "black"}>
          <Center>
            <LottieView
              source={animesource}
              loop
              autoPlay
              style={{
                width: 300,
                height: 300,
                marginBottom: 140,
                marginRight: 20
              }}
            />
            <HStack position="absolute" top={85} left={45} >
              <MaterialCommunityIcons name="circle-slice-8" size={30} color="orange" />
              <Text fontSize={24} color={colorMode == "light" ? "black" : "white"} fontWeight="$medium" >${countingsurplus()}</Text>
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
    </SafeAreaView>
    </>
  );
}
export default HomeScreen;