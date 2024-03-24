import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
const img0 = require("../image/Fashionopolis_image.png");
const img1 = require("../image/img_book_chanel.png");
const img2 = require("../image/img_book_calligraphy.png");
const img3 = require("../image/img_book_ysl.png");
const img4 = require("../image/img_book_tbos.png");
const img5 = require("../image/img_book_stitchedup.png");

const imgs = [img0, img1, img2, img3, img4, img5];

const BookDetail = props => {
    let { book } = props;
    return (
        <View style={styles.cardstyle}>
            <Pressable>
                <Image style={styles.imgstyle} source={imgs[book.image]} />
            </Pressable>
            <Text style={styles.titlestyle}>{book.bookname}</Text>
            <Text style={styles.writerstyle}>{book.writer}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardstyle: {
        width: 140,
        height: 256,
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    imgstyle: {
        width: 140,
        height: 200
    },
    titlestyle: {
        marginTop: 7,
        fontSize: 16,
        lineHeight: 18,
        fontWeight: '500'
    },
    writerstyle: {
        fontSize: 12,
        opacity: 0.5,
        lineHeight: 14
    }
})

export default BookDetail;