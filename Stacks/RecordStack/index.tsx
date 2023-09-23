import { createStackNavigator } from "@react-navigation/stack";
import RecordsScreen from "../../screens/RecordsScreen";
import RecordDetailsScreen from "../../screens/RecordDetailsScreen";

type RecordStackParamList = {
  Records: undefined;
  RecordDetails: { transactionId: string };
};

const Stack = createStackNavigator<RecordStackParamList>();

const RecordStack = () => (
  <Stack.Navigator screenOptions={{}}>
    <Stack.Screen
      name="Records"
      component={RecordsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RecordDetails"
      component={RecordDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default RecordStack;
