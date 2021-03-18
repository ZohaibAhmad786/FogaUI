import React from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FeedSkeleton from "./FeedSkeleton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <FeedSkeleton />
      <View
        style={{
          position: "absolute",
          zIndex: 1000,
          backgroundColor: "#fff",
          height: hp(9),
          width: wp(88),
          bottom: hp(2.5),
          alignSelf: "center",
          borderRadius: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center", width: "20%", height: "100%" }}
          onPress={() => {}}>
          <FontAwesome5 name="search" color='#444' size={wp(5)} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center", width: "20%", height: "100%" }}
          onPress={() => {}}>
          <FontAwesome name="heart" color='#444' size={wp(5)}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center", width: "20%", height: "100%" }}
          onPress={() => {}}>
          
          <MaterialCommunityIcons name="email" color='#444' size={wp(5)}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center", width: "20%", height: "100%" }}
          onPress={() => {}}>
         <FontAwesome name="bell" color='#444' size={wp(5)}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center", width: "20%", height: "100%" }}
          onPress={() => {}}>
          <FontAwesome name="user" color='#444' size={wp(5)}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
