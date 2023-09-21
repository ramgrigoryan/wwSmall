import { createStackNavigator } from "@react-navigation/stack";
import RecordsScreen from "../../screens/RecordsScreen";

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
  </Stack.Navigator>
);

export default RecordStack;
