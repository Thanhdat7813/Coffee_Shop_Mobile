import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";

// 👉 lấy data từ file của bạn
import products from "../data";

const CoffeeHomeScreen = ({ navigation }) => {
  const [activeCat, setActiveCat] = useState("All Coffee");

  const categories = ["All Coffee", "Machiato", "Latte", "Americano"];

  const filteredProducts =
    activeCat === "All Coffee"
      ? products
      : products.filter((item) => item.category === activeCat);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      <Image source={item.img} style={styles.image} />

      <View style={styles.ratingBox}>
        <Text style={styles.ratingText}>⭐ {item.rating}</Text>
      </View>

      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.desc}>{item.desc}</Text>

      <View style={styles.priceRow}>
        <Text style={styles.price}>${item.price}</Text>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={{ color: "#fff", fontSize: 18 }}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER (ĐEN) */}
        <View style={styles.header}>
          <View>
            <Text style={styles.location}>Location</Text>
            <Text style={styles.city}>Bilzen, Tanjungbalai ▼</Text>
          </View>

          {/* SEARCH */}
          <View style={styles.searchBar}>
            <TextInput
              placeholder="Search coffee"
              placeholderTextColor="#aaa"
              style={styles.input}
            />

            <TouchableOpacity style={styles.filterBtn}>
              <Text style={{ color: "#fff", fontSize: 16 }}>⚙</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* PROMO BANNER (GIỐNG FIGMA) */}
        <View style={styles.banner}>
          {/* Promo badge */}
          <Text style={styles.promoBadge}>Promo</Text>

          {/* Text highlight */}
          <View style={styles.bannerTextBox}>
            <Text style={styles.bannerText}>Buy one get{"\n"}one FREE</Text>
          </View>

          {/* Icon tim trang trí */}
          <Text style={styles.heart1}>🤎</Text>
          <Text style={styles.heart2}>🤎</Text>
          <Text style={styles.heart3}>🤎</Text>

          {/* Coffee image bên phải */}
          <Image
            source={require("../assets/Banner1.png")} // <-- THAY ẢNH LY CÀ PHÊ Ở ĐÂY
            style={styles.bannerImage}
          />
        </View>

        {/* CATEGORY */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryRow}
        >
          {categories.map((cat, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.cat, activeCat === cat && styles.activeCat]}
              onPress={() => setActiveCat(cat)}
            >
              <Text
                style={{
                  color: activeCat === cat ? "#fff" : "#000",
                  fontWeight: "600"
                }}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* PRODUCTS */}
        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          scrollEnabled={false}
          contentContainerStyle={{ padding: 15, paddingBottom: 120 }}
        />
      </ScrollView>

      {/* NAVBAR */}
      <View style={styles.navbar}>
        <NavItem label="Home" icon="🏠" active />
        <NavItem label="Favourite" icon="❤️" />
        <NavItem label="Cart" icon="🛍" />
        <NavItem label="Notify" icon="🔔" />
      </View>
    </View>
  );
};

const NavItem = ({ label, icon, active }) => (
  <View style={styles.navItem}>
    <Text style={{ color: active ? "#c47a4c" : "#000" }}>{icon}</Text>
    <Text style={{ fontSize: 12, color: active ? "#c47a4c" : "#000" }}>
      {label}
    </Text>
  </View>
);

export default CoffeeHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },

  scrollContent: {
    backgroundColor: "#F5F5F5"
  },

  // HEADER ĐEN
  header: {
    padding: 20,
    backgroundColor: "#0C0F14"
  },

  location: {
    color: "#aaa",
    fontSize: 14
  },

  city: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },

  searchBar: {
    flexDirection: "row",
    marginTop: 15,
    gap: 10
  },

  input: {
    flex: 1,
    backgroundColor: "#141921",
    color: "#fff",
    padding: 12,
    borderRadius: 12
  },

  filterBtn: {
    backgroundColor: "#c47a4c",
    width: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center"
  },

  // BANNER PROMO
  banner: {
    width: "92%",
    alignSelf: "center",
    marginTop: 15,
    height: 140,
    backgroundColor: "#A67C5B",
    borderRadius: 22,
    overflow: "hidden",
    padding: 15,
    position: "relative",
    justifyContent: "center"
  },

  promoBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#E74C3C",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
    zIndex: 5
  },

  bannerTextBox: {
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    width: "70%",
    zIndex: 5
  },

  bannerText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 32
  },

  bannerImage: {
    position: "absolute",
    right: -20,
    top: -10,
    width: 170,
    height: 170,
    resizeMode: "contain",
    zIndex: 2
  },

  heart1: {
    position: "absolute",
    right: 95,
    top: 20,
    fontSize: 16,
    zIndex: 4
  },

  heart2: {
    position: "absolute",
    right: 40,
    bottom: 25,
    fontSize: 18,
    zIndex: 4
  },

  heart3: {
    position: "absolute",
    right: 70,
    top: 70,
    fontSize: 14,
    zIndex: 4
  },

  // CATEGORY
  categoryRow: {
    paddingHorizontal: 15,
    marginTop: 10
  },

  cat: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#eee",
    marginRight: 10,
    marginTop: 15
  },

  activeCat: {
    backgroundColor: "#c47a4c"
  },

  // CARD PRODUCT
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    margin: 6,
    flex: 1,
    elevation: 2
  },

  image: {
    width: "100%",
    height: 110,
    borderRadius: 15,
    resizeMode: "cover"
  },

  ratingBox: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10
  },

  ratingText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold"
  },

  title: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 15,
    color: "#111"
  },

  desc: {
    fontSize: 12,
    color: "#777",
    marginTop: 2
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center"
  },

  price: {
    fontWeight: "bold",
    color: "#111",
    fontSize: 15
  },

  addBtn: {
    backgroundColor: "#c47a4c",
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  // NAVBAR
  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#ddd"
  },

  navItem: {
    alignItems: "center"
  }
});