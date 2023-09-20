import { createStackNavigator } from "@react-navigation/stack";
import RecordsScreen from "../../screens/RecordsScreen";
import RecordDetails from "../../screens/RecordDetails";

type RecordStackParamList = {
  Records: undefined;
  RecordDetails: { transactionId: string };
};

const Stack = createStackNavigator<RecordStackParamList>();

const RecordStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Records"
      component={RecordsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="RecordDetails" component={RecordDetails} />
  </Stack.Navigator>
);

export default RecordStack;
