import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import externalStyle from "../style/externalStyle";
import FlatButton from "../style/button.js";

export default function Start({ navigation }) {
  //move to next screen
  const pressHandler = () => {
    navigation.navigate("CustomCharacters");
  };

  return (
    <SafeAreaView style={externalStyle.container}>
      <LinearGradient
        colors={["#0A043C", "#03506F", "#A3DDCB", "#A3DDCB"]}
        style={externalStyle.background}
      />
      <TouchableOpacity onPress={() => console.log("Image tapped")}>
        <Image source={require("../assets/Logo.png")} />
      </TouchableOpacity>

      <View>
        {/*Custom button leads to function at the top */}
        <FlatButton
          text="start"
          style={externalStyle.fontStyle}
          onPress={pressHandler}
        />
      </View>

      <View style={{ position: "absolute", bottom: 15 }}>
        <Text
          numberOfLines={2}
          style={
            (externalStyle.fontStyle,
            {
              fontFamily: "MarkerFelt-Thin",
              fontSize: 27,
              opacity: 0.2,
              color: "#082370",
            })
          }
        >
          2021 Patrycja Chrzaszcz @ Edinburgh Napier University
        </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
