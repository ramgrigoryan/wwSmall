import { StackScreenProps } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AboutScreen from "../AboutScreen";

type RootStackParamList = {
  SettingsList: undefined;
  About: { title: string };
};

const Stack = createStackNavigator<RootStackParamList>();

type Props = StackScreenProps<RootStackParamList, "SettingsList">;

const settingsList: string[] = [
  "Wallets",
  "Dashboard",
  "Statistics",
  "Tags",
  "Notification",
  "Insights",
  "Settings",
  "Terms & conditions",
  "Privacy policy",
];

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "grey" },
        headerTintColor: "#EEE",
      }}
      initialRouteName="SettingsList"
    >
      <Stack.Screen
        name="SettingsList"
        component={SettingsScreen}
        options={{
          title: "Settings List",
          headerShown: false,
        }}
      />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

const SettingsScreen = ({ navigation }: Props) => {
  const onPress = (item: string) => {
    navigation.navigate("About", { title: item });
  };
  return (
    <View style={styles.settingsContainer}>
      <FlatList
        keyExtractor={(item) => item}
        data={settingsList}
        renderItem={({ item }) => (
          <Pressable
            android_ripple={{ color: "black" }}
            onPress={() => onPress(item)}
          >
            <View style={styles.settingsListItem}>
              <Text>
                <AntDesign name="tool" size={18} color="black" /> {item}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    paddingVertical: 50,
    paddingHorizontal: 5,
  },
  settingsListItem: {
    padding: 20,
    backgroundColor: "#EEEEF5",
    margin: 5,
    borderRadius: 20,
  },
});

export default MyStack;
