import { Text, View, Image } from "react-native";
import Login from "../components/Screens/Login"
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";

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
      <View>
        
        {/* Sign In Component */}
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        
        {/* Sign Out Component */}
        <SignedOut>
          <Login/>
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}
