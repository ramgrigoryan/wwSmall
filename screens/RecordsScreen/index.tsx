import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";

type Records = {
  walletId: string;
  currency: string;
  recordType: "transfer" | "expense" | "income";
  tags: string[];
  transactionId: string;
  amount: number;
  title?: string;
  date?: string;
  place?: string;
  comment?: string;
  transferDetails?: {
    fromWalletId: string;
    toWalletId: string;
  };
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

const records: Records[] = [
  {
    walletId: "1",
    recordType: "transfer",
    tags: ["finance", "transaction"],
    title: "Bank Transfer",
    amount: 4000,
    currency: "AMD",
    date: "2023-09-21",
    place: "Online",
    comment: "Monthly savings transfer",
    transferDetails: {
      fromWalletId: "1",
      toWalletId: "2",
    },
    transactionId: "7GpXs",
  },
  {
    walletId: "2",
    amount: 2000,
    currency: "AMD",
    recordType: "expense",
    tags: ["food", "restaurant"],
    title: "Dinner at Italian Restaurant",
    date: "2023-09-20",
    place: "Ristorante Bella",
    comment: "Delicious pizza and pasta!",
    transactionId: "D9a40",
  },
  {
    walletId: "1",
    amount: 8000,
    currency: "AMD",
    recordType: "income",
    tags: ["work", "salary"],
    title: "Monthly Salary",
    date: "2023-09-30",
    place: "Office",
    comment: "Received my monthly paycheck",
    transactionId: "Vv8a0",
  },
  {
    walletId: "1",
    currency: "AMD",
    amount: 5400,
    recordType: "expense",
    tags: ["shopping", "clothing"],
    title: "Clothing Shopping",
    date: "2023-09-25",
    place: "Mall",
    comment: "Bought a new wardrobe for the season",
    transactionId: "a1pl7",
  },
  {
    walletId: "4",
    recordType: "transfer",
    tags: ["finance", "transaction"],
    title: "Credit Card Payment",
    amount: 8000,
    currency: "AMD",
    date: "2023-09-15",
    place: "Online",
    comment: "Paid off credit card bill",
    transferDetails: {
      fromWalletId: "4",
      toWalletId: "2",
    },
    transactionId: "v6a14",
  },
  {
    walletId: "2",
    amount: 2500,
    currency: "AMD",
    recordType: "income",
    tags: ["freelance", "payment"],
    title: "Freelance Project Payment",
    date: "2023-09-10",
    place: "Client",
    comment: "Payment for web development project",
    transactionId: "gvRVr",
  },
];

type RecordStackParamList = {
  Records: undefined;
  RecordDetails: { transactionId: string };
};

type RecordsScreenProps = StackScreenProps<RecordStackParamList, "Records">;

const RecordsScreen = ({ navigation }: RecordsScreenProps) => (
  <View style={styles.recordView}>
    <FlatList
      data={records}
      keyExtractor={({ transactionId }) => transactionId}
      renderItem={({ item }) => {
        const { transactionId, walletId, tags, amount, recordType, currency } =
          item;
        return (
          <Pressable
            onPress={() =>
              navigation.navigate("RecordDetails", { transactionId })
            }
          >
            <View key={transactionId} style={styles.recordCard}>
              <View style={styles.recordHeaderContainer}>
                <Text style={styles.walletTitle}>
                  <MaterialIcons name={WALLET_ICON[walletId]} /> WalletID:{" "}
                  {walletId}
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
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  recordView: {
    paddingVertical: 30,
    paddingHorizontal: 5,
  },
  recordCard: {
    backgroundColor: "#18E",
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

export default RecordsScreen;
