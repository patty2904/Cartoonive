import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FooterTab,
  Modal,
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
import { useState } from "react";

export default function movieLibrary({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [getK, setK] = useState(0);

  let imageToggle = true;
  var customTop = 15;
  let k = 1;

  const populateLibrary = [];
  for (let i in addedMovieList) {
    populateLibrary.push(
      <TouchableOpacity
        onPress={() => {
          setModalOpen(true);
          setK(i);
          console.log("k inside loop:" + k);
        }}
      >
        <Image
          style={
            (externalStyle.image,
            {
              top: customTop,
              alignContent: "center",
              height: 180,
              width: 200,
              right: -70,
            })
          }
          source={addedMovieList[i].uri}
        />
      </TouchableOpacity>
    );
    customTop += 15;
  }

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
            source={require("../assets/movies.png")}
          >
            <Image
              style={{ width: 60, height: 60, right: -30 }}
              source={image}
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={{ paddingLeft: -190, paddingRight: 170, marginLeft: 20 }}>
          {populateLibrary}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Movies");
            }}
          >
            <Image
              source={require("../assets/plus.png")}
              style={{
                opacity: 0.5,
                height: 100,
                width: 100,
                top: 150,
                right: -10,
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View>
        <Modal visible={modalOpen} animationType="slide">
          <ScrollView
            style={{
              backgroundColor: "#B6A3B0",
              flex: 1,
            }}
          >
            <View style={{ backgroundColor: "#B6A3B0", flex: 1 }}>
              <TouchableOpacity
                onPress={() => {
                  setModalOpen(false);
                  console.log("k outside of loop: " + k);
                }}
              >
                <Image
                  style={{ width: 50, height: 50, left: 20, bottom: -50 }}
                  source={require("../assets/removeblue.png")}
                />
              </TouchableOpacity>
              <Image
                style={{ height: 200, width: 200, bottom: -40, left: 105 }}
                source={addedMovieList[getK].uri}
              />
              <Text
                style={{
                  bottom: -60,
                  color: "black",
                  fontFamily: "MarkerFelt-Thin",
                  fontSize: 21,
                  textAlign: "left",
                }}
              >
                Name: {addedMovieList[getK].name}
              </Text>
              <Text
                style={{
                  bottom: -90,
                  color: "black",
                  fontFamily: "MarkerFelt-Thin",
                  fontSize: 21,
                  textAlign: "left",
                }}
              >
                Year: {addedMovieList[getK].year}
              </Text>
              <Text
                style={{
                  bottom: -120,
                  color: "black",
                  fontSize: 21,
                  textAlign: "left",
                  fontFamily: "MarkerFelt-Thin",
                }}
              >
                Description: {addedMovieList[getK].description}
              </Text>
              <Image
                style={{ height: 80, width: 80, bottom: -140, left: 150 }}
                source={require("../assets/tick.png")}
              />
            </View>
          </ScrollView>
        </Modal>
      </View>

      <View style={externalStyle.container}>
        <ImageBackground
          source={require("../assets/cleanlogo.png")}
          style={{
            height: 327,
            width: 327,
          }}
          resizeMode="contain"
        ></ImageBackground>
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
          My Movies
        </Text>
      </View>
    </View>
  );
}
