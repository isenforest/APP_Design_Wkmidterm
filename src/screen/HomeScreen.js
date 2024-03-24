import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Pressable, ScrollView, FlatList, Linking } from 'react-native';
import React from "react";
import Card from "../components/popular"
import BookData from "../json/books.json"
import Newdetail from "../components/Newest"
import { Box } from "@gluestack-ui/themed"

const BookScreen = ({ navigation }) => {
    return (
        <><SafeAreaView backgroundColor={"#fff"} style={{flex: 1}}>
          <StatusBar
            backgroundColor={'white'}
            barStyle={'dark-content'} />
          <ScrollView>
            <Text style={styles.title}>Popular Books</Text>
            <Box style={styles.flatstyle}>
              <FlatList
                data={BookData.Popular}
                renderItem={({ item }) => <Card book={item} />}
                keyExtractor={item => item.bookname}
                horizontal={true}
                />
            </Box>
            <Text style={styles.title}>Newest</Text>
            <Box style={styles.flatstyle}>
              <FlatList
                data={BookData.Newest}
                renderItem={({ item }) => <Newdetail props={item} navigation={navigation}/>}
                keyExtractor={item => item.bookname}
                horizontal={true}
                />
            </Box>
          </ScrollView>
        </SafeAreaView>
</>
      );
}

const styles = StyleSheet.create({
    headerStyle: {
      backgroundColor: "#fff",
      height: 56,
      padding: 8,
      justifyContent: 'space-between',
      flexDirection: 'row',
      
    },
    pressableStyle: {
      width: 40,
      height: 40,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginTop: 20,
      marginHorizontal: 20,
      fontSize: 24,
      fontWeight: '500',
    },
    flatstyle: {
      marginHorizontal: 10,
      marginTop: 20
    },
    pagepart: {
      //backgroundColor: 'red',
      height: 56,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      marginTop: '18%',
      // Android Only
      elevation: 1,
    },
    pagebutton: {
      alignItems: 'center',
    },
    activate: {
      color: '#6200EE'
    },
    noact: {
      color: '#666666'
    }
  });

  export default BookScreen;