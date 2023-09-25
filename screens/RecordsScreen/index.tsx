import { useState } from "react";
import { FlatList, StyleSheet, View, Text, Pressable } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import RecordCard from "../../components/RecordCard";
import { Record, records } from "../../data/mockData";
import RecordCreateFormModal from "../../components/RecordCreateForm";

export type RecordStackParamList = {
  Records: undefined;
  RecordDetails: { activeTransaction: Record };
};

type RecordsScreenProps = StackScreenProps<RecordStackParamList, "Records">;

const RecordsScreen = ({ navigation }: RecordsScreenProps) => {
  const onActiveTransactionSelect = (activeTransactionId: string) => {
    navigation.navigate("RecordDetails", {
      activeTransaction: records.find(
        ({ transactionId }) => transactionId === activeTransactionId
      ),
    });
  };

  const [isRecordCreateFormModalVisible, setIsRecordCreateFormModalVisible] =
    useState(false);

  const onRecordCreateFormClose = () => {
    setIsRecordCreateFormModalVisible(false);
  };

  return (
    <View style={styles.recordView}>
      <FlatList
        data={records}
        keyExtractor={({ transactionId }) => transactionId}
        renderItem={({ item }) => (
          <RecordCard
            record={item}
            onActiveTransactionSelect={onActiveTransactionSelect}
          />
        )}
      />
      <View style={styles.addButton}>
        <AntDesign
          name="plus"
          color="white"
          size={30}
          onPress={() => setIsRecordCreateFormModalVisible(true)}
        />
      </View>
      <RecordCreateFormModal
        isRecordCreateFormModalVisible={isRecordCreateFormModalVisible}
        onRecordCreateFormClose={onRecordCreateFormClose}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recordView: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 5,
  },
  addButton: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    right: 8,
    bottom: 8,
    backgroundColor: "rgba(68, 68, 68, 0.88)",
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default RecordsScreen;
