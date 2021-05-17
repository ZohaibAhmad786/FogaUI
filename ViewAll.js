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

const ViewAll = (props) => {
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
                width: wp(90),
                height: hp(6),
                borderRadius: hp(1.5),
                marginLeft: wp(5),
                justifyContent: "center",
                marginBottom: hp(6.5),
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
                width: wp(43),
                height: hp(4),
                marginLeft: wp(5),
                justifyContent: "center",
                marginBottom: hp(1),
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
                width: wp(61),
                height: hp(3.8),
                marginLeft: wp(5),
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
                //   <View style = {{width: wp(90),height:hp(39.3), backgroundColor: 'white', marginVertical: hp(1.9),
                //   alignSelf: 'center', borderRadius: hp(2),flexDirection: 'row',
                //   shadowColor: "#000", shadowOffset: { width: 0,height: 1,},
                //   shadowOpacity: 0.2,shadowRadius: 1.41,elevation: 3, alignItems: 'center' }}>
                //       <ShimmerPlaceholder style = {{width: wp(90),height:hp(30), backgroundColor: 'grey',
                //       borderRadius: hp(1.6)}} />
                //    </View>
                <Animatable.View
                  useNativeDriver
                  animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
                  duration={700}
                  style={[
                    {
                      width: wp(90),
                      height: hp(41),
                      borderRadius: hp(2),
                      marginLeft: hp(2.3),
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

export default ViewAll;

const styles = StyleSheet.create({
  tripsList: {
    paddingLeft: "5%",
    width: "100%",
    height: hp(48),
    marginTop: hp(1.5),
  },
});
