import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const TryAgain = (props) => {
  const { reloadPage } = props;
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./../lostinsea.png")} style={styles.imgStyle} resizeMode='cover'>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            // height: "20%",
            marginTop: hp(-12),
          }}>
          <View>
            <Text style={styles.titleLabel}>Connection is lost</Text>
            <Text style={styles.msgLabel}>Please check your network settings</Text>
          </View>
          <LinearGradient
            colors={["#68DDF1", "#1D7583"]}
            start={{ x: 0.1, y: 0.25 }}
            end={{ x: 0.3, y: 3 }}
            locations={[0, 0.6]}
            style={styles.btnContainer}>
            <TouchableOpacity onPress={() => reloadPage()}>
              <Text style={{ fontWeight: "bold", color: "#fff" }}>Try Again</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TryAgain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
  },
  msgLabel: {
    textAlign: "center",
    fontSize: hp(1.8),
    marginTop: hp(1),
    marginBottom: hp(2),
  },
  titleLabel: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: hp(2.3),
  },
  imgStyle: {
    height: hp(60),
    width: wp(100),
    padding: wp(3),
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "transparent",
  },
  btnContainer: {
    marginTop: hp(1),
    width: wp(30),
    alignItems: "center",
    borderRadius: hp(20),
    paddingVertical: hp(1),
  },
});
