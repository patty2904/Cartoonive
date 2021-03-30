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
import { addedMovieList } from "./movies";

export default function libraryHome({ navigation }) {
  return (
    <View style={externalStyle.container}>
      <LinearGradient
        colors={["#0A043C", "#03506F", "#A3DDCB", "#A3DDCB"]}
        style={externalStyle.background}
      />

      <View style={externalStyle.headerr}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            style={{ width: 50, height: 50, right: 155, top: 50 }}
            source={require("../assets/back_blue.png")}
          />
          <Image
            style={{ width: 60, height: 60, bottom: 10, right: 2 }}
            source={image}
          />
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
          <ImageBackground
            source={require("../assets/circle.png")}
            style={{
              width: 315,
              height: 285,
              resizeMode: "contain",
              bottom: 150,
              left: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (addedMovieList.length === 0) {
                  navigation.navigate("EmptyMovieLibrary");
                } else {
                  navigation.navigate("MovieLibrary");
                }
              }}
            >
              <Image
                source={require("../assets/movies.png")}
                style={{
                  width: 210,
                  height: 210,
                  resizeMode: "contain",
                  bottom: -25,
                  left: 50,
                }}
              />
            </TouchableOpacity>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/circle.png")}
            style={{
              width: 315,
              height: 285,
              resizeMode: "contain",
              top: -105,
              right: -10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SeriesLibrary");
              }}
            >
              <Image
                source={require("../assets/series.png")}
                style={{
                  width: 210,
                  height: 210,
                  resizeMode: "contain",
                  top: 30,
                  left: 50,
                }}
              />
            </TouchableOpacity>
          </ImageBackground>
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
          My Library
        </Text>
      </View>
    </View>
  );
}
