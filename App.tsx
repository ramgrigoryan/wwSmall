import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import SettingsScreen from "./screens/SettingsScreen";
import UserProfileScreen from "./screens/UserProfileScreen/index";
import RecordStack from "./Stacks/RecordStack";

const Drawer = createDrawerNavigator();

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen
        name="User Profile"
        component={UserProfileScreen}
        key={Math.random()}
        options={{
          drawerItemStyle: {
            width: 90,
            height: 90,
            backgroundColor: "rgb(155, 199, 231)",
            borderRadius: 100,
            justifyContent: "center",
          },
          drawerLabelStyle: {
            width: 90,
          },
        }}
      />
      <Drawer.Screen
        name="RecordStack"
        component={RecordStack}
        options={{ title: "Records" }}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default App;
