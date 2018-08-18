import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
  Alert,
  Image,
  ImageBackground,
  AsyncStorage,
  Platform
} from "react-native";
import dismissKeyboard from "react-native/Libraries/Utilities/dismissKeyboard";

var user_info = {};
var language = "EN";
const keyboardVerticalOffset = Platform.OS === "ios" ? -275 : 0;
const { width, height } = Dimensions.get("window");

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path_background: require("../src/background.png"),

      full_name: require("../src/Login/fullname.png"),
      hoten: require("../src/Login/hoten.png"),
      start: require("../src/Login/startbutton.png"),
      batdau: require("../src/Login/batdau.png"),
      phonenumber: require("../src/Login/numberphone.png"),
      sdt: require("../src/Login/sdt.png"),
      emptybar: require("../src/Login/emptybar.png"),

      title: "Welcome",
      label_name: "Name",
      label_phone: "Phone",
      label_email: "Email",
      name: "",
      email: "",
      phone: "",
      notification: "",
      type_name: "Please type your name !",
      type_phone: "Please type your phone !",
      type_email: "Please type your phone !",
      check_phone: "Please check your phone number again !",
      check_email: "Please check your email address again !",

      txt_button: "Submit"
    };
  }
  componentWillMount = () => {
    var { params } = this.props.navigation.state;
    var mode = params ? params.mode : null;
    // alert("MODE "+mode)

    if (mode === "VN") {
      language = "VN";
      this.setState({
        type_name: "Vui lòng nhập tên !",
        type_phone: "Vui lòng nhập số điện thoại !",
        type_email: "Vui lòng nhập địa chỉ email !",
        check_phone: "Vui lòng kiểm tra lại số điện thoại!",
        check_email: "Vui lòng kiểm tra lại địa chỉ email !",

        full_name: require("../src/Login/hoten.png"),
        start: require("../src/Login/batdau.png"),
        phonenumber: require("../src/Login/sdt.png")
      });
    } else {
      language = "EN";

      this.setState({
        type_name: "Please type your name !",
        type_phone: "Please type your phone !",
        type_email: "Please type your phone !",
        check_phone: "Please check your phone number again !",
        check_email: "Please check your email address again !",

        full_name: require("../src/Login/fullname.png"),
        start: require("../src/Login/startbutton.png"),
        phonenumber: require("../src/Login/numberphone.png")
      });
    }
  };
  //   Function Get Data
  _getData = () => {
    // Validate Email format
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //Check Data Null
    if (this.state.name == "") {
      Alert.alert(this.state.notification, this.state.type_name);
    } else if (this.state.phone == "") {
      Alert.alert(this.state.notification, this.state.type_phone);
    } else {
      //Check Phone number
      if (this._check_phone_number(this.state.phone)) {
        Alert.alert(this.state.notification, this.state.check_phone);
      } else {
        // Storage data
        this._handleStorage();
        //
      }
    }
  };
  _handleStorage = async () => {
    try {
      //Get Id
      var get_count = await AsyncStorage.getItem("count");

      if (get_count == null) {
        await AsyncStorage.setItem("count", 1001 + "");
      } else {
        var counting = parseInt(get_count) + 1;
        await AsyncStorage.setItem("count", counting + "");
      }
      var number_id = await AsyncStorage.getItem("count");

      // await AsyncStorage.setItem('your_code_is', '');

      // await AsyncStorage.setItem('your_code_is', JSON.stringify(number_id));
      // console.log("[ID]: "+await AsyncStorage.getItem('your_code_is'));

      user_info = {
        id: number_id,
        name: this.state.name,
        phone: this.state.phone
      };
      //Storage Data in Device
      await AsyncStorage.setItem("DATA_USER", JSON.stringify(user_info));

      //reset Data
      this.setState({
        id: "",
        name: "",
        phone: ""
      });
      // alert("CODE " + await AsyncStorage.getItem("DATA_USER"))
      this.props.navigation.navigate("Main", { mode: language });
    } catch (error) {
      alert("[ERROR] " + error);
    }
  };
  _check_phone_number(phone_number) {
    // Do something here
    return false;
  }
  render() {
    return (
      <ImageBackground
        source={this.state.path_background}
        style={styles.container}
      >
        <KeyboardAvoidingView
          style={styles.view_form}
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
         
            <ImageBackground
              source={this.state.path_background}
              style={styles.container2}
            >
            
              {/* Name */}
              <View style={styles.form_container_item}>
        
                <Image
                  resizeMode="contain"
                  style={styles.label_size_name}
                  source={this.state.full_name}
                />
                <ImageBackground
                  resizeMode="contain"
                  style={styles.frame_edt}
                  source={this.state.emptybar}
                >
                  <TextInput
                    style={styles.item_edt}
                    onChangeText={value => {
                      this.setState({
                        name: value
                      });
                    }}
                  />
                </ImageBackground>
                {/* </View> */}

                {/* Phone */}

                {/* <View style={styles.form_container_item}> */}
                <Image
                  resizeMode="contain"
                  style={styles.label_size_phone}
                  source={this.state.phonenumber}
                />

                <ImageBackground
                  resizeMode="contain"
                  style={styles.frame_edt}
                  source={this.state.emptybar}
                >
                  <TextInput
                    style={styles.item_edt}
                    keyboardType="number-pad"
                    onChangeText={value => {
                      this.setState({
                        phone: value
                      });
                    }}
                  />
                </ImageBackground>
              </View>

              {/* Button Submit */}
            </ImageBackground>
            <TouchableOpacity
              style={styles.form_button}
              onPress={() => {
                this._getData();
              }}
            >
              <Image
                source={this.state.start}
                resizeMode="contain"
                style={styles.button}
              />
            </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  form_container_item: {
    // backgroundColor: "red",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // height : height * (40/100),
    // width : width * 0.8
    marginTop: height * 0.2
  },
  frame_edt: {
    // backgroundColor: "yellow",
    justifyContent: "center",
    width: width * (40 / 100),
    height: height * (15 / 100),
    alignItems: "center"
  },
  button: {
    width: "80%",
    height: "90%",
    // backgroundColor: "orange",
    alignSelf: "center"
  },
  label_size_name: {
    height: height * 0.07,
    // backgroundColor: "blue",
    width: width * (20 / 100),
    alignSelf: "center"
  },
  label_size_phone: {
    height: height * 0.07,
    // backgroundColor: "green",
    width: width * (30 / 100),
    alignSelf: "center"
  },
  item_edt: {
    height: height * (30 / 100),
    width: "90%"
    // borderWidth: 2
  },
  form_button: {
    height: height * (15 / 100),
    width: width * (35 / 100),
    // backgroundColor :"red",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: height * 0.1
  },
  view_form: {
    alignItems: "center",
    height: height,
    width: width,
    // marginTop : height * (20/100),
    justifyContent: "center",
    flex: 1
    // backgroundColor: "gray",
  },
  container2: {
    height: height,
    width: width,
    alignItems: "center"
    // backgroundColor: "gray",
  },
  container: {
    flex: 1,
    alignItems: "center"
  }
});
