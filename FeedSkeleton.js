import React from "react";
import { View, Text, ImageBackground, Dimensions, ScrollView, StyleSheet, FlatList, TouchableOpacity } from "react-native";
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
const positionX = null;
const FeedSkeleton = (props) => {
  const { returnYalue, canGoForward, isEnglish } = props;
  return (
    <>
      <View style={{ height: hp(100), width: wp(100) }}>
        <ScrollView contentContainerStyle={{ backgroundColor: "#fff", }} nestedScrollEnabled={false}>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={700}>
            <ShimmerPlaceholder
              style={{
                overflow: "hidden",
                backgroundColor: "#000",
                width: wp(100),
                height: hp(100),
              }}
            />
          </Animatable.View>
          {/* hoizontal carousal */}
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={700}
            style={styles.owlCraousel}>
            <FlatList
              horizontal
              data={dummyData}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item, index }) => <ShimmerPlaceholder speed={700} style={styles.effect} />}
            />
          </Animatable.View>

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
                <Text style={{ fontWeight: "bold", fontSize: hp(3), color: "#444444" }}>Tours</Text>
              </View>
              <TouchableOpacity onPress={() => {}}>
                <Text style={{ fontWeight: "bold", fontSize: 12, color: "#000", marginBottom: hp(-1) }}>View All</Text>
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
                <Animatable.View
                  useNativeDriver
                  animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
                  duration={700}
                  style={[
                    {
                      marginTop:-15,
                      marginRight: 30 ,
                      width: wp(81.5),
                      height: hp(35),
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
                    <ShimmerPlaceholder style={{ position: "absolute", top: wp(2), left: wp(2.5), fontSize: wp(5) }} />

                    {/* <ShimmerPlaceholder style={{ height: 20, width: "60%" }} /> */}
                  </View>
                </Animatable.View>
              )}
            />
          </View>

          <View style={[styles.tripsListCraousel, { justifyContent: "space-around", width: windowWidth  }]}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "space-between",
                width: "96%", marginTop:wp(1)
              }}>
              <Text style={{ fontWeight: "bold", fontSize: hp(3.5), color: "#444444",width: wp(80) }}>Our best promotion boats</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={{ fontWeight: "bold", fontSize: 12, color: "#000", marginBottom: hp(5) }}>View All</Text>
              </TouchableOpacity>
            </View>
            <View style={[{ alignItems: "center",marginTop:hp(2.5), }]}>
              <FlatList
                horizontal
                data={dummyData}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item, index }) => (
                  <Animatable.View
                    useNativeDriver
                    animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
                    duration={700}
                    style={[
                      {
                        marginRight: 30,
                        width: wp(81.5),
                        height: hp(35),
                        borderRadius: 15,
                        //marginTop: hp(1),
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
                        height: "77%",
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
                        height: "23%",
                        width: "100%",
                        justifyContent: "center" 
                      }}>
                      <ShimmerPlaceholder style={{ position: "absolute", top: wp(2), left: wp(2.5), fontSize: wp(5) }} />
                      {/* <ShimmerPlaceholder speed={700}>
                      <View style={{ height: 30, width: "60%" }} />
                    </ShimmerPlaceholder> */}
                    </View>
                  </Animatable.View>
                )}
              />
            </View>
          </View>

          <View style={[styles.blogCraousel, { height: hp(66), paddingTop: hp(4), marginTop: hp(4.7) }]}>
            <View style={{}}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 26,
                  color: "white",
                }}>
                Read about experiences
              </Text>
            </View>
            <View style={[{ marginBottom: "5%", marginTop: wp(1) }]}>
              <FlatList
                horizontal
                data={dummyData}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item, index }) => (
                  <Animatable.View
                    useNativeDriver
                    animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
                    duration={700}
                    style={[
                      {
                        marginRight: 15,
                        width: wp(77.5),
                        height: hp(43),
                        borderRadius: 15,
                        overflow: "hidden",
                        backgroundColor: "white",
                        marginBottom: hp(5.9),
                      },
                    ]}>
                    <View
                      style={{
                        height: "60%",
                        width: wp(100),
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
                        height: "40%",
                        width: "100%",
                      }}>
                      <ShimmerPlaceholder style={{ height: hp(3), width: "60%", marginLeft: wp(3), marginTop: wp(4) }} />

                      <ShimmerPlaceholder style={{ height: hp(2), width: "100%", marginLeft: wp(3), marginTop: wp(4) }} />
                    </View>
                  </Animatable.View>
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
    paddingLeft: "4%",
    width: "100%",
    height: hp(48),
    marginTop: hp(1.5),
  },
  blogCraousel: {
    backgroundColor: "black",
    paddingHorizontal: "4%",
    width: "100%",
    justifyContent: "space-around",
    paddingVertical: 6.5,
  },
});
