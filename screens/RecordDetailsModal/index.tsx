import { MaterialIcons } from "@expo/vector-icons";
import { Modal, StyleSheet, Text, View } from "react-native";
import { Record } from "../../data/mockdata";

type RecordDetailsModalProps = {
  recordDetailsModalVisible: boolean;
  onModalClose: () => void;
  activeTransaction: Record;
};

const RecordDetailsModal = ({
  recordDetailsModalVisible,
  onModalClose,
  activeTransaction,
}: RecordDetailsModalProps) => {
  if (!activeTransaction) return null;
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
    <Modal
      visible={recordDetailsModalVisible}
      style={styles.modal}
      animationType="fade"
    >
      <MaterialIcons name="close" size={40} onPress={() => onModalClose()} />
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
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
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

export default RecordDetailsModal;
