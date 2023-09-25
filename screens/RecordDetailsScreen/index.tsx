import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RecordStackParamList } from "../RecordsScreen";

type RecordDetailsModalProps = StackScreenProps<
  RecordStackParamList,
  "RecordDetails"
>;

const RecordDetailsScreen = ({
  navigation,
  route,
}: RecordDetailsModalProps) => {
  const { activeTransaction } = route.params;

  const {
    amount,
    currency,
    recordType,
    tags,
    walletId,
    comment,
    date,
    place,
    title,
  } = activeTransaction;

  return (
    <View style={styles.modal}>
      <MaterialIcons
        name="close"
        size={40}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>Wallet: {walletId}</Text>
        <Text>Tags: {tags.join(", ")}</Text>
        <Text>Date: {date}</Text>
        <Text>Comment: {comment}</Text>
        <Text>Place: {place}</Text>
        <Text>
          <Text style={styles.recordType}>{recordType}</Text> :{" "}
          <Text style={{ color: recordType === "income" ? "green" : "red" }}>
            {" "}
            {recordType !== "income" && "-"}
            {amount}
            {currency}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "#EEEEE5",
  },
  detailsContainer: {
    paddingVertical: 40,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  recordType: {
    textTransform: "capitalize",
  },
});

export default RecordDetailsScreen;
