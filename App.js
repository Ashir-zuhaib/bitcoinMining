import React,{useState, useEffect} from "react";
import {View, useColorScheme} from 'react-native'
import { EventRegister } from "react-native-event-listeners";
import themeContext from "./utils/themeContext";
import { theme } from "./utils/theme";
import { NavigationContainer, DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import MyTabs from "./Routes/TabNavigator.js";
import StartStack from "./Routes/StartStack";
import StartScreen from "./Screen/StartScreen";

const App = ()=>{
  const [isEnabled, setIsEnabled] = useState(false)
  useEffect(()=>{
    let eventListner = EventRegister.addEventListener("changeTheme",
     (data)=>{
      setIsEnabled(data);
      console.log(isEnabled)
    });

    return()=>{
      EventRegister.removeEventListener(eventListner)
    }
  })
  // const scheme = useColorScheme();
  return(
    <themeContext.Provider value={isEnabled === true ? theme.dark : theme.light}>
    <NavigationContainer theme={isEnabled=== true ? DarkTheme:DefaultTheme}>
      {/* <MyTabs /> */}
      <StartStack />
      {/* <StartScreen /> */}
      {/* <Miners /> */}
    </NavigationContainer>
    </themeContext.Provider>
  )
}
export default App