import { StackScreenProps } from "@react-navigation/stack";
import { Text, View } from "react-native";

type RootStackParamList = {
  SettingsList: undefined;
  About: { title: string };
};

type Props = StackScreenProps<RootStackParamList, "About">;

const AboutScreen = ({ navigation, route }: Props) => {
  const { title } = route.params;

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default AboutScreen;
