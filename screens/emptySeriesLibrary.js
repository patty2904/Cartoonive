import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FooterTab,
  Header,
  Content,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
  Category,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import externalStyle from "../style/externalStyle";
import FlatButton from "../style/button.js";
import { Container, Footer } from "native-base";
import seriesBaseMethod, { seriesBase } from "../objects/seriesBase.js";
import { seriesList } from "../objects/seriesList";
import { image } from "./home";

export default function emptySeriesLibrary({ navigation }) {
  return (
    <View style={externalStyle.container}>
      <LinearGradient
        colors={["#0A043C", "#03506F", "#A3DDCB", "#A3DDCB"]}
        style={externalStyle.background}
      />

      <View style={externalStyle.headerr}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("LibraryHome");
          }}
        >
          <Image
            style={{ width: 50, height: 50, right: 155, top: 50 }}
            source={require("../assets/back_blue.png")}
          />
          <ImageBackground
            style={{ width: 60, height: 60, bottom: 10, right: 2 }}
            source={require("../assets/series.png")}
          >
            <Image
              style={{ width: 60, height: 60, right: -30 }}
              source={image}
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={externalStyle.container}>
        <ImageBackground
          source={require("../assets/cleanlogo.png")}
          style={{
            height: 327,
            width: 327,
          }}
          resizeMode="contain"
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Series");
            }}
          >
            <Image
              source={require("../assets/plus.png")}
              style={{
                opacity: 0.5,
                height: 100,
                width: 100,
                left: 120,
                bottom: 100,
              }}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={externalStyle.footer}>
        <Text
          style={{
            color: "white",
            fontFamily: "MarkerFelt-Thin",
            fontSize: 35,
            right: 5,
            bottom: 5,
          }}
        >
          My Series
        </Text>
      </View>
    </View>
  );
}
