import { StyleSheet, Text, View, Image } from "react-native";
import Login from "../components/Screens/Login"
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "../components/navigation/TabNavigation";

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function Index() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey="pk_test_cGxlYXNlZC1qYWd1YXItNjguY2xlcmsuYWNjb3VudHMuZGV2JA">
      
        <View style={styles.container}>
          
          {/* Sign In Component */}
          <SignedIn>
            <NavigationContainer independent={true}>
              <TabNavigation/>
            </NavigationContainer>
          </SignedIn>
          
          {/* Sign Out Component */}
          <SignedOut>
            <Login/>
          </SignedOut>
        </View>
      
    </ClerkProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});