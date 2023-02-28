import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { StoriesContainer } from "./container/StoriesContainer";

const App = () => {


  return (

    <SafeAreaView style={styles.container}>
        <ScrollView >
          <View>
            <Text style={styles.title}>Hacker News Stories</Text>
            <View style={{ borderBottomWidth: 1, marginBottom: 16 }}></View>
              <View>
                <StoriesContainer />
              </View>
          </View>
        </ScrollView>
    </SafeAreaView>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;



