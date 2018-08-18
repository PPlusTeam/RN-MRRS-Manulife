import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
var this_mode = "EN"
export default class YourHeart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path_background: require("../src/background.png"),
      path_questions: require("../src/ChooseMode/questions.png"),

      path_yes: require("../src/ChooseMode/yes_button.png"),
      path_no: require("../src/ChooseMode/no_button.png"),

      path_des : require("../src/ChooseMode/note.png")
    };
  }
  componentWillMount = () => {
    const {params} = this.props.navigation.state;

    const mode = params ? params.mode : null;

    this_mode = mode

    if(mode === "VN"){
        this.setState({
            path_questions: require("../src/ChooseMode/cauhoi.png"),
            path_yes: require("../src/ChooseMode/co_button.png"),
            path_no: require("../src/ChooseMode/khong_button.png"),
            path_des : require("../src/ChooseMode/ghichu.png")

        })
    }
  };
  _handleChooseMode = (mode)=>{

    if(mode === "play_game"){
        this.props.navigation.navigate("Main",{
            mode : this_mode
        });
    }else{
        this.props.navigation.navigate("ChooseHeart",{
            mode : this_mode
        })
    }

  }
  render() {
    return (
      <ImageBackground
        source={this.state.path_background}
        style={styles.container}
      >
        <Image
          resizeMode="contain"
          source={this.state.path_questions}
          style={styles.question}
        />
        {/* View Button */}
        <View style={styles.view_button}>
          <TouchableOpacity onPress = {()=>{this._handleChooseMode("Know")}}>
            <ImageBackground
              resizeMode="contain"
              source={this.state.path_yes}
              style={styles.button}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this._handleChooseMode("play_game")}}>
            <ImageBackground
              resizeMode="contain"
              source={this.state.path_no}
              style={styles.button}
            />
          </TouchableOpacity>
        </View>
        {/* View Under */}
        <View style={styles.view_under}>
            <View style={styles.view_under_cl1}></View>
            <View style={styles.view_under_cl2}>
            <ImageBackground
                style={styles.image_under}
                source={this.state.path_des}
                resizeMode="contain"
            />
            </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    image_under:{
        height : "70%",
        // width : "50%",
    },
    view_under_cl1:{
        height : "100%",
        width : "50%",
        // backgroundColor : "blue"
    },
    view_under_cl2:{
        height : "100%",
        width : "50%",
        // backgroundColor : "green",
        justifyContent:'center',
    },
  button: {
    height: "100%",
    width: 100,
    // backgroundColor: "blue",
    borderRadius: 100 / 2
  },
  view_button: {
    height: 50,
    width: "60%",
    // backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10
  },
  view_under: {
    height: 60,
    width: "75%",
    // backgroundColor: "pink",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop : -12
    
  },
  question: {
    height: 18,
    marginTop : 20
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
