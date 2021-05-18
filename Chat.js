import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import * as Animatable from "react-native-animatable";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign,FontAwesome } from "@expo/vector-icons";

const Chat = (props) => {
  const { canGoForward, isEnglish } = props;
  return (
    <View style={{ height: hp(100), width: wp(100), backgroundColor: "#F5F7F9" }}>
      <Animatable.View
        useNativeDriver={true}
        animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
        duration={1000}
        style={{ height: hp(25), backgroundColor: "#FAFAFF", paddingHorizontal: wp(5), paddingTop: wp(4) }}>
        <View
          style={{
            height: hp(5.3),marginTop:hp(2),
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            alignItems: "center",
            flexDirection: "row",
            elevation: 5,
            width: "100%",
            paddingHorizontal: wp(5),
          }}>
          <Ionicons name='arrow-back' size={wp(6.5)} color='#2180F3' />
          <View style={{ height: wp(8), width: wp(8), borderRadius: wp(4), marginHorizontal: wp(3), backgroundColor: "#cecece" }} />
          <Text style={{ color: "#606679" ,fontWeight: 'bold'}}>Messenger</Text>
          <View style={{ position: "absolute", left: wp(71) }}>
            <FontAwesome name='home' size={wp(5)} color='#2180F3' />
          </View>
          <View style={{ position: "absolute", right: wp(6) }}>
            <AntDesign name='infocirlce' size={wp(5)} color='#2180F3' />
          </View>
         
        </View>

        <ShimmerPlaceholder
          style={{
            height: hp(2.8),
            width: "85%",
            alignSelf: "center",
            borderRadius: wp(5),
            marginTop: hp(4),
          }}
        />
        <ShimmerPlaceholder
          style={{
            height: hp(10),
            width: wp(95),
            alignSelf: "center",
            borderRadius: wp(2),
            marginTop: hp(5.7),
          }}
        />
        <ShimmerPlaceholder
          style={{
            height: hp(10),
            width: wp(95),
            alignSelf: "center",
            borderRadius: wp(2),
            marginTop: hp(1),
          }}
        />
        <ShimmerPlaceholder
          style={{
            height: hp(10),
            width: wp(95),
            alignSelf: "center",
            borderRadius: wp(2),
            marginTop: hp(1),
          }}
        />
        <ShimmerPlaceholder
          style={{
            height: hp(10),
            width: wp(95),
            alignSelf: "center",
            borderRadius: wp(2),
            marginTop: hp(1),
          }}
        />
        <ShimmerPlaceholder
          style={{
            height: hp(10),
            width: wp(95),
            alignSelf: "center",
            borderRadius: wp(2),
            marginTop: hp(1),
          }}
        />
        <ShimmerPlaceholder
          style={{
            height: hp(10),
            width: wp(95),
            alignSelf: "center",
            borderRadius: wp(2),
            marginTop: hp(1),
          }}
        />
        <ShimmerPlaceholder
          style={{
            height: hp(10),
            width: wp(95),
            alignSelf: "center",
            borderRadius: wp(2),
            marginTop: hp(1),
          }}
        />
        <ShimmerPlaceholder
          style={{
            height: hp(10),
            width: wp(95),
            alignSelf: "center",
            borderRadius: wp(2),
            marginTop: hp(1),
          }}
        />
      </Animatable.View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
