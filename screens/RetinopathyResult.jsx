import React from "react";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";

export default function RetinopathyResult({ route, navigation }) {
  const { prediction, responseData } = route.params;

  const isPositive = prediction === 1;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Text style={styles.heading}>Retinopathy Prediction Result</Text>
      <Text style={styles.predictionText}>
        Prediction: {isPositive ? "Positive" : "Negative"}
      </Text>
      {responseData && (
        <View style={styles.responseDataContainer}>
          <Text style={styles.subheading}>Input Data:</Text>
          {Object.entries(responseData).map(([key, value]) => (
            <Text key={key} style={styles.dataItem}>
              {key}: {Array.isArray(value) ? value[0] : value}
            </Text>
          ))}
        </View>
      )}

      {isPositive ? (
        <Button
          title="find immediate retinopathy clinic"
          onPress={() => navigation.navigate("Locations")}
        />
      ) : (
        <Button
          title="Go to health tips page "
          onPress={() => navigation.navigate("RetinopathyInfo")}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  predictionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  responseDataContainer: {
    width: "100%",
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dataItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});
