import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
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
  const [allRecords, setAllRecords] = useState(records);
  const [userTags, setUserTags] = useState(
    records.reduce((prevValue, { tags }) => {
      return prevValue.concat(tags);
    }, [] as string[])
  );

  useEffect(() => {
    const uniqueTags: string[] = [];

    userTags.forEach(
      (tag) => !uniqueTags.includes(tag) && uniqueTags.push(tag)
    );
    setUserTags(uniqueTags);
  }, [JSON.stringify(userTags)]);

  const onActiveTransactionSelect = (activeTransactionId: string) => {
    navigation.navigate("RecordDetails", {
      activeTransaction: allRecords.find(
        ({ transactionId }) => transactionId === activeTransactionId
      ),
    });
  };

  const [isRecordCreateFormModalVisible, setIsRecordCreateFormModalVisible] =
    useState(false);

  const addNewRecord = (newRecord: Record) => {
    setAllRecords([...allRecords, newRecord]);
  };

  const addUserTag = (newTag: string) => {
    if (userTags.includes(newTag)) return;
    setUserTags([...userTags, newTag]);
  };

  const onRecordCreateFormClose = () => {
    setIsRecordCreateFormModalVisible(false);
  };

  return (
    <View style={styles.recordView}>
      <FlatList
        data={allRecords}
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
        wallets={records.map(({ walletId }) => walletId)}
        userTags={userTags}
        addUserTag={addUserTag}
        addNewRecord={addNewRecord}
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
