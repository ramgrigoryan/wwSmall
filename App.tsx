import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import SettingsScreen from "./screens/SettingsScreen";
import NewScreen from "./screens/NewScreen";

const Drawer = createDrawerNavigator();

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        header: ({ navigation }) => (
          <MaterialIcons
            onPress={() => navigation.toggleDrawer()}
            name="menu"
            size={30}
            style={{
              position: "absolute",
              top: 40,
              right: 20,
            }}
          />
        ),
      }}
    >
      <Drawer.Screen name="Home" component={SettingsScreen} />
      <Drawer.Screen name="New" component={NewScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default App;
