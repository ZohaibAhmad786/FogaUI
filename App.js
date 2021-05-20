import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  able,
  Image,
  ActivityIndicator,
  SafeAreaView,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  RecyclerViewBackedScrollView,
  Share,
  Button,
} from "react-native";
import { WebView } from "react-native-webview";
import { BackHandler } from "react-native";
import { Linking } from "react-native";
import FeedSkeleton from "./FeedSkeleton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";
//import TryAgain from "./components/TryAgain";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import ViewAllTrips from "./ViewAllTrips";
import ViewAll from "./ViewAll";
import Trip from "./Trip";
import Tour from "./Tour";
import Blog from "./Blog";
import Messages from "./Messages";
import Chat from "./Chat";
import WishList from "./WishList";
import DefaultScreen from "./DefaultScreen";
import { registerForPushNotificationsAsync } from "./Utils";
// import ViewAllTrips from "./ViewAllTrips";
const App = () => {
  const [link, setLink] = React.useState("https://foga.app/");
  const [canGoBack, setCanGoBack] = React.useState(false);
  const [canGoForward, setCanGoForward] = React.useState(false);
  const [indicator, setIndicator] = React.useState(true);
  const webviewRef = React.useRef(null);
  const [isAnimationStart, setIsAnimationStart] = React.useState(true);
  const [isEnglish, setIsEnglish] = React.useState(true);

  const INJECTEDJAVASCRIPT =
    "setTimeout(() => {document.addEventListener('scroll', function (event) {window.ReactNativeWebView.postMessage(JSON.stringify(document.getElementsByClassName('topconteiner')[0].scrollTop));},true);}, 300);true;";
  // "const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=0.99, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); ";

  console.log("canGoForward ", canGoForward);

  const reloadPage = () => {
    setIndicator(true);
    webviewRef.current.reload();
  };
  const onAndroidBackPress = () => {
    if (webviewRef.current) {
      webviewRef.current.goBack();
      return true; // prevent default behavior (exit app)
    }
    return false;
  };
  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", onAndroidBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", onAndroidBackPress);
    };
  }, []);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => alert(token));
  }, []);

  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash((state) => !state);
    }, 3000);
  }, []);
  const onShare = async (url) => {
    try {
      const result = await Share.share({
        message: url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", marginTop: StatusBar.currentHeight }}>
      <WebView
        source={{ uri: "https://foga.app" }}
        onNavigationStateChange={(navState) => {
          console.log(navState.url);
          setCanGoForward(!navState.canGoForward);
          setLink(navState.url);
          //Linking.openURL(navState.url)
        }}
        onMessage={(event) => {
          const message = event.nativeEvent.data;
          // console.log(JSON.parse(message));
          // if (JSON.parse(message)?.share) {
          //   onShare(JSON.parse(message)?.share);
          // }
          // message = JSON.parse(message);
          // Linking.openURL("https://www.facebook.com/");
          // console.log(message);
        }}
        ref={webviewRef}
        onLoadStart={(syntheticEvent) => {
          setIndicator(syntheticEvent.nativeEvent.loading);
          setIsAnimationStart(true);
        }}
        onLoadEnd={(syntheticEvent) => {
          setIndicator(syntheticEvent.nativeEvent.loading);
          //setIsAnimationStart(false)
        }}
        sharedCookiesEnabled={true}
        javaScriptCanOpenWindowsAutomatically={true}
        domStorageEnable={true}
        allowFileAccess={true}
        thirdPartyCookiesEnabled={true}
        allowsFullscreenVideo={true}
        allowsInlineMediaPlayback={true}
        javaScriptEnabled={true}
        scalesPageToFit={true}
        injectedJavaScript={INJECTEDJAVASCRIPT}
        userAgent='Excelorithm'
        cacheEnabled={false}
        // cacheMode='LOAD_CACHE_ELSE_NETWORK'
        //renderError={() => <TryAgain reloadPage={() => reloadPage()} />}
        style={{ height: hp(100), width: wp(100) }}
      />
      {indicator && (
        <View
          style={{
            height: hp(100),
            width: wp(100),
            zIndex: 1000,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}>
          {link === "https://foga.app/" ? (
            <FeedSkeleton isEnglish={isEnglish} returnYalue={(yValue) => console.log(yValue)} />
          ) : link === "https://foga.app/boat" ||
            (link.startsWith("https://foga.app/boat?") && link.substring(0, "https://foga.app/boat?".length).endsWith("?")) ? (
            <ViewAll isEnglish={isEnglish} canGoForward={canGoForward} />
          ) : link === "https://foga.app/notify/notifications" || link.startsWith("https://foga.app/notify/notifications?")&&link.substring(0,('https://foga.app/notify/notifications?').length).endsWith('?') ? (
            <Messages isEnglish={isEnglish} canGoForward={canGoForward} /> 
          ) : link === "https://foga.app/user/chat" ? (
            <Chat isEnglish={isEnglish} canGoForward={canGoForward} />
          ) : link === "https://foga.app/user/wishlist" ? (
            <WishList isEnglish={isEnglish} canGoForward={canGoForward} />
          ) : link === "https://foga.app/tour" ||
            (link.startsWith("https://foga.app/tour?") && link.substring(0, "https://foga.app/tour?".length).endsWith("?")) ? (
            <ViewAll isEnglish={isEnglish} canGoForward={canGoForward} />
          ) : link.startsWith("https://foga.app/boat/") && link.substring(0, "https://foga.app/boat/".length).endsWith("/") ? (
            //link === "https://foga.app/boat/ibtsama-kuwait" ? ( //https://foga.app/trip/hilton-beach-resort
            <Trip canGoForward={canGoForward} />
          ) : //<Button onPress={onShare} title='Share' />
          link.startsWith("https://foga.app/tour/") && link.substring(0, "https://foga.app/tour/".length).endsWith("/") ? (
            <Tour isEnglish={isEnglish} canGoForward={canGoForward} />
          ) : (link.startsWith("https://foga.app/news/") && link.substring(0, "https://foga.app/news/".length).endsWith("/")) ||
            (link.startsWith("https://foga.app/news?") && link.substring(0, "https://foga.app/news?".length).endsWith("?")) ? (
            //link === "https://foga.app/news/kashmir-solidarity-day" ? (
            <Blog isEnglish={isEnglish} canGoForward={canGoForward} />
          ) : (
            <DefaultScreen isEnglish={isEnglish} canGoForward={canGoForward} />
          )}
        </View>
      )}
      {/* <DefaultScreen /> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});

{
  /* <View
            style={{
              position: "absolute",
              zIndex: 1000,
              backgroundColor: "#fff",
              height: hp(9),
              width: wp(69),
              bottom: hp(4),
              alignSelf: "center",
              borderRadius: 40,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
                height: "100%",
              }}
              onPress={() => {}}>
              <FontAwesome5 name='search' color='#444' size={wp(5)} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
                height: "100%",
              }}
              onPress={() => {}}>
              <MaterialCommunityIcons name='email' color='#444' size={wp(5)} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
                height: "100%",
              }}
              onPress={() => {}}>
              <FontAwesome name='bell' color='#444' size={wp(5)} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
                height: "100%",
              }}
              onPress={() => {}}>
              <FontAwesome name='user' color='#444' size={wp(5)} />
            </TouchableOpacity>
          </View> */
}
