import RootStack from './screens/navigators/RootStack';
import { useState } from 'react';
import { ThemeContext }  from "./contexts/ThemeContext";
import Signin from './screens/login/Signin';
import Signup from './screens/login/Signup';

export default function App() {

  const [theme, setTheme] = useState({mode: "light"});

  const updateTheme = (newTheme) => {
    let mode;
    if(!newTheme) {
      mode = theme.mode === "dark" ? "light" : "dark";
      newTheme = {mode};
    }
    setTheme(newTheme);
  };

  return(

      <ThemeContext.Provider value={{ theme, updateTheme }}>
          <RootStack />
      </ThemeContext.Provider>

      // <Stack.Navigator initialRouteName='Sigin'>
      //   <Stack.Screen name='Signup' component={Signup} />
      //   <Stack.Screen name='Signin' component={Signin} />
      // </Stack.Navigator>

  );
  
}


