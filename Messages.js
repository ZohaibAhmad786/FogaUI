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

const Messages = (props) => {
  const { canGoForward, isEnglish } = props;
  return (
    <View style={{ height: hp(100), width: wp(100), backgroundColor: "#cecece" }}>
      <ScrollView contentContainerStyle={{ backgroundColor: "white", paddingHorizontal: wp(2), paddingBottom: hp(2) }} nestedScrollEnabled={false}>
        <Animatable.View
          useNativeDriver={true}
          animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
          duration={1000}
          style={{ marginTop: hp(6), paddingLeft: wp(2) }}>
          <Text style={{ fontSize: hp(6), color: "#00AEEF", fontWeight: "600" }}>All Notifications</Text>
        </Animatable.View>
        <Animatable.View
          useNativeDriver={true}
          animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
          duration={1000}
          style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", marginTop: hp(0), borderRadius: wp(1) }}>
          <View style={{ width: wp(18) }}>
            <ShimmerPlaceholder style={{ height: hp(8), width: "100%", marginBottom: wp(1), backgroundColor: "#F4F4F4" }} />
            <ShimmerPlaceholder style={{ height: hp(8), width: "100%", marginBottom: wp(1), backgroundColor: "#F4F4F4" }} />
            <ShimmerPlaceholder style={{ height: hp(8), width: "100%", marginBottom: wp(1), backgroundColor: "#F4F4F4" }} />
          </View>
          <View style={{ width: wp(72), backgroundColor: "#F4F4F4", paddingBottom: hp(0), borderRadius: wp(1) }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, idx) => (
              <View key={idx}>
                <View style={{ height: hp(16), width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
                  <View style={{ width: "30%", alignItems: "center", paddingTop: wp(5) }}>
                    <ShimmerPlaceholder
                      style={{
                        width: wp(10),
                        height: wp(10),
                        borderRadius: wp(5),
                      }}
                    />
                  </View>
                  <View style={{ width: "70%", paddingTop: wp(5) }}>
                    <ShimmerPlaceholder
                      style={{
                        width: "90%",
                        height: hp(4),
                        marginBottom: wp(1),
                      }}
                    />
                    <ShimmerPlaceholder
                      style={{
                        width: "90%",
                        height: hp(4),
                        marginBottom: wp(2),
                      }}
                    />
                    <ShimmerPlaceholder
                      style={{
                        width: "90%",
                        height: hp(2),
                        marginBottom: wp(0),
                      }}
                    />
                  </View>
                </View>
                <View style={{ height: hp(0.1), width: "100%", backgroundColor: "#F0F0F0" }} />
              </View>
            ))}
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({});
