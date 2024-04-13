import { FormControlError } from "@gluestack-ui/themed";
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
  Text
} from "@gluestack-ui/themed";
import { React, useState, useContext } from "react";
import { StoreContext } from "../components/stores";


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AddScreen = ({ navigation }) => {

  const {addState} = useContext(StoreContext);


  const [changetime, setchangeTime] = useState("");
  const [timeIsError, setTimeIsError] = useState(false);
  const [changetype, setchangeType] = useState("");
  const [typeIsError, setTypeIsError] = useState(false);
  const [changemoney, setchangeMoney] = useState("");
  const [moneyIsError, setMoneyIsError] = useState(false);

  const [list, setList] = useState(addState);

  const dateRegex = /\d{2}\/\d{1,2}\/\d{1,2}/

  return (
    <Box flex={1} backgroundColor="#fff">
      <VStack mt={40}>
      <Box mb={30}>
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
                placeholder="yy/mm/dd" 
                value={changetime} 
                onChangeText={text => {
                  setchangeTime(text);
                  if(dateRegex.test(text)) setTimeIsError(false);
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
        <Box mb={30}>
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
                value={changetype} 
                onChangeText={text => {
                  setchangeType(text);
                }}/>
            </Input>
            <FormControlError>
              <FormControlErrorText>
                You must enter a proper noun.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </Box>
        <Box mb={30}>
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
                value={changemoney} 
                onChangeText={text => {
                  setchangeMoney(text);
                }}/>
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
              setList({time: changetime, type: changetype, money: changemoney});
              navigation.navigate('HomeTabs');
            }}
          >
            <ButtonText color="#000">save</ButtonText>
          </Button>
        </ButtonGroup>
      </VStack>
    </Box>
  );
}



export default AddScreen;