import React from 'react';
import {
    View,
    AsyncStorage, 
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native'

var question = require("../questions/questions")
var question_vn = question.question_vn;
var question_en = question.question_en;
var round = 1;
var this_mode = "EN";
var point = 0;
var answer = "";

var q1 = "";
var q2 = "";
var q3 = "";

const {width, height} = Dimensions.get("window");
export default  class  Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            path_background: require("../src/brgquestion.png"),
            questions : require("../src/Questions/Q1/question1.png"),
            ans_a : require("../src/Questions/Q1/button_A.png"),
            ans_b : require("../src/Questions/Q1/button_B.png"),
            ans_c : require("../src/Questions/Q1/button_C.png"),

            height_question : "13%",

            height_button :"90%",
            width_button : width * (20/100),

            height_view_question : "11%",
            state_view_question : 'row',

            margintop_view_question: 10,

            resizeMode : 'contain'

        }
    }

    componentWillMount = () =>{
        const {params} = this.props.navigation.state;

        const mode = params ?  params.mode : null;
        this_mode = mode;
        this._handelShow();
    }

    _handelShow(number){
        switch(number){
            case 3 : {
                point += 3;
        this._storageAns(number);

                break;
            }
            case 2 : {
                point += 2;
        this._storageAns(number);

                break;
            }
            case 1 : {
                point += 1;
        this._storageAns(number);

                break;
            }
            default : {
                break;
            }
        }


        if(this_mode === "VN"){
            this._vnMode();
        }else{
            this._enMode();
        }

    }

    async _storageAns (ans){

        switch(ans){
            case 3 : {
                answer = "a"
                break;
            }
            case 2 : {
                answer = "b"
                break;
            }
            case 1 : {
                answer = "c"
                break;
            }
        }
        if(round == 1){
            q1 = answer
            await AsyncStorage.setItem("ans_1", q1.toString());
            // alert("ASN: "+q1)

        } else if(round == 2){
            q2 = answer
            await AsyncStorage.setItem("ans_2", q2.toString());

            // alert("ASN: "+q2)
        } else if(round > 2){
            await AsyncStorage.setItem("ans_3", q3.toString());
            q3 = answer
            // alert("ASN: "+q3)
            
        }



    }
    _vnMode = () =>{
        switch(round){
            case 1 : {
                this.setState({
                    questions : require("../src/Questions/Q1/cauhoi1.png"),
                    ans_a : require("../src/Questions/Q1/nutA.png"),
                    ans_b : require("../src/Questions/Q1/nutB.png"),
                    ans_c : require("../src/Questions/Q1/nutC.png"),
                })
                round = 2;
                break;
            }
            case 2 : {
                this.props.navigation.navigate("Detail",{
                    round : 1,
                    mode : this_mode
                })
                this.setState({
                    questions : require("../src/Questions/Q2/cauhoi2.png"),
                    ans_a : require("../src/Questions/Q2/a.png"),
                    ans_b : require("../src/Questions/Q2/b.png"),
                    ans_c : require("../src/Questions/Q2/c.png"),

                })
                round = 3
                break;
            }
            case 3 : {
                this.props.navigation.navigate("Detail",{
                    round : 2,
                    mode : this_mode
                })
                setTimeout(()=>{
                    this.setState({
                        state_view_question : "column",
                        height_button : "75%",
                        width_button : width * (82/100),
                        height_question : "11%",
                        margintop_view_question : 20,
                        height_view_question : "22%",
                        resizeMode : "cover",
                        questions : require("../src/Questions/Q3/cauhoi3.png"),
                        ans_a : require("../src/Questions/Q3/nuta.png"),
                        ans_b : require("../src/Questions/Q3/nutb.png"),
                        ans_c : require("../src/Questions/Q3/nutc.png"),
                        
                    })
                },500)
                
                round = 4
                break;
            }
            case 4 : {
                
                this.props.navigation.navigate("Detail",{
                    round : 3,
                    mode : this_mode,
                    point : point
                })

                // round = 1
                round = 1;
                point = 0;
                this_mode = "EN";
                break;
            }
        }
    }
    _enMode = () =>{
        switch(round){
            case 1 : {
                round = 2;
                break;
            }
            case 2 : {
                this.props.navigation.navigate("Detail",{
                    round : 1,
                    mode : this_mode
                })
                this.setState({
                    questions : require("../src/Questions/Q2/question2.png"),
                    ans_a : require("../src/Questions/Q2/a.png"),
                    ans_b : require("../src/Questions/Q2/b.png"),
                    ans_c : require("../src/Questions/Q2/c.png"),
                })
                round = 3
                break;
            }
            case 3 : {
                this.props.navigation.navigate("Detail",{
                    round : 2,
                    mode : this_mode
                })
                setTimeout(()=>{
                    this.setState({
                        state_view_question : "column",
                        height_button : "72%",
                        width_button : width * (85/100),
                        height_question : "16%",
                        margintop_view_question : 20,
                        height_view_question : "22%",
                        resizeMode : "cover",
                        questions : require("../src/Questions/Q3/question3.png"),
                        ans_a : require("../src/Questions/Q3/buttonA.png"),
                        ans_b : require("../src/Questions/Q3/buttonB.png"),
                        ans_c : require("../src/Questions/Q3/buttonC.png"),
                    })
                }, 3000)
                 
                round = 4
                break;
            }
            case 4 : {
                this.props.navigation.navigate("Detail",{
                    round : 3,
                    mode : this_mode,
                    point : point
                })
                round = 1;
                point = 0;
                this_mode = "EN";
                break;
            }
        }
    }
   
    render(){
        return(
            <ImageBackground 
                source={this.state.path_background}
                style = {styles.container}>
                {/* Questions */}
                <Image
                    style={_question(this.state.height_question)}
                    resizeMode="contain"
                    source = {this.state.questions}
                />

                {/* View Answer */}
                <View style={view_ans(this.state.height_view_question, this.state.state_view_question, this.state.margintop_view_question)}>
                    <TouchableOpacity onPress={()=>{this._handelShow(3)}}>
                        <ImageBackground
                            resizeMode = {this.state.resizeMode}
                            style = {m_button(this.state.height_button, this.state.width_button)}
                            source = {this.state.ans_a}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this._handelShow(2)}}>
                        <ImageBackground
                            resizeMode = {this.state.resizeMode}
                            style = {m_button(this.state.height_button, this.state.width_button)}
                            source = {this.state.ans_b}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this._handelShow(1)}}>
                        <ImageBackground
                            resizeMode = {this.state.resizeMode}
                            style = {m_button(this.state.height_button, this.state.width_button)}
                            source = {this.state.ans_c}
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

_question = function(height){
    return{ 
        height : height   ,
        position : "absolute",
        top : "25%"
    };
}

m_button = function(height,width){
    return{
        height : height,
        width : width,
        // backgroundColor : "red",
        justifyContent : "center",
        alignItems : "center"
}}

view_ans = function (height,state,margin){
    if(state === "row"){
        return{
            height :height,
            width : "80%",
            // backgroundColor : "blue",
            marginTop : "10%",
            justifyContent : "space-between",
            alignItems : "center",
            flexDirection : state
    }
}else{
    return{
        height :height,
        width : "90%",
        // backgroundColor : "blue",
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "column",
        position : "absolute",
        bottom : "16%"
    }
}

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems  : "center",
        justifyContent :"center",
    }
})