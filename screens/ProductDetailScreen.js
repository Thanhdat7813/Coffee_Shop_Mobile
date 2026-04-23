import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  const [size, setSize] = useState("M");

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>←</Text>
        </TouchableOpacity>

        <Text style={{ fontWeight: "bold" }}>Detail</Text>

        <Text>♡</Text>
      </View>

      {/* IMAGE */}
      <View style={styles.imageBox}>
        <Image source={product.img} style={styles.image} />
      </View>

      {/* INFO */}
      <View style={styles.info}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.sub}>Ice/Hot</Text>

        <Text style={styles.rating}>⭐ 4.8 (230)</Text>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.desc}>
          A cappuccino is approximately 150 ml beverage, with 25 ml of espresso coffee and 85 ml of fresh milk.
        </Text>

        {/* SIZE */}
        <Text style={styles.sectionTitle}>Size</Text>

        <View style={styles.sizeRow}>
          {["S", "M", "L"].map((s) => (
            <TouchableOpacity
              key={s}
              style={[
                styles.sizeBtn,
                size === s && styles.activeSize
              ]}
              onPress={() => setSize(s)}
            >
              <Text style={{ color: size === s ? "#c47a4c" : "#000" }}>
                {s}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* BOTTOM */}
      <View style={styles.bottom}>
        <Text style={styles.price}>${product.price}</Text>

        <TouchableOpacity style={styles.buyBtn}>
          <Text style={{ color: "#fff" }}>Buy Now</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15
  },

  imageBox: {
    paddingHorizontal: 15
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    resizeMode: "cover"
  },

  info: {
    padding: 15
  },

  title: {
    fontSize: 20,
    fontWeight: "bold"
  },

  sub: {
    color: "gray",
    marginBottom: 10
  },

  rating: {
    color: "#f4b400",
    marginVertical: 10
  },

  sectionTitle: {
    fontWeight: "bold",
    marginTop: 10
  },

  desc: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20
  },

  sizeRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10
  },

  sizeBtn: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center"
  },

  activeSize: {
    borderColor: "#c47a4c"
  },

  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff"
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#c47a4c"
  },

  buyBtn: {
    backgroundColor: "#c47a4c",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25
  }
});