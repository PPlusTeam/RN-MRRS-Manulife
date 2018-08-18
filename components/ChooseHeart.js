import React from 'react';
import {
    View, 
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native'
var this_mode = "EN"
export default class ChooseHeart extends React.Component{
    constructor(props){
        super(props)
        this.state={
            path_background : require ("../src/background.png"),
            path_title : require("../src/ChooseHeart/chooseyourheart.png"),

            path_heart : require("../src/ChooseHeart/heart.png"),
            path_strong : require("../src/ChooseHeart/strong.png"),
            path_young : require("../src/ChooseHeart/young.png"),

            path_default : require("../src/ChooseHeart/heart.png"),
        }
    }

    componentWillMount=()=>{
        const {params} = this.props.navigation.state;

        const mode = params ?  params.mode : null;

        if(mode != null){
            this_mode = mode
        }else{
        }

        if(mode==="VN"){
            this.setState({
                path_title : require("../src/ChooseHeart/chontraitim.png")
            })
        }
    }
    _handelChooseMode=(mode)=>{
        switch(mode){
            case "heart":{
                this.props.navigation.navigate("Heart",{
                    mode : this_mode,
                    heart : "Heart",
                })
                break;
            }
            case "strong":{
                this.props.navigation.navigate("Heart",{
                    mode : this_mode,
                    heart : "Strong",
                })
                break;
            }
            case "young":{
                this.props.navigation.navigate("Heart",
                {
                    mode : this_mode,
                    heart : "Young",
                })
                break;
            }
        }
    }
    render(){
        return(
            <ImageBackground 
                source= {this.state.path_background}
                style={styles.container}>
                    <Image
                        resizeMode = "contain"
                        style={styles.title}
                        source = {this.state.path_title}
                    />

                    {/* View heart */}
                    <View style = {styles.view_heart}>
                        <TouchableOpacity onPress={()=>{
                            this._handelChooseMode("heart")
                        }}>
                            <Image
                                resizeMode = "contain"
                                source={this.state.path_heart}
                                style = {styles.heart}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            this._handelChooseMode("strong")
                        }}>
                            <Image
                                resizeMode = "contain"
                                source={this.state.path_strong}
                                style = {styles.heart}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            this._handelChooseMode("young")
                        }}>
                            <Image
                                resizeMode = "contain"
                                source={this.state.path_young}
                                style = {styles.heart}
                            />
                        </TouchableOpacity>
                    </View>
            </ImageBackground>
        );
    }
}

const  styles = StyleSheet.create({
    heart:{
        height : 60,
        width : 60,
        marginLeft : 5,
        marginRight : 5
    },
    view_heart:{
        height : 100,
        width : "60%",
        // backgroundColor : "red",
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection  : "row"
    },
    title:{
        height : 20
    },
    container : {
        justifyContent : "center",
        alignItems : "center",
        flex : 1
    }
})