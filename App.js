import React from "react";
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
  RecyclerViewBackedScrollView,
} from "react-native";
import { WebView } from "react-native-webview";
import { BackHandler } from "react-native";
import FeedSkeleton from "./FeedSkeleton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";
import TryAgain from "./components/TryAgain";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import ViewAllTrips from "./ViewAllTrips";
import ViewAll from "./ViewAll";
import Trip from "./Trip";
import Tour from "./Tour";
import Blog from "./Blog";
// import ViewAllTrips from "./ViewAllTrips";
const App = () => {
  const [link, setLink] = React.useState("https://foga.app/");
  const [canGoBack, setCanGoBack] = React.useState(false);
  const [canGoForward, setCanGoForward] = React.useState(false);
  const [indicator, setIndicator] = React.useState(true);
  const webviewRef = React.useRef(null);
  const [isAnimationStart, setIsAnimationStart] = React.useState(true);
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
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", marginTop: StatusBar.currentHeight }}>
      <WebView
        source={{ uri: "https://foga.app" }}
        onNavigationStateChange={(navState) => {
          console.log(navState.url);
          setCanGoForward(!navState.canGoForward);
          setLink(navState.url);
        }}
        ref={webviewRef}
        onLoadStart={(syntheticEvent) => {
          setIndicator(true);
          setIsAnimationStart(true);
        }}
        onLoadEnd={(syntheticEvent) => {
          setIndicator(false);
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
        userAgent="custom"
        cacheEnabled={true}
        //cacheMode='LOAD_CACHE_ELSE_NETWORK'
        renderError={() => <TryAgain reloadPage={() => reloadPage()} />}
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
            <FeedSkeleton returnYalue={(yValue) => console.log(yValue)} />
          ) : link === "https://foga.app/trip" ? (
            <ViewAllTrips canGoForward={canGoForward} />
          ) : link === "https://foga.app/tour" ? (
            <ViewAll canGoForward={canGoForward} />
          ) : link === "https://foga.app/trip/hilton-beach-resort" ? (
            <Trip canGoForward={canGoForward} />
          ) : link === "https://foga.app/tour/fahaheel-sea-club" ? (
            <Tour canGoForward={canGoForward} />
          ) : link.startsWith("https://foga.app/news/") ? (
            <Blog canGoForward={canGoForward} />
          ) : (
            <Tour canGoForward={canGoForward} />
          )}
          <View
            style={{
              position: "absolute",
              zIndex: 1000,
              backgroundColor: "#fff",
              height: hp(9),
              width: wp(88),
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
              <FontAwesome5 name="search" color="#444" size={wp(5)} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
                height: "100%",
              }}
              onPress={() => {}}>
              <FontAwesome name="heart" color="#444" size={wp(5)} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
                height: "100%",
              }}
              onPress={() => {}}>
              <MaterialCommunityIcons name="email" color="#444" size={wp(5)} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
                height: "100%",
              }}
              onPress={() => {}}>
              <FontAwesome name="bell" color="#444" size={wp(5)} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
                height: "100%",
              }}
              onPress={() => {}}>
              <FontAwesome name="user" color="#444" size={wp(5)} />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {/* <ViewAllTrips />  */}
      {/* <ViewAll /> */}
      {/* <Trip /> */}
      {/* <Tour /> */}
      {/* <Blog /> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
