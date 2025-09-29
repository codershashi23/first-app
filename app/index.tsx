import React from "react";
import { SafeAreaView, View, Image, ScrollView,TouchableOpacity, StyleSheet, Dimensions,Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window"); 
const IMAGE_GAP = 20;

export default function App() {
  const imageWidth = (width - 64) / 3; 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>
        <Image
          source={{ uri: "https://tse1.mm.bing.net/th/id/OIP.fM_UuCIO_1vfrkkEik3dEQHaHl?pid=Api&P=0&h=180" }}
          style={styles.profileImage}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View>
        <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign:"center" }}>Saved</Text>
      </View>
        <View style={styles.card}>
          <View style={styles.imageRow}>
            <Image
              source={{ uri: "https://tse2.mm.bing.net/th/id/OIP.bvkj89GiudVZowyVV16lDwHaEo?pid=Api&P=0&h=180" }}
              style={[styles.cardImage, { width: imageWidth }]}
            />
            <Image
              source={{ uri: "https://tse2.mm.bing.net/th/id/OIF.1Tl1H1exAB3i5wZ5T54nqw?pid=Api&P=0&h=180" }}
              style={[styles.cardImage, { width: imageWidth, marginLeft: IMAGE_GAP }]}
            />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.imageRow}>
            <Image
              source={{ uri: "https://tse4.mm.bing.net/th/id/OIF.t7EXZtWOIz9stMJsE0vb4A?pid=Api&P=0&h=180" }}
              style={[styles.cardImage, { width: width - 64 }]} 
            />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.imageRow}>
            <Image
              source={{ uri: "https://tse2.mm.bing.net/th/id/OIP.JwSNVh-fSAemjr_1yTUfrgHaIw?pid=Api&P=0&h=180" }}
              style={[styles.cardImage, { width: imageWidth }]}
            />
            <Image
              source={{ uri: "https://tse2.mm.bing.net/th/id/OIP.LQDkdotztfzJnjD5-lj8QAHaJQ?pid=Api&P=0&h=180" }}
              style={[styles.cardImage, { width: imageWidth, marginLeft: IMAGE_GAP }]}
            />
            <Image
              source={{ uri: "https://tse1.mm.bing.net/th/id/OIP.xKiE_jUn8tPueoLWXsyCPgHaEo?pid=Api&P=0&h=180" }}
              style={[styles.cardImage, { width: imageWidth, marginLeft: IMAGE_GAP }]}
            />
          </View>
        </View>


  <View style={styles.card}>
          <View style={styles.imageRow}>
            <Image
              source={{ uri: "https://tse2.mm.bing.net/th/id/OIP.bvkj89GiudVZowyVV16lDwHaEo?pid=Api&P=0&h=180" }}
              style={[styles.cardImage, { width: imageWidth }]}
            />
            <Image
              source={{ uri: "https://tse2.mm.bing.net/th/id/OIF.1Tl1H1exAB3i5wZ5T54nqw?pid=Api&P=0&h=180" }}
              style={[styles.cardImage, { width: imageWidth, marginLeft: IMAGE_GAP }]}
            />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.imageRow}>
            <Image
              source={{ uri: "https://tse2.mm.bing.net/th/id/OIP.by-Iwmj74kNix7i-VtlXIgAAAA?pid=Api&P=0&h=180" }}
              style={[styles.cardImage, { width: width - 64 }]} 
            />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.imageRow}>
            <Image
              source={{ uri: "https://tse1.mm.bing.net/th/id/OIP.3g2Z_83OIhsq_CI-LXDFBgHaFj?pid=Api&P=0&h=180" }}
              style={[styles.cardImage, { width: imageWidth }]}
            />
            <Image
              source={{ uri: "https://th.bing.com/th/id/OIP.Gl4ljE15kViH7AUSWfddLwHaEJ?w=287&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }}
              style={[styles.cardImage, { width: imageWidth, marginLeft: IMAGE_GAP }]}
            />
            <Image
              source={{ uri: "https://tse2.mm.bing.net/th/id/OIP.IxGC6Q9CWRAHIakTf8Y1PAHaFj?pid=Api&P=0&h=180" }}
              style={[styles.cardImage, { width: imageWidth, marginLeft: IMAGE_GAP }]}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#fff",
    elevation: 2,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  scrollContent: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  imageRow: {
    flexDirection: "row",
    marginBottom: 16,
    flexWrap: "nowrap", // ensures images stay in one row
  },
  cardImage: {
    height: 200,
    borderRadius: 16,
  },
});