import React from "react";
import {
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  AsyncStorage,
  TouchableWithoutFeedback
} from "react-native";
var change_screen;

var RNFS = require('react-native-fs');
var path = RNFS.LibraryDirectoryPath + '/InFoUser.txt';
var list = [];
export default class ViewCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path_background: require("../src/background.png"),

      path_title_vn: require("../src/Code/maso.png"),
      path_title_en: require("../src/Code/yourcode.png"),

      path_frame: require("../src/Code/frame.png"),

      user_code: "XXXXX"
    };
  }

  componentWillMount = async () => {
    // var scode = await AsyncStorage.getItem("your_code_is");

    
// // write the file
//     RNFS.writeFile(path, id+JSON.stringify(ans), 'utf8')
//     .then((success) => {
//         console.log('FILE WRITTEN!');
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });

//     if (ans.info.id != null) {
//       this.setState({
//         user_code: ans.info.id
//       });
//     } else {
//       alert("[ERROR : NOT CODE]");
//     }
    change_screen = setTimeout(() => {
      this.props.navigation.navigate("Language");
    }, 10000);
  };

  async _handleDataClient() {
  }

  componentWillUnmount = () => {
    clearTimeout(change_screen);
  };
  render() {
    return (
      <ImageBackground
        source={this.state.path_background}
        style={styles.container}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.navigate("Language");
          }}
        >
          <Image
            resizeMode="contain"
            style={styles.title_vn}
            source={this.state.path_title_vn}
          />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.navigate("Language");
          }}
        >
          <Image
            resizeMode="contain"
            style={styles.title_en}
            source={this.state.path_title_en}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.navigate("Language");
          }}
        >
          <ImageBackground
            style={styles.frame}
            source={this.state.path_frame}
            resizeMode="contain"
          >
            <Text style={styles.txt_code}>{this.state.user_code}</Text>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  frame: {
    width: width * 0.5,
    height: height * 0.3,
    // backgroundColor : "red",
    justifyContent: "center",
    alignItems: "center"
  },
  txt_code: {
    fontSize: height * 0.13
  },
  title_en: {
    height: height * 0.08
  },
  title_vn: {
    height: height * 0.1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
