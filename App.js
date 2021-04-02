import React from "react";
import { View, Text, StatusBar, Animated, Image, ActivityIndicator, SafeAreaView, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import FeedSkeleton from "./FeedSkeleton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import TryAgain from "./components/TryAgain";
const App = () => {
  const webviewRef = React.useRef(null);
  const [splash, setSplash] = React.useState(true);
  const [indicator, setIndicator] = React.useState(true);
  const [yValue, setYValue] = React.useState(0);

  React.useEffect(() => {
    if (yValue >= 0) {
      console.log("yValue : ", yValue);
      webviewRef?.current?.injectJavaScript(
        `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=0.99, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); window.scrollBy(0,${yValue});`
      );
      console.log(
        `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=0.99, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); window.scrollBy(0,${yValue});`
      );
    }
  }, [yValue]);
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", marginTop: StatusBar.currentHeight }}>
      <WebView
        source={{ uri: "https://foga.app/" }}
        ref={webviewRef}
        onLoadStart={(syntheticEvent) => {
          setIndicator(true);
        }}
        onLoadEnd={(syntheticEvent) => {
          setTimeout(() => {
            setIndicator(false);
          }, 2000);
        }}
        // onNavigationStateChange={(navState) => {
        //   setIndicator(navState.loading);
        // }}
        sharedCookiesEnabled={true}
        javaScriptCanOpenWindowsAutomatically={true}
        domStorageEnable={true}
        allowFileAccess={true}
        thirdPartyCookiesEnabled={true}
        allowsFullscreenVideo={true}
        allowsInlineMediaPlayback={true}
        javaScriptEnabled={true}
        scalesPageToFit={true}
        userAgent='custom'
        cacheEnabled={true}
        cacheMode='LOAD_CACHE_ELSE_NETWORK'
        // renderError={() => <TryAgain reloadPage={() => reloadPage()} />}
        style={{ height: "100%", width: "100%" }}
      />
      {indicator && (
        <View
          style={{
            height: "100%",
            width: "100%",
            zIndex: 1000,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}>
          <FeedSkeleton setYValue={(y) => setYValue(y)} />
          <View
            style={{
              position: "absolute",
              zIndex: 1000,
              backgroundColor: "#fff",
              height: hp(9),
              width: wp(88),
              bottom: hp(2.5),
              alignSelf: "center",
              borderRadius: 40,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: "20%", height: "100%" }} onPress={() => {}}>
              <FontAwesome5 name='search' color='#444' size={wp(5)} />
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: "20%", height: "100%" }} onPress={() => {}}>
              <FontAwesome name='heart' color='#444' size={wp(5)} />
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: "20%", height: "100%" }} onPress={() => {}}>
              <MaterialCommunityIcons name='email' color='#444' size={wp(5)} />
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: "20%", height: "100%" }} onPress={() => {}}>
              <FontAwesome name='bell' color='#444' size={wp(5)} />
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: "20%", height: "100%" }} onPress={() => {}}>
              <FontAwesome name='user' color='#444' size={wp(5)} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
