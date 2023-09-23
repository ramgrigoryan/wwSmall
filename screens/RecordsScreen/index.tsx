import { FlatList, StyleSheet, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import RecordCard from "../../components/RecordCard";
import { Record, records } from "../../data/mockData";

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
