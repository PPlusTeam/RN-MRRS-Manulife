import React from 'react'

import {
    View,
    StyleSheet  ,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native'

export default class ChooseLanguage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            vn : "Việt Nam",
            en : "English",
            path_background : require('../src/background.png'),
            vn_flag : require('../src/language/vn.png'),
            en_flag : require('../src/language/en.png'),
            title_vn : require('../src/language/vn_title.png'),
            title_en : require('../src/language/en_title.png'),
        }
    }

    _handleChoose(mode){
        switch(mode){
            case "VN": {
                this.props.navigation.navigate("Login",{
                    mode : "VN"
                })
                break ;
            }
            case "EN": {
                this.props.navigation.navigate("Login",{
                    mode : "EN"
                })
                break ;
            }
            default  : {
                alert("DEFAULT MODE")
                break;
            }
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <ImageBackground
                    source={this.state.path_background}
                    style = {styles.view_container}>

                    {/* View Title */}
                    <View style={styles.view_title}>
                        {/* VN */}
                            <Image
                                resizeMode = "contain"
                                style={styles.title_vn}
                                source = {this.state.title_vn}
                            />
                        {/* EN */}
                            <Image
                                resizeMode = "contain"
                                style={styles.title_en}
                                source = {this.state.title_en}
                            />
                    </View>
                    <View style={styles.view_button}>
                        <View>
                            <TouchableOpacity style={styles.btn} onPress={()=>{
                                this._handleChoose("VN")
                            }}>
                                <Image
                                    resizeMode = "contain"
                                    style={styles.img_button}
                                    source = {this.state.vn_flag}
                                />
                            </TouchableOpacity>
                        </View>
                        

                        <View>
                            <TouchableOpacity style={styles.btn} onPress={()=>{
                                this._handleChoose("EN")
                            }}>
                            <Image
                                    resizeMode = "contain"
                                    style={styles.img_button}
                                    source = {this.state.en_flag}
                                />
                            </TouchableOpacity>
                        </View>
                        
                        
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const border_button_color = "#076A34";
const {width, height}= Dimensions.get("window");
const styles = StyleSheet.create({
    view_button : {
        height : "20%",
        width : "70%",
        // backgroundColor : "red",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between"
    },
    title_vn:{
        // backgroundColor : "pink",
        height : "30%"
    },
    title_en:{
        // backgroundColor : "pink",
        height : "20%"
    },
    view_title:{
        height : "30%",
        width :  "90%",
        // backgroundColor : "yellow",
        justifyContent : "center",
        alignItems : "center"
    },
    img_button:{
        height : "100%",
        width : "100%"
    },

    btn:{
        height  : "50%",
        width :width * (30/100),
        // backgroundColor : "blue",
        justifyContent : "center",
        alignItems : "center",
        // borderWidth : 5,
        borderColor : border_button_color,
        borderRadius  : 5
    },
    view_container:{
        // backgroundColor : "red",
        justifyContent  : "center",
        alignItems : "center",
        flexDirection : "column",
        width : "100%",
        height : "100%"
    },
    container : {
        flex : 1, 
        justifyContent : "center",
        alignItems : "center"
    }
})