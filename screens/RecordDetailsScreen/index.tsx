import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View, BackHandler } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RecordStackParamList } from "../RecordsScreen";
import { useState } from "react";
import RecordCreateFormModal from "../../components/RecordCreateForm";

type RecordDetailsModalProps = StackScreenProps<
  RecordStackParamList,
  "RecordDetails"
>;

const RecordDetailsScreen = ({
  navigation,
  route,
}: RecordDetailsModalProps) => {
  const { activeTransaction } = route.params;

  const [isRecordCreateFormModalVisible, setIsRecordCreateFormModalVisible] =
    useState(false);

  const onRecordCreateFormClose = () => {
    setIsRecordCreateFormModalVisible(false);
  };

  const {
    amount,
    currency,
    recordType,
    tags,
    transactionId,
    walletId,
    comment,
    date,
    place,
    title,
    transferDetails,
  } = activeTransaction;

  return (
    <View style={styles.modal}>
      <RecordCreateFormModal
        isRecordCreateFormModalVisible={isRecordCreateFormModalVisible}
        onRecordCreateFormClose={onRecordCreateFormClose}
      />
      <View>
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
      <Pressable onPress={() => setIsRecordCreateFormModalVisible(true)}>
        <View style={styles.addButton}>
          <Text style={{ fontSize: 35 }}>+</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "space-between",
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
  addButton: {
    marginRight: 10,
    marginBottom: 40,
    alignSelf: "flex-end",
    backgroundColor: "rgba(23, 119, 199, 0.88)",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RecordDetailsScreen;
