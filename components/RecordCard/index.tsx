import { StackNavigationProp } from "@react-navigation/stack";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Record, RecordStackParamList } from "../../screens/RecordsScreen";
import { MaterialIcons } from "@expo/vector-icons";

type RecordCardParams = {
  navigation: StackNavigationProp<RecordStackParamList, "Records", undefined>;
  record: Record;
  onActiveTransactionSelect: (transactionId: string) => void;
};

const WALLET_ICON = {
  1: "face",
  2: "house",
  3: "print",
  4: "phone-iphone",
};

const AMOUNT_COLOR = {
  transfer: "red",
  expense: "red",
  income: "#43e86f",
};

const RecordCard = ({
  navigation,
  record,
  onActiveTransactionSelect,
}: RecordCardParams) => {
  const { transactionId, walletId, recordType, amount, currency, tags } =
    record;
  return (
    <Pressable onPress={() => onActiveTransactionSelect(transactionId)}>
      <View key={transactionId} style={styles.recordCard}>
        <View style={styles.recordHeaderContainer}>
          <Text style={styles.walletTitle}>
            <MaterialIcons name={WALLET_ICON[walletId]} /> WalletID: {walletId}
          </Text>
          <Text
            style={{
              ...styles.amountStyle,
              color: AMOUNT_COLOR[recordType],
            }}
          >
            {recordType !== "income" && "-"}
            {amount} {currency}
          </Text>
        </View>
        <Text style={styles.tagsStyle}>{tags.join(", ")}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  recordView: {
    paddingVertical: 30,
    paddingHorizontal: 5,
  },
  recordCard: {
    backgroundColor: "#1777C7",
    borderRadius: 8,
    padding: 8,
    margin: 5,
    borderWidth: 1,
  },
  amountStyle: {
    padding: 4,
    backgroundColor: "rgba(51,51,51,0.78)",
    borderRadius: 5,
  },
  tagsStyle: {
    fontStyle: "italic",
    color: "#FFF",
  },
  walletTitle: {
    fontWeight: "bold",
  },
  recordHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default RecordCard;
