import { NavigationContainer } from "@react-navigation/native";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet"
import StackNavigation from "./navigators/stackNavigation";
import { ThemeProvider } from "./context/ThemeProvider";
import { CameraProvider } from "./context/CameraProvider";




function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <CameraProvider>
          <StackNavigation />
        </CameraProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
