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
const forward = true;
const Blog = (props) => {
  const { canGoForward, isEnglish } = props;
  return (
    <>
      <View style={{ height: hp(100), width: wp(100) }}>
        <ScrollView contentContainerStyle={{ backgroundColor: "white" }} nestedScrollEnabled={false}>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300}>
            <ShimmerPlaceholder
              style={{
                width: wp(100),
                height: hp(34.5),
                justifyContent: "center",
              }}
            />
          </Animatable.View>
          <View
            style={{
              height: hp(8.5),
              width: hp(100),
              backgroundColor: "white",
              flexDirection: "row",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              elevation: 2,
            }}>
            <ShimmerPlaceholder
              style={{
                width: wp(15),
                height: hp(2.3),
                justifyContent: "center",
                marginLeft: hp(2.5),
                marginTop: hp(2.5),
              }}
            />
            <ShimmerPlaceholder
              style={{
                width: wp(18),
                height: hp(2.3),
                justifyContent: "center",
                marginLeft: hp(2.5),
                marginTop: hp(2.5),
              }}
            />
            <ShimmerPlaceholder
              style={{
                width: wp(45),
                height: hp(2.3),
                justifyContent: "center",
                marginLeft: hp(2.5),
                marginTop: hp(2.5),
              }}
            />
          </View>
          {/* <ShimmerPlaceholder
              style={{
                width: wp(65),
                height: hp(1.6),
                justifyContent: "center",
                marginLeft: hp(5),
                marginTop: hp(2),
              }}
            /> */}
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300}>
            <ShimmerPlaceholder
              style={{
                width: wp(93),
                height: hp(26),
                justifyContent: "center",
                marginTop: hp(4),
                marginHorizontal: hp(1.5),

                //alignItems: 'center'
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300}>
            <ShimmerPlaceholder
              style={{
                width: wp(87),
                height: hp(3.8),
                marginTop: hp(2.8),
                marginLeft: hp(2),
                justifyContent: "center",
              }}
            />
          </Animatable.View>
          <View style={{ flexDirection: "row" }}>
            <ShimmerPlaceholder
              style={{
                width: wp(35),
                height: hp(2.4),
                justifyContent: "center",
                marginLeft: hp(2.5),
                marginTop: hp(1.5),
              }}
            />
            <ShimmerPlaceholder
              style={{
                width: wp(45),
                height: hp(2.2),
                justifyContent: "center",
                marginLeft: hp(3),
                marginTop: hp(1.5),
              }}
            />
          </View>
          <ShimmerPlaceholder
            style={{
              width: wp(88),
              height: hp(2),
              marginLeft: wp(3.5),
              justifyContent: "center",
              marginTop: hp(3.5),
            }}
          />
          <ShimmerPlaceholder
            style={{
              width: wp(90),
              height: hp(2),
              marginLeft: wp(3.5),
              justifyContent: "center",
              marginTop: hp(1.45),
            }}
          />
          <ShimmerPlaceholder
            style={{
              width: wp(91),
              height: hp(2),
              marginLeft: wp(3.5),
              justifyContent: "center",
              marginTop: hp(1.45),
            }}
          />
          <ShimmerPlaceholder
            style={{
              width: wp(89),
              height: hp(2),
              marginLeft: wp(3.5),
              justifyContent: "center",
              marginTop: hp(1.45),
            }}
          />
          <ShimmerPlaceholder
            style={{
              width: wp(88),
              height: hp(2),
              marginLeft: wp(3.5),
              justifyContent: "center",
              marginTop: hp(1.45),
            }}
          />
          <ShimmerPlaceholder
            style={{
              width: wp(91),
              height: hp(2),
              marginLeft: wp(3.5),
              justifyContent: "center",
              marginTop: hp(1.45),
            }}
          />
          <ShimmerPlaceholder
            style={{
              width: wp(89),
              height: hp(2),
              marginLeft: wp(3.5),
              justifyContent: "center",
              marginTop: hp(1.45),
            }}
          />
          <ShimmerPlaceholder
            style={{
              width: wp(91),
              height: hp(2),
              marginLeft: wp(3.5),
              justifyContent: "center",
              marginTop: hp(1.45),
            }}
          />
          <ShimmerPlaceholder
            style={{
              width: wp(88),
              height: hp(2),
              marginLeft: wp(3.5),
              justifyContent: "center",
              marginTop: hp(1.45),
            }}
          />
          <ShimmerPlaceholder
            style={{
              width: wp(85),
              height: hp(2),
              marginLeft: wp(3.5),
              justifyContent: "center",
              marginTop: hp(1.45),
            }}
          />
          <ShimmerPlaceholder
            style={{
              width: wp(90),
              height: hp(2),
              marginLeft: wp(3.5),
              justifyContent: "center",
              marginTop: hp(1.45),
            }}
          />
          <ShimmerPlaceholder
            style={{
              width: wp(89),
              height: hp(2),
              marginLeft: wp(3.5),
              justifyContent: "center",
              marginTop: hp(1.45),
            }}
          />
          <ShimmerPlaceholder
            style={{
              width: wp(91),
              height: hp(2),
              marginLeft: wp(3.5),
              justifyContent: "center",
              marginTop: hp(1.45),
            }}
          />
          <ShimmerPlaceholder
            style={{
              width: wp(89),
              height: hp(2),
              marginLeft: wp(3.5),
              justifyContent: "center",
              marginTop: hp(1.45),
            }}
          />
          <ShimmerPlaceholder
            style={{
              width: wp(25),
              height: hp(2),
              marginLeft: wp(3.5),
              justifyContent: "center",
              marginTop: hp(1.45),
            }}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default Blog;

const styles = StyleSheet.create({});
