import React from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
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
const Tour = (props) => {
    const {canGoForward}=props
  return (
    <>
      <View style={{ height: hp(100), width: wp(100) }}>
        <ScrollView contentContainerStyle={{ backgroundColor: "white",}} nestedScrollEnabled={false}>
        <Animatable.View animation={canGoForward? "slideInLeft": "slideInRight"}
        duration={300}>
        <ShimmerPlaceholder  
          style={{ 
            width: wp(100),
            height: hp(29.5),  
            justifyContent: 'center',  
          }} /> 
        </Animatable.View>
        <Animatable.View  animation={canGoForward? "slideInLeft": "slideInRight"} duration={300} style={{ 
            width: wp(95.5),
            height: hp(100),   
            alignSelf:'center', 
            backgroundColor: 'white',
            marginTop: hp(-5.5),
            borderRadius: hp(2),
          }} >
            <ShimmerPlaceholder 
               style={{ 
                width: wp(13),
                height: hp(3), 
                marginLeft: wp(3.5),
                justifyContent: 'center',  
                marginTop: hp(6), 
              }}
            />
              <ShimmerPlaceholder 
              style={{ 
            width: wp(65),
            height: hp(3.2), 
            marginLeft: wp(3.5),
            justifyContent: 'center',  
            marginTop: hp(1.5), 
          }} /> 
          <ShimmerPlaceholder 
              style={{ 
            width: wp(13),
            height: hp(3), 
            marginLeft: wp(3.5),
            justifyContent: 'center',  
            marginTop: hp(1.5), 
          }} /> 
          <View style={{  flexDirection: 'row'}}>
          <ShimmerPlaceholder 
            style={{
              width: wp(33),
              height: hp(18), 
              marginLeft: wp(4),
              justifyContent: 'center',  
              marginTop: hp(6),
              borderRadius: hp(1.5)
            }}
          />
           <ShimmerPlaceholder 
            style={{
              width: wp(33),
              height: hp(18), 
              marginLeft: wp(6),
              justifyContent: 'center',  
              marginTop: hp(6),
              borderRadius: hp(1.5)
            }}
          />
          </View>
          <ShimmerPlaceholder 
            style={{
              width: wp(31),
              height: hp(3), 
              marginLeft: wp(3.5),
              justifyContent: 'center',  
              marginTop: hp(6), //3
            }}
          />
           <ShimmerPlaceholder 
            style={{
              width: wp(40),
              height: hp(3.5), 
              marginLeft: wp(3.5),
              justifyContent: 'center',  
              marginTop: hp(2), 
            }}
          />
          <ShimmerPlaceholder 
            style={{
              width: wp(75),
              height: hp(2), 
              marginLeft: wp(3.5),
              justifyContent: 'center',  
              marginTop: hp(1.45), 
            }}
          />
           <ShimmerPlaceholder 
            style={{
              width: wp(80),
              height: hp(2), 
              marginLeft: wp(3.5),
              justifyContent: 'center',  
              marginTop: hp(1.45), 
            }}
          />
           <ShimmerPlaceholder 
            style={{
              width: wp(85),
              height: hp(2), 
              marginLeft: wp(3.5),
              justifyContent: 'center',  
              marginTop: hp(1.45), 
            }}
          />
          <ShimmerPlaceholder 
            style={{
              width: wp(83),
              height: hp(2), 
              marginLeft: wp(3.5),
              justifyContent: 'center',  
              marginTop: hp(1.45), 
            }}
          />
          <ShimmerPlaceholder 
            style={{
              width: wp(80),
              height: hp(2), 
              marginLeft: wp(3.5),
              justifyContent: 'center',  
              marginTop: hp(1.45), 
            }}
          />
          <ShimmerPlaceholder 
            style={{
              width: wp(85),
              height: hp(2), 
              marginLeft: wp(3.5),
              justifyContent: 'center',  
              marginTop: hp(1.45), 
            }}
          />
          <ShimmerPlaceholder 
            style={{
              width: wp(83),
              height: hp(2), 
              marginLeft: wp(3.5),
              justifyContent: 'center',  
              marginTop: hp(1.45), 
            }}
          />
          <ShimmerPlaceholder 
            style={{
              width: wp(85),
              height: hp(2), 
              marginLeft: wp(3.5),
              justifyContent: 'center',  
              marginTop: hp(1.45), 
            }}
          />
          <ShimmerPlaceholder 
            style={{
              width: wp(82),
              height: hp(2), 
              marginLeft: wp(3.5),
              justifyContent: 'center',  
              marginTop: hp(1.45), 
            }}
          />
          <ShimmerPlaceholder 
            style={{
              width: wp(83),
              height: hp(2), 
              marginLeft: wp(3.5),
              justifyContent: 'center',  
              marginTop: hp(1.45), 
            }}
          />
          <ShimmerPlaceholder 
            style={{
              width: wp(81),
              height: hp(2), 
              marginLeft: wp(3.5),
              justifyContent: 'center',  
              marginTop: hp(1.45), 
            }}
          />
          <ShimmerPlaceholder 
            style={{
              width: wp(85),
              height: hp(2), 
              marginLeft: wp(3.5),
              justifyContent: 'center',  
              marginTop: hp(1.45), 
            }}
          />
          <ShimmerPlaceholder 
            style={{
              width: wp(85),
              height: hp(2), 
              marginLeft: wp(3.5),
              justifyContent: 'center',  
              marginTop: hp(1.45), 
            }}
          />
          <ShimmerPlaceholder 
          style={{
            width: wp(81),
            height: hp(2), 
            marginLeft: wp(3.5),
            justifyContent: 'center',  
            marginTop: hp(1.45), 
          }}
        />
        <ShimmerPlaceholder 
          style={{
            width: wp(20),
            height: hp(2), 
            marginLeft: wp(3.5),
            justifyContent: 'center',  
            marginTop: hp(1.45), 
          }}
        />
        </Animatable.View>
          </ScrollView>
      </View>
    </>
  );
};

export default Tour;

const styles = StyleSheet.create({});
