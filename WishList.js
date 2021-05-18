import React from "react";
import { View, Text, Dimensions, ScrollView, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import * as Animatable from "react-native-animatable";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;
const dummyData = [1, 2, 3, 4, 5, 6, 7];
const WishList = (props) => {
  const { canGoForward, isEnglish } = props;
  return (
    <>
      <View style={{ height: hp(100), width: wp(100) }}>
      <ScrollView contentContainerStyle={{ backgroundColor: "white", paddingVertical: hp(4) }} nestedScrollEnabled={false}>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(92),
                height: hp(5.5),
                borderRadius: hp(0.5),
                marginLeft: wp(3.5),
                justifyContent: "center",
                marginBottom: hp(1.5),
              }}
            />
          </Animatable.View>

          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(35),
                height: hp(3.2),
                marginLeft: wp(3.5),
                justifyContent: "center",
                marginBottom: hp(4),
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(50),
                height: hp(3.7),
                marginLeft: wp(3.5),
                justifyContent: "center",
                // marginBottom: hp(3)
              }}
            />
          </Animatable.View>

          {/* vertical trips list */}
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300}
            style={{ marginTop: hp(-1) }}>
            <FlatList
              data={dummyData}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item, index }) => (
            
                <Animatable.View
                  useNativeDriver
                  animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
                  duration={700}
                  style={[
                    {
                      width: wp(92),
                      height: hp(50),
                      borderRadius: hp(0.5),
                      marginHorizontal: hp(2),
                      marginTop: hp(3),
                      overflow: "hidden",
                      backgroundColor: "white",
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.2,
                      shadowRadius: 1.41,
                      elevation: 3,
                      marginBottom: wp(2.5),
                    },
                  ]}>
                  <View
                    style={{
                      height: "76%",
                      width: "100%",
                    }}>
                    <ShimmerPlaceholder
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </View>
                  <View
                    style={{
                      height: "24%",
                      width: "100%",
                      justifyContent: "center",
                    }}>
                    <ShimmerPlaceholder style={{ width: wp(70), height: hp(2), left: wp(2.5), fontSize: wp(5),marginTop: hp(-4.5) }} />
                  </View>
                </Animatable.View>
              )}
            />
          </Animatable.View>
        </ScrollView>
      </View>
    </>
  );
};

export default WishList;

const styles = StyleSheet.create({});
