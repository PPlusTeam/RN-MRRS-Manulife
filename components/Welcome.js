import React from 'react';
import {
    View, 
    StyleSheet,
    AsyncStorage,
    ImageBackground,
    Image
} from 'react-native';

export default class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.state={
            path_background : require("../src/background.png"),
            path_welcome : require("../src/WELCOME.png"),
            welcome : "Welcome"
        }
    }

    componentWillMount=()=>{
    // AsyncStorage.clear();

        setTimeout(()=>{
            this.props.navigation.navigate("Language")
        },5000)
    }
    render(){
        return(
            <ImageBackground 
            source = {this.state.path_background}
            style = {styles.container}>
            <Image
                resizeMode = "contain"
                source = {this.state.path_welcome}
                style = {styles.welcome}
            />
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    welcome:{
        height : "20%"
    },
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
})