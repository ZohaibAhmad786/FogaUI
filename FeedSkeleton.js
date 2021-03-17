import React from "react";
import { View, Text, ImageBackground } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";

const FeedSkeleton = () => {
  return (
    <View>
      <ShimmerPlaceholder
        shimmerColors={["#ebebeb", "#c5c5c5", "#ebebeb", "#c5c5c5"]}
        location={[0.3, 0.5, 0.7, 1]}
        style={{
          borderRadius: hp("3%"),
          marginVertical: hp("2%"),
          overflow: "hidden",
          alignSelf: "center",
          backgroundColor: "#000",
          width: wp("90%"),
          height: hp("32%"),
        }}
        autoRun
        visible={false}>
        <ImageBackground
          style={[
            {
              borderRadius: hp("3%"),
              marginVertical: hp("2%"),
              overflow: "hidden",
              alignSelf: "center",
              backgroundColor: "#000",
              width: wp("90%"),
              height: hp("32%"),
            },
          ]}></ImageBackground>
      </ShimmerPlaceholder>

      <View
        style={[
          {
            justifyContent: "space-between",
            marginTop: hp("-18%"),
            width: wp("80%"),
            alignSelf: "center",
          },
        ]}>
        <View
          style={{
            height: hp("4%"),
            justifyContent: "flex-start",
            flexDirection: "row",
            marginHorizontal: wp("2%"),
            alignItems: "flex-start",
          }}>
          <ShimmerPlaceholder
            shimmerColors={["#ebebeb", "#c5c5c5", "#ebebeb", "#c5c5c5"]}
            location={[0.3, 0.5, 0.7, 1]}
            style={{
              height: "100%",
              width: "30%",
              flexDirection: "row",
              paddingHorizontal: wp("2%"),
              alignItems: "center",
              justifyContent: "center",
            }}
            autoRun
            visible={false}>
            <Text>Text</Text>
          </ShimmerPlaceholder>
          <ShimmerPlaceholder
            shimmerColors={["#ebebeb", "#c5c5c5", "#ebebeb", "#c5c5c5"]}
            location={[0.3, 0.5, 0.7, 1]}
            style={{
              height: "100%",
              width: "30%",
              marginLeft: wp("2%"),
              flexDirection: "row",
              paddingHorizontal: wp("2%"),
              alignItems: "center",
              justifyContent: "center",
            }}
            autoRun
            visible={false}>
            <Text>Text</Text>
          </ShimmerPlaceholder>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: hp("1.5%"),
            elevation: 5,
            zIndex: 1000,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { x: 0, y: 0 },
            borderColor: "#ddd",
            marginTop: hp("2%"),
            padding: hp("1%"),
          }}>
          <View
            style={{
              alignItems: "flex-start",
              paddingHorizontal: hp("1%"),
              overflow: "hidden",
              paddingVertical: hp("1%"),
              flexDirection: "row",
              minHeight: hp("5%"),
            }}>
            <ShimmerPlaceholder
              shimmerColors={["#ebebeb", "#c5c5c5", "#ebebeb", "#c5c5c5"]}
              location={[0.3, 0.5, 0.7, 1]}
              style={{ width: "60%", height: hp("4%") }}
              autoRun
              visible={false}>
              <Text style={{ fontSize: hp("2.5%"), textAlign: "left" }}>name of promotion</Text>
            </ShimmerPlaceholder>
            <ShimmerPlaceholder
              shimmerColors={["#ebebeb", "#c5c5c5", "#ebebeb", "#c5c5c5"]}
              location={[0.3, 0.5, 0.7, 1]}
              style={{
                flexDirection: "row",
                height: hp("4%"),
                width: "40%",
                justifyContent: "space-between",
                alignItems: "center",
                overflow: "hidden",
              }}
              autoRun
              visible={false}></ShimmerPlaceholder>
          </View>
          <View style={{ flexDirection: "row", paddingHorizontal: hp("1%"), marginVertical: hp("1%") }}>
            <ShimmerPlaceholder
              shimmerColors={["#ebebeb", "#c5c5c5", "#ebebeb", "#c5c5c5"]}
              location={[0.3, 0.5, 0.7, 1]}
              style={{ height: hp("3%"), width: "100%" }}
              autoRun
              visible={false}></ShimmerPlaceholder>
          </View>
          <View style={{ flexDirection: "row", paddingHorizontal: hp("1%"), marginVertical: hp("1%") }}>
            <ShimmerPlaceholder
              shimmerColors={["#ebebeb", "#c5c5c5", "#ebebeb", "#c5c5c5"]}
              location={[0.3, 0.5, 0.7, 1]}
              style={{ height: hp("6%"), width: "100%" }}
              autoRun
              visible={false}></ShimmerPlaceholder>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: hp("1%"),
              justifyContent: "space-between",
              marginVertical: hp("1%"),
              alignItems: "flex-end",
            }}>
            <View style={{ flexDirection: "row", alignItems: "center", width: "60%" }}>
              <ShimmerPlaceholder
                shimmerColors={["#ebebeb", "#c5c5c5", "#ebebeb", "#c5c5c5"]}
                location={[0.3, 0.5, 0.7, 1]}
                style={{ width: "40%" }}
                autoRun
                visible={false}>
                {/* <Text style={[styles.fontFamilysemiBold, { fontSize: hp('1.8%'), }]}>{`${item?.Quantity}`} Left  </Text> */}
              </ShimmerPlaceholder>
              <ShimmerPlaceholder
                shimmerColors={["#ebebeb", "#c5c5c5", "#ebebeb", "#c5c5c5"]}
                location={[0.3, 0.5, 0.7, 1]}
                style={{ justifyContent: "center", width: "60%", marginLeft: 4, backgroundColor: "#F6F6F5" }}
                autoRun
                visible={false}>
                {/* <View style={{ backgroundColor: '#E16C38', width: `${((item.Quantity) * 100) / item.StartingQuantity}%`, borderRadius: hp('6.7%'), borderWidth: hp('0.3%'), borderColor: '#E16C38' }} /> */}
              </ShimmerPlaceholder>
            </View>
            <View style={{ flexDirection: "row", alignItems: "flex-end", width: "30%", justifyContent: "flex-end" }}>
              <ShimmerPlaceholder
                shimmerColors={["#ebebeb", "#c5c5c5", "#ebebeb", "#c5c5c5"]}
                location={[0.3, 0.5, 0.7, 1]}
                autoRun
                visible={false}
                style={{
                  alignItems: "center",
                  marginLeft: hp("1%"),
                  width: "40%",
                  paddingHorizontal: wp("2%"),
                  paddingVertical: hp("0.3%"),
                  justifyContent: "center",
                }}>
                <Text style={[, { fontSize: hp("2.5%"), fontFamily: "montserrat-bold", color: "#fff" }]}>sdsds</Text>
              </ShimmerPlaceholder>
              <ShimmerPlaceholder
                shimmerColors={["#ebebeb", "#c5c5c5", "#ebebeb", "#c5c5c5"]}
                location={[0.3, 0.5, 0.7, 1]}
                autoRun
                visible={false}
                style={{
                  alignItems: "center",
                  marginLeft: hp("1%"),
                  width: "40%",
                  paddingHorizontal: wp("2%"),
                  paddingVertical: hp("0.3%"),
                  justifyContent: "center",
                }}>
                <Text style={[, { fontSize: hp("2.5%"), fontFamily: "montserrat-bold", color: "#fff" }]}>sdsds</Text>
              </ShimmerPlaceholder>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedSkeleton;
