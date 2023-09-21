import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import RecordCard from "../../components/RecordCard";
import { useState } from "react";
import RecordDetailsModal from "../RecordDetailsModal";
import { records } from "../../data/mockdata";

export type RecordStackParamList = {
  Records: undefined;
  RecordDetails: { transactionId: string };
};

type RecordsScreenProps = StackScreenProps<RecordStackParamList, "Records">;

const RecordsScreen = ({ navigation }: RecordsScreenProps) => {
  const [recordDetailsModalVisible, setRecordDetailsModalVisible] =
    useState(false);

  const [activeTransactionId, setActiveTransactionId] = useState("");

  const onActiveTransactionSelect = (transactionId: string) => {
    setActiveTransactionId(transactionId);
    setRecordDetailsModalVisible(true);
  };

  const onModalClose = () => {
    setRecordDetailsModalVisible(false);
  };

  return (
    <View style={styles.recordView}>
      <RecordDetailsModal
        recordDetailsModalVisible={recordDetailsModalVisible}
        onModalClose={onModalClose}
        activeTransaction={
          records.find(
            ({ transactionId }) => transactionId === activeTransactionId
          )!
        }
      />
      <FlatList
        data={records}
        keyExtractor={({ transactionId }) => transactionId}
        renderItem={({ item }) => (
          <RecordCard
            record={item}
            navigation={navigation}
            onActiveTransactionSelect={onActiveTransactionSelect}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recordView: {
    paddingVertical: 30,
    paddingHorizontal: 5,
  },
});

export default RecordsScreen;
