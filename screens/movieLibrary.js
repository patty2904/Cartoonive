import React from "react";
import {
  Modal,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import externalStyle from "../style/externalStyle";
import { image } from "./home";
import { addedMovieList, userRating } from "./movies";
import { useState } from "react";
import ONE from "../assets/emojis/happiness.png";
import TWO from "../assets/emojis/sadness.png";
import THREE from "../assets/emojis/love.png";
import FOUR from "../assets/emojis/fear.png";
import FIVE from "../assets/emojis/excited.png";
import SIX from "../assets/emojis/dead.png";
import SEVEN from "../assets/emojis/disappointment.png";
import EIGHT from "../assets/emojis/friendly.png";
import NINE from "../assets/emojis/sickness.png";
import PINK from "../assets/circle.png";

export default function movieLibrary({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [getK, setK] = useState(0);

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

  var ratingImage = "";
  const retrieveRating = () => {
    if (userRating == 1) {
      ratingImage = ONE;
    } else if (userRating == 2) {
      ratingImage = TWO;
    } else if (userRating == 3) {
      ratingImage = THREE;
    } else if (userRating == 4) {
      ratingImage = FOUR;
    } else if (userRating == 5) {
      ratingImage = FIVE;
    } else if (userRating == 6) {
      ratingImage = SIX;
    } else if (userRating == 7) {
      ratingImage = SEVEN;
    } else if (userRating == 8) {
      ratingImage = EIGHT;
    } else if (userRating == 9) {
      ratingImage = NINE;
    } else {
      ratingImage = PINK;
    }
  };

  return (
    <View style={externalStyle.container}>
      <LinearGradient
        colors={["#0A043C", "#03506F", "#A3DDCB", "#A3DDCB"]}
        style={externalStyle.background}
      />
      {retrieveRating()}

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
                top: 80,
                left: 110,
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
              <Image
                style={{ height: 80, width: 80, left: 150, bottom: -190 }}
                source={ratingImage}
              />
            </View>
          </ScrollView>
        </Modal>
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
