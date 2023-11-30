import { NavigationContainer } from "@react-navigation/native";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet"
import StackNavigation from "./navigators/stackNavigation";
import { ThemeProvider } from "./context/ThemeProvider";




function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <StackNavigation />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
