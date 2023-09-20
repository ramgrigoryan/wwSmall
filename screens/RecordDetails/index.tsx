import { StackScreenProps } from "@react-navigation/stack";
import { Text, View } from "react-native";

type RecordStackParamList = {
  Records: undefined;
  RecordDetails: { transactionId: string };
};

type RecordsDetailsProps = StackScreenProps<
  RecordStackParamList,
  "RecordDetails"
>;

const RecordDetails = ({ route }: RecordsDetailsProps) => {
  return (
    <View>
      <Text>{route.params.transactionId}</Text>
    </View>
  );
};

export default RecordDetails;
