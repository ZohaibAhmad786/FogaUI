import React from 'react'
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
  import * as Animatable from 'react-native-animatable';
  
  const windowWidth = Dimensions.get("screen").width;
  const windowHeight = Dimensions.get("screen").height;
  const dummyData = [1, 2, 3, 4, 5, 6, 7];

const ViewAllTrips = (props) => {
  const {canGoForward}=props
    return (
        <>
        <View style={{ height: hp(100),width: wp(100) }} >
    
    <ScrollView contentContainerStyle={{ backgroundColor: 'white',  paddingVertical: hp(4)}} nestedScrollEnabled={false} >
       
    <Animatable.View animation={canGoForward? "slideInLeft": "slideInRight"}
        duration={300}>
        <ShimmerPlaceholder  
          style={{
            backgroundColor: "blue",
            width: wp(90),
            height: hp(6),
            borderRadius: hp(1.5),
            marginLeft: wp(5),
            justifyContent: 'center',
            marginBottom: hp(3)
          }} /> 
        </Animatable.View>

        {/* vertical trips list */}
        <Animatable.View
        animation={canGoForward? "slideInLeft": "slideInRight"}
        duration={300} 
        style={{marginTop: hp(40),}}>
          <FlatList 
            data={dummyData}
            showsVerticalScrollIndicator={false} 
            keyExtractor={(item) => item.toString()}
            renderItem={({ item, index }) => (
              <View style = {{width: wp(90),height:hp(26.5), backgroundColor: 'white', marginVertical: hp(1.9), 
              alignSelf: 'center', borderRadius: hp(2),flexDirection: 'row',
              shadowColor: "#000", shadowOffset: { width: 0,height: 1,},
              shadowOpacity: 0.2,shadowRadius: 1.41,elevation: 3, alignItems: 'center' }}>
                  <ShimmerPlaceholder style = {{width: wp(47),height:hp(22.9), backgroundColor: 'grey', marginVertical: hp(0.5),
                  marginLeft: wp(1),borderRadius: hp(1.6)}} />
                  <View style ={{width: wp(47), height: hp(23)}}>
                      <ShimmerPlaceholder style ={{width: wp(32), height: hp(3), backgroundColor: 'grey',marginTop: hp(1), marginHorizontal: wp(3),justifyContent: 'center'}} />
                      <ShimmerPlaceholder style= {{width: wp(36), height: hp(14), backgroundColor: 'grey',marginTop: hp(1), marginHorizontal: wp(3),justifyContent: 'center',marginLeft: wp(1.5)}}/>
                  </View>
               </View>
            )}
          /> 
          </Animatable.View>
        </ScrollView>
        </View>
        </>
    );
}

export default ViewAllTrips

const styles = StyleSheet.create({
    tripsList: {
        paddingLeft: "5%",
        width: "100%",
        height: hp(48),
        marginTop: hp(1.5)
      }
})
