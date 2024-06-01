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
  Image
} from "@gluestack-ui/themed";
import { React, useState, useEffect } from "react";
import moment from "moment";

import { useSelector, useDispatch } from "react-redux";
import { selectGeneral, setgeneral, setmaxer, setminer } from "../components/redux/counterSlice";




import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AddScreen = ({ navigation }) => {

  const general = useSelector(selectGeneral);

  const currentTime = moment().format("YY/MM/DD");

  const [date, setDate] = useState(currentTime);
  const [timeIsError, setTimeIsError] = useState(false);
  const [type, setType] = useState("");
  const [typeIsError, setTypeIsError] = useState(false);
  const [money, setMoney] = useState("");
  const [moneyIsError, setMoneyIsError] = useState(false);

  const dispatch = useDispatch();

  console.log(currentTime)


  const dateRegex = /\d{2}\/\d{1,2}\/\d{1,2}/

  return (
    <Box flex={1} backgroundColor="#C5F5E1">
      <VStack mt={40}>
        <Box mb={20}>
          <FormControl marginHorizontal={40} isInvalid={timeIsError === true ? true : false}>
            <FormControlLabel>
              <FormControlLabelText fontSize={20}>
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
          <FormControl marginHorizontal={40}>
            <FormControlLabel>
              <FormControlLabelText fontSize={20}>
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
                onChangeText={text => {
                  setType(text);
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
          <FormControl marginHorizontal={40}>
            <FormControlLabel>
              <FormControlLabelText fontSize={20}>
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
                <InputIcon as={() => <MaterialCommunityIcons name={"currency-usd"} size={18} />} />
              </InputSlot>
              <InputField
                placeholder="0"
                value={money}
                onChangeText={text => {
                  setMoney(text);
                }} />
            </Input>
            <FormControlError>
              <FormControlErrorText>
                You must enter a proper number.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </Box>
        <ButtonGroup justifyContent="flex-end">
          <Button
            mr={30}
            mt={20}
            justifyContent='center'
            w="auto"
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            backgroundColor="#d9d9d9"
            onPress={() => {
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
            }}
          >
            <ButtonText color="#000">save</ButtonText>
          </Button>
        </ButtonGroup>
      </VStack>
      <Center>
        <Image
          width={300}
          height={300}
          borderRadius="$none"
          source={require("../img/note-removebg-preview.png")}
          alt="nothing"
        />
      </Center>
    </Box>
  );
}



export default AddScreen;