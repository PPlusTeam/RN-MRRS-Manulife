import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

var this_mode = "EN";
var this_heart = "Heart";
var change_screen;
export default class Heart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path_background: require("../src/background.png"),

      path_heart: require("../src/Heart/love.png"),
      path_strong: require("../src/Heart/strong.png"),
      path_young: require("../src/Heart/young.png"),

      default_path: require("../src/Heart/love.png"),
      txt_congrats: require("../src/Heart/congrats.png"),
      txt_desc: require("../src/Heart/ownloveheart.png")
    };
  }

  componentWillMount = () => {
    const { params } = this.props.navigation.state;

    const mode = params ? params.mode : null;
    const heart = params ? params.heart : null;
    var ans1 = await AsyncStorage.getItem('ans_1');

    var ans2 = await AsyncStorage.getItem("ans_2");

    var ans3 = await AsyncStorage.getItem("ans_3");

    var data_user = await AsyncStorage.getItem("DATA_USER")

    var data_parsed = JSON.parse(data_user);

   
    var ans = {
        info:data_parsed,
        answer : {
            q1 : ans1 ,
            q2 : ans2,
            q3 : ans3
        }
    }

    var id =  ans.info.id;

    // alert("CODE "+JSON.stringify(ans.info.id))
    await AsyncStorage.setItem("Client_"+ id ,JSON.stringify(ans));

    this_mode = mode;
    this_heart = heart;
    this._handleScreen();

    
  };
_handleScreen(){

    if ((this_mode === "VN") & (this_heart === "Heart")) {
        this.setState({
          txt_desc: require("../src/Heart/timyeu.png"),
          txt_congrats: require("../src/Heart/chucmung.png")
        });
      } else if ((this_mode === "VN") & (this_heart === "Strong")) {
        this.setState({
          txt_desc: require("../src/Heart/timkhoe.png"),
          default_path: require("../src/Heart/strong.png"),
          txt_congrats: require("../src/Heart/chucmung.png")
        });
      } else if ((this_mode === "VN") & (this_heart === "Young")) {
        this.setState({
          txt_desc: require("../src/Heart/timtre.png"),
          default_path: require("../src/Heart/young.png"),
          txt_congrats: require("../src/Heart/chucmung.png")
        });
      } else if ((this_mode === "EN") & (this_heart === "Heart")) {
        // this.setState({
        //     txt_desc : require("../src/Heart/timtre.png"),
        //     default_path : require("../src/Heart/young.png"),
        // })
      } else if ((this_mode === "EN") & (this_heart === "Strong")) {
        this.setState({
          txt_desc: require("../src/Heart/ownstrongheart.png"),
          default_path: require("../src/Heart/strong.png")
        });
      } else if ((this_mode === "EN") & (this_heart === "Young")) {
        this.setState({
          txt_desc: require("../src/Heart/ownyoungheart.png"),
          default_path: require("../src/Heart/young.png")
        });
      } else {
        console.log("[ERROR] Null Path");
      }
  
      change_screen = setTimeout(() => {
        this.props.navigation.navigate("Language");
      }, 3000);
}

  render() {
    return (
      <ImageBackground
        source={this.state.path_background}
        style={styles.container}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.navigate("Language");
      clearTimeout(change_screen)

          }}
        >
          <Image
            resizeMode="contain"
            style={styles.title}
            source={this.state.txt_congrats}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.navigate("Language");
            clearTimeout(change_screen)
          }}
        >
          <Image
            resizeMode="contain"
            style={styles.image}
            source={this.state.default_path}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.navigate("Language");
      clearTimeout(change_screen)

          }}
        >
          <Image
            resizeMode="contain"
            style={styles.decs}
            source={this.state.txt_desc}
          />
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  decs: {
    height: "6%"
  },
  image: {
    height: "30%",
    marginTop: 10,
    marginBottom: 10
  },
  title: {
    height: "10%"
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});
