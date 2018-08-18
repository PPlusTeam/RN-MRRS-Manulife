import React from "react";
import {
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableWithoutFeedback
} from "react-native";
var this_point = 0;
var this_mode = "EN";
var change_screen;
var this_round = 1;
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path_background: require("../src/background.png"),
      path_image: require("../src/Details/Q1/detail1.png")
    };
  }

  componentWillMount = () => {
    const { params } = this.props.navigation.state;
    const mround = params ? params.round : null;
    const mode = params ? params.mode : null;
    const point = params ? params.point : null;

    if (mode === "VN") {
      this._vnDetail(mround);
    } else {
      this._enDetail(mround);
    }

    if (mround != null) {
      this_round = mround;
    } else {
    }

    if (mode != null) {
      this_mode = mode;
    } else {
    }

    if (point != null) {
      this_point = point;
    } else {
    }
  };
  _vnDetail(mround) {
    const { goBack } = this.props.navigation;

    switch (mround) {
      case 1: {
        this.setState({
          path_image: require("../src/Details/Q1/chitiet1.png")
        });
        change_screen = setTimeout(() => {
          goBack();
        }, 10000);
        break;
      }
      case 2: {
        this.setState({
          path_image: require("../src/Details/Q2/chitiet2.png")
        });
        change_screen = setTimeout(() => {
          goBack();
        }, 10000);
        break;
      }
      case 3: {
        this.setState({
          path_image: require("../src/Details/Q3/chitiet3.png")
        });
        change_screen = setTimeout(() => {
          this._calculatorMode();
        }, 10000);
        break;
      }
    }
  }
  _enDetail(mround) {
    const { goBack } = this.props.navigation;

    switch (mround) {
      case 1: {
        this.setState({
          path_image: require("../src/Details/Q1/detail1.png")
        });
        change_screen=   setTimeout(() => {
          goBack();
        }, 10000);
        break;
      }
      case 2: {
        this.setState({
          path_image: require("../src/Details/Q2/detail2.png")
          // path_background : require ("../src/Details/EN/q2.jpg"),
        });
        change_screen = setTimeout(() => {
          goBack();
        }, 10000);
        break;
      }
      case 3: {
        this.setState({
          path_image: require("../src/Details/Q3/detail3.png")
        });

        change_screen= setTimeout(() => {
          this._calculatorMode();
        }, 10000);

        break;
      }
    }
  }

  _handlePress() {
    const { goBack } = this.props.navigation;
    clearTimeout(change_screen);
    if (this_round === 3) {
      this._calculatorMode();
    } else if(this_round < 3) {
      goBack();
    }

  }
  _calculatorMode() {
    // alert("Point "+this_point)
    if (this_point == 1|| this_point == 2 || this_point == 3) {
      this.props.navigation.navigate("Heart", {
        mode: this_mode,
        heart: "Heart"
      });
    } else if (this_point == 4 || this_point == 5 || this_point == 6) {
      this.props.navigation.navigate("Heart", {
        mode: this_mode,
        heart: "Young"
      });
    } else if (this_point > 6) {
      this.props.navigation.navigate("Heart", {
        mode: this_mode,
        heart: "Strong"
      });
    }
      //  alert("Point2 "+this_point);

    //    point = 0;
    //    this_mode = "EN";
  }

  componentWillUnMount() {
    this.clearTimeout(change_screen);
  }
  render() {
    return (
      <ImageBackground
        // resizeMode ="contain"
        source={this.state.path_background}
        style={styles.container}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            this._handlePress();
          }}
        >
          <Image
            resizeMode="contain"
            style={styles.image}
            source={this.state.path_image}
          />
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    width: width * 0.9
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});
