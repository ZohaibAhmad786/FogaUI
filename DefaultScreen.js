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
const DefaultScreen = (props) => {
  const { canGoForward, isEnglish } = props;
  return (
    <>
      <View style={{ height: hp(100), width: wp(100) }}>
      <ScrollView contentContainerStyle={{ backgroundColor: "white", paddingVertical: hp(4) }} nestedScrollEnabled={false}>
      <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(56),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(34),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(68),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(22),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(46),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(44),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row'}}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(36),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",
                marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(54),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center",
                marginTop: hp(2)
              }}
            />
          </Animatable.View>

                                                     {/* group2 */}


          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1),marginTop:hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(56),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(34),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(68),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(22),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(46),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(44),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row'}}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(36),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",
                marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(54),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center",
                marginTop: hp(2)
              }}
            />
          </Animatable.View>


                                                 {/* group3 */}

                                                 <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1),marginTop:hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(56),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(34),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(68),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(22),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(46),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(44),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row'}}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(36),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",
                marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(54),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center",
                marginTop: hp(2)
              }}
            />
          </Animatable.View>

                        {/* group4 */}

                        <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1),marginTop:hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(56),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(34),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(68),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(22),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(46),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(44),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row'}}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(36),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",
                marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(54),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center",
                marginTop: hp(2)
              }}
            />
          </Animatable.View>


                                {/* group5 */}

                                <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1),marginTop:hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(56),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(34),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(68),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(22),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(46),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(44),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row'}}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(36),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",
                marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(54),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center",
                marginTop: hp(2)
              }}
            />
          </Animatable.View>


                                                {/* group7 */}



          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1),marginTop:hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(56),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(34),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(68),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(22),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row',
                marginBottom: hp(-1)
            }}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(46),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(44),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center", marginTop: hp(2)
              }}
            />
          </Animatable.View>
          <Animatable.View
            useNativeDriver
            animation={canGoForward ? (isEnglish ? "slideInLeft" : "slideInRight") : isEnglish ? "slideInRight" : "slideInLeft"}
            duration={300} style={{flexDirection: 'row'}}>
            <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(36),
                height: hp(3),
                marginLeft: wp(3.5),
                justifyContent: "center",
                marginTop: hp(2)
              }}
            />
             <ShimmerPlaceholder
              style={{
                backgroundColor: "blue",
                width: wp(54),
                height: hp(3),
                marginLeft: wp(1),
                justifyContent: "center",
                marginTop: hp(2)
              }}
            />
          </Animatable.View>
        </ScrollView>
      </View>
    </>
  );
};

export default DefaultScreen;

const styles = StyleSheet.create({});
