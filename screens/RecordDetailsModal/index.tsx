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
          {recordType} : {amount}
          {currency}
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
});

export default RecordDetailsModal;
