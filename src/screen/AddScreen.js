import { Center, FormControlError } from "@gluestack-ui/themed";
import {
  VStack,
  Box,
  Input,
  InputField,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlErrorText,
  InputSlot,
  InputIcon,
  Button,
  ButtonText,
  ButtonGroup,
  Image,
  ScrollView
} from "@gluestack-ui/themed";
import { React, useState } from "react";
import { Dimensions } from "react-native";
import moment from "moment";

import { useSelector, useDispatch } from "react-redux";
import { selectGeneral, setgeneral, selectColorMode } from "../components/redux/counterSlice";




import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AddScreen = ({ navigation }) => {

  const general = useSelector(selectGeneral);
  const colorMode = useSelector(selectColorMode);

  const currentTime = moment().format("YY/MM/DD");

  const [date, setDate] = useState(currentTime);
  const [timeIsError, setTimeIsError] = useState(false);
  const [type, setType] = useState("");
  const [typeIsError, setTypeIsError] = useState(false);
  const [money, setMoney] = useState("");
  const [moneyIsError, setMoneyIsError] = useState(false);

  const dispatch = useDispatch();

  console.log(currentTime)


  const dateRegex = /\d{2}\/\d{1,2}\/\d{1,2}/;
  const typeRegex = /^[A-Za-z]*$/;
  const moneyRegex = /^[0-9-]*$/;

  return (
    <Box flex={1} backgroundColor={colorMode == "light" ? "#C5F5E1" : "#4A4A4A"}>
      <ScrollView>
        <VStack mt={30} flex={1}>
          <Box mb={20}>
            <FormControl marginHorizontal={40} isInvalid={timeIsError === true ? true : false}>
              <FormControlLabel>
                <FormControlLabelText fontSize={20} color={colorMode == "light" ? "black" : "white"}>
                  Date
                </FormControlLabelText>
              </FormControlLabel>
              <Input
                variant="underlined"
                size="md"
              >
                <InputField
                  placeholder={"YY/MM/DD"}
                  value={date}
                  color={colorMode == "light" ? "black" : "white"}
                  onChangeText={text => {
                    setDate(text);
                    if (dateRegex.test(text)) setTimeIsError(false);
                    else setTimeIsError(true);
                  }}
                />
              </Input>
              <FormControlError>
                <FormControlErrorText>
                  You must enter a valid Date.
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          </Box>
          <Box mb={20}>
            <FormControl marginHorizontal={40} isInvalid={typeIsError === true ? true : false}>
              <FormControlLabel>
                <FormControlLabelText fontSize={20} color={colorMode == "light" ? "black" : "white"}>
                  Type
                </FormControlLabelText>
              </FormControlLabel>
              <Input
                variant="underlined"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField
                  placeholder="breakfast"
                  value={type}
                  color={colorMode == "light" ? "black" : "white"}
                  onChangeText={text => {
                    setType(text);
                    if (typeRegex.test(text)) setTypeIsError(false);
                    else setTypeIsError(true);
                  }} />
              </Input>
              <FormControlError>
                <FormControlErrorText>
                  You must enter a proper noun.
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          </Box>
          <Box mb={20}>
            <FormControl marginHorizontal={40} isInvalid={moneyIsError === true ? true : false}>
              <FormControlLabel>
                <FormControlLabelText fontSize={20} color={colorMode == "light" ? "black" : "white"}>
                  Amount
                </FormControlLabelText>
              </FormControlLabel>
              <Input
                variant="underlined"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputSlot pl="$3">
                  <InputIcon as={() => <MaterialCommunityIcons name={"currency-usd"} size={18} color={colorMode == "light" ? "black" : "white"} />} />
                </InputSlot>
                <InputField
                  placeholder="0"
                  value={money}
                  color={colorMode == "light" ? "black" : "white"}
                  onChangeText={text => {
                    setMoney(text);
                    if (moneyRegex.test(text)) setMoneyIsError(false);
                    else setMoneyIsError(true);
                  }}
                />
              </Input>
              <FormControlError>
                <FormControlErrorText>
                  You must enter a proper number.
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          </Box>
          <ButtonGroup justifyContent="flex-end" >
            <Button
              position="absolute"
              right={40}
              bottom={-80}
              justifyContent='center'
              w="auto"
              size="md"
              variant="solid"
              action="primary"
              isDisabled={timeIsError || typeIsError || moneyIsError ? true : false}
              isFocusVisible={false}
              backgroundColor="#d9d9d9"
              onPress={() => {
                if (type == "" || money == "") {
                  setMoneyIsError(true);
                  setTypeIsError(true);
                } else {
                  dispatch(setgeneral(
                    {
                      date: date,
                      type: type,
                      money: money
                    }));
                  setDate(currentTime);
                  setType("");
                  setMoney("");
                  navigation.navigate('HomeStack');
                }
              }}
            >
              <ButtonText color="#000">save</ButtonText>
            </Button>
          </ButtonGroup>
        </VStack>
        <Center flex={1}>
          <Image
            width={200}
            height={200}
            mt={100}
            source={require("../img/note-removebg-preview.png")}
            alt="nothing"
          />
        </Center>
      </ScrollView>
    </Box>
  );
}



export default AddScreen;