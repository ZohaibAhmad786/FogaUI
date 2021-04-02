import React from "react";
import { View, Text, ImageBackground, Dimensions, ScrollView, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;
const dummyData = [1, 2, 3, 4, 5, 6, 7];
const FeedSkeleton = (props) => {
  const { setYValue } = props;
  return (
    <>
      <View style={{ height: "100%", width: "100%" }}>
        <ScrollView
          contentContainerStyle={{ backgroundColor: "#fff" }}
          onScroll={({ nativeEvent }) => setYValue(nativeEvent.contentOffset.y)}
          nestedScrollEnabled={false}>
          <ShimmerPlaceholder
            isReversed={true}
            //  shimmerColors={["#ebebeb", "#c5c5c5", "#ebebeb", "#c5c5c5"]}
            //location={[0.3, 0.5, 0.7, 1]}
            style={{
              overflow: "hidden",
              backgroundColor: "#000",
              width: wp(100),
              height: hp(100),
            }}
          />

          {/* hoizontal carousal */}
          <View style={styles.owlCraousel}>
            <FlatList
              horizontal
              data={dummyData}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item, index }) => <ShimmerPlaceholder isReversed={true} speed={2000} style={styles.effect} />}
            />
          </View>

          <View style={[styles.tripsListCraousel, { justifyContent: "space-around", width: windowWidth }]}>
            {/* Title Row */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "96%",
              }}>
              <View style={{ width: wp(80) }}>
                <Text style={{ fontWeight: "bold", fontSize: hp(4), color: "#444444" }}>Our best promotion trips</Text>
              </View>
              <TouchableOpacity onPress={() => {}}>
                <Text style={{ fontWeight: "bold", fontSize: 12, color: "#000", marginBottom: hp(2.8) }}>View All</Text>
              </TouchableOpacity>
            </View>
            {/* hoizontal carousal */}

            <FlatList
              horizontal
              data={dummyData}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ alignItems: "center" }}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item, index }) => (
                <View
                  style={[
                    {
                      marginRight: 30,
                      width: wp(75),
                      height: hp(33.3),
                      borderRadius: 15,
                      overflow: "hidden",
                      backgroundColor: "white",
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.2,
                      shadowRadius: 1.41,
                      elevation: 3,
                    },
                  ]}>
                  <View
                    style={{
                      height: "77%",
                      width: "100%",
                    }}>
                    <ShimmerPlaceholder
                      isReversed={true}
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  </View>
                  <View
                    style={{
                      height: "23%",
                      width: "100%",
                      justifyContent: "center",
                    }}>
                    <ShimmerPlaceholder isReversed={true} style={{ position: "absolute", top: wp(2), left: wp(2.5), fontSize: wp(5) }} />

                    {/* <ShimmerPlaceholder
                    isReversed={true} style={{ height: 20, width: "60%" }} /> */}
                  </View>
                </View>
              )}
            />
          </View>

          <View style={[styles.tripsListCraousel, { height: hp(39), justifyContent: "space-around", width: windowWidth }]}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "space-between",
                width: "96%",
              }}>
              <Text style={{ fontWeight: "bold", fontSize: hp(4), color: "#444444" }}>Our best promotion</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={{ fontWeight: "bold", fontSize: 12, color: "#000", marginBottom: hp(1) }}>View All</Text>
              </TouchableOpacity>
            </View>
            <View style={[{ alignItems: "center" }]}>
              <FlatList
                horizontal
                data={dummyData}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item, index }) => (
                  <View
                    style={[
                      {
                        marginRight: 30,
                        width: wp(75),
                        height: hp(30),
                        borderRadius: 15,
                        marginTop: hp(3),
                        overflow: "hidden",
                        backgroundColor: "white",
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 1,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.41,
                        elevation: 3,
                        marginBottom: wp(2),
                      },
                    ]}>
                    <View
                      style={{
                        height: "87%",
                        width: "100%",
                      }}>
                      <ShimmerPlaceholder
                        isReversed={true}
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </View>
                    <View
                      style={{
                        height: "13%",
                        width: "100%",
                        justifyContent: "center",
                      }}>
                      <ShimmerPlaceholder isReversed={true} style={{ position: "absolute", top: wp(2), left: wp(2.5), fontSize: wp(5) }} />
                      {/* <ShimmerPlaceholder
                    isReversed={true} speed={2000}>
                      <View style={{ height: 30, width: "60%" }} />
                    </ShimmerPlaceholder> */}
                    </View>
                  </View>
                )}
              />
            </View>
          </View>

          <View style={[styles.blogCraousel, { height: hp(65), paddingTop: hp(3), marginTop: hp(4) }]}>
            <View style={{}}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white",
                }}>
                Read the latest from blog
              </Text>
            </View>
            <View style={[{ marginBottom: "5%", marginTop: wp(1) }]}>
              <FlatList
                horizontal
                data={dummyData}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item, index }) => (
                  <View
                    style={[
                      {
                        marginRight: 10,
                        width: wp(77),
                        height: hp(44),
                        borderRadius: 15,
                        overflow: "hidden",
                        backgroundColor: "white",
                        marginBottom: hp(4.9),
                      },
                    ]}>
                    <View
                      style={{
                        height: "60%",
                        width: wp(100),
                      }}>
                      <ShimmerPlaceholder
                        isReversed={true}
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </View>
                    <View
                      style={{
                        height: "40%",
                        width: "100%",
                      }}>
                      <ShimmerPlaceholder isReversed={true} style={{ height: hp(3), width: "60%", marginLeft: wp(3), marginTop: wp(4) }} />

                      <ShimmerPlaceholder isReversed={true} style={{ height: hp(2), width: "100%", marginLeft: wp(3), marginTop: wp(4) }} />
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default FeedSkeleton;

const styles = StyleSheet.create({
  owlCraousel: {
    width: wp(97),
    height: wp(47),
    paddingTop: wp(9),
    justifyContent: "space-around",
  },
  effect: {
    width: wp(30),
    height: wp(34),
    backgroundColor: "white",
    marginLeft: wp(4.5),
    borderRadius: 15,
    overflow: "hidden",
  },
  tripsListCraousel: {
    paddingLeft: "5%",
    width: "100%",
    height: hp(48),
    marginTop: hp(1.5),
  },
  blogCraousel: {
    backgroundColor: "black",
    paddingHorizontal: "5%",
    width: "100%",
    justifyContent: "space-around",
    paddingVertical: 6.5,
  },
});
