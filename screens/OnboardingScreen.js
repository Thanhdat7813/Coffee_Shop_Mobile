import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";

const OnboardingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/coffee.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        
        <View>
          <Text style={styles.title}>
            Fall in Love with{"\n"}Coffee Blissful Delight!
          </Text>

          <Text style={styles.desc}>
            Welcome to our cozy coffee corner, where every cup is a delightful for you.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end"
  },

  overlay: {
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.6)"
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 36
  },

  desc: {
    marginTop: 10,
    color: "#ccc",
    fontSize: 14
  },

  button: {
    marginTop: 20,
    backgroundColor: "#c47a4c",
    padding: 15,
    borderRadius: 30,
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});