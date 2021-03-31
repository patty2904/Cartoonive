import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Modal,
  Header,
  Alert,
  Content,
  Text,
  View,
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
import { useState } from "react";

import { image } from "./home";
import { moviesList } from "../objects/moviesList";
let addedMovieList = [];
let userRating;

export default function movies({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [getK, setK] = useState(7);
  let [getAdded, setAdded] = useState([]);

  var customTop = 15;
  var customLeft = 0;
  var customRight = 155;
  let k = 19;
  const populateMovies = [];
  for (let i in moviesList) {
    populateMovies.push(
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
              left: customLeft,
              right: customRight,
              height: 180,
              width: 200,
            })
          }
          source={moviesList[i].uri}
        />
      </TouchableOpacity>
    );
    if (i % 2 == 0) {
      customTop += 15;
      customRight = 155;
      customLeft = 0;
    } else {
      customRight = 0;
      customLeft = 155;
    }
  }

  let addToArray = (moviePosition) => {
    if (moviePosition.hasAdded == true) {
      //populateAddedMovies.push(moviePosition);
      setAdded((getAdded) => [...getAdded, moviePosition]);
    }
  };

  let ratingHandler = (num) => {
    Alert.alert("Saved", "Your rating has been saved!");
    moviesList[getK].rating = num;
    userRating = moviesList[getK].rating;
  };

  return (
    <View style={externalStyle.container}>
      <LinearGradient
        colors={["#0A043C", "#03506F", "#A3DDCB", "#A3DDCB"]}
        style={externalStyle.background}
      />

      <View style={externalStyle.headerr}>
        <TouchableOpacity
          onPress={() => {
            addedMovieList = getAdded.concat(addedMovieList);
            navigation.navigate("Home");
          }}
        >
          <Image
            style={{ width: 50, height: 50, right: 155, top: 50 }}
            source={require("../assets/back_blue.png")}
          />
          <Image
            style={{ width: 60, height: 60, bottom: 10, right: 2 }}
            source={require("../assets/movies.png")}
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={{ paddingLeft: -190, paddingRight: 170, marginLeft: 20 }}>
          {populateMovies}
        </View>
      </ScrollView>

      <>
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
                }}
              >
                <Image
                  style={{ width: 50, height: 50, left: 20, bottom: -50 }}
                  source={require("../assets/removeblue.png")}
                />
              </TouchableOpacity>
              <Image
                style={{ height: 200, width: 200, bottom: -40, left: 105 }}
                source={moviesList[getK].uri}
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
                Name: {moviesList[getK].name}
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
                Year: {moviesList[getK].year}
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
                Description: {moviesList[getK].description}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  moviesList[getK].hasAdded = true;
                  {
                    addToArray(moviesList[getK]);
                  }
                  Alert.alert(
                    "Saved",
                    "This title has been added to your library"
                  );
                }}
              >
                {console.log(getAdded)}
                <Image
                  style={{ height: 80, width: 80, bottom: -130, left: 150 }}
                  source={require("../assets/plus.png")}
                />
              </TouchableOpacity>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ bottom: -200 }}
              >
                <TouchableOpacity onPress={() => ratingHandler("1")}>
                  <Image
                    style={{ height: 100, width: 100, alignSelf: "center" }}
                    source={require("../assets/emojis/happiness.png")}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => ratingHandler("2")}>
                  <Image
                    style={{ height: 100, width: 100, alignSelf: "center" }}
                    source={require("../assets/emojis/sadness.png")}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => ratingHandler("3")}>
                  <Image
                    style={{ height: 100, width: 100, alignSelf: "center" }}
                    source={require("../assets/emojis/love.png")}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => ratingHandler("4")}>
                  <Image
                    style={{ height: 100, width: 100, alignSelf: "center" }}
                    source={require("../assets/emojis/fear.png")}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => ratingHandler("5")}>
                  <Image
                    style={{ height: 100, width: 100, alignSelf: "center" }}
                    source={require("../assets/emojis/excited.png")}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => ratingHandler("6")}>
                  <Image
                    style={{ height: 100, width: 100, alignSelf: "center" }}
                    source={require("../assets/emojis/dead.png")}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => ratingHandler("7")}>
                  <Image
                    style={{ height: 100, width: 100, alignSelf: "center" }}
                    source={require("../assets/emojis/disappointment.png")}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => ratingHandler("8")}>
                  <Image
                    style={{ height: 100, width: 100, alignSelf: "center" }}
                    source={require("../assets/emojis/friendly.png")}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => ratingHandler("9")}>
                  <Image
                    style={{ height: 100, width: 100, alignSelf: "center" }}
                    source={require("../assets/emojis/sickness.png")}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>
          </ScrollView>
        </Modal>
      </>

      <View style={externalStyle.footer}>
        <ImageBackground
          source={require("../assets/bluecircle.png")}
          style={{ width: 100, height: 100, left: 155, top: 0 }}
        >
          <TouchableOpacity
            onPress={() => {
              addedMovieList = getAdded.concat(addedMovieList);
              navigation.navigate("LibraryHome");
            }}
          >
            <Image
              style={{ width: 80, height: 80, left: 10, top: 10 }}
              source={image}
            />
            <Text
              style={{
                color: "white",
                fontFamily: "MarkerFelt-Thin",
                fontSize: 31,
                right: 160,
                bottom: 50,
              }}
            >
              Movies
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}
export { addedMovieList };
export { userRating };
