import { createStackNavigator } from "react-navigation";

import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Main from "./components/Main";
import ChooseMode from "./components/ChooseMode";
import ChooseLanguage from "./components/ChooseLanguage";
import ChooseHeart from "./components/ChooseHeart";
import Heart from "./components/Heart";
import Detail from "./components/Detail";
import ViewCode from "./components/ViewCode";

const main_stack = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
   
    Language: {
      screen: ChooseLanguage,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Main: {
      screen: Main,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
  
    
    ViewCode: {
      screen: ViewCode,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Heart: {
      screen: Heart,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    

    Detail: {
      screen: Detail,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
   

   
    ChooseHeart: {
      screen: ChooseHeart,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    ChooseMode: {
      screen: ChooseMode,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: "none"
  }
);

export default main_stack;
