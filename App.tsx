import * as Linking from "expo-linking";
import { LogBox, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/navigation/Router";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
LogBox.ignoreAllLogs();

const prefix = Linking.createURL("/");
const universal = Linking.createURL("http://getir.example.com");

export default function App() {
  const linking = {
    prefixes: [prefix, universal],
    config: {
      screens: {
        Sohbet: {
          screens: {
            CartScreen: {
              path: "cartScreen/:message",
              parse: {
                message: (message: string) => `${message}`,
              },
            },
          },
        },
      },
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
