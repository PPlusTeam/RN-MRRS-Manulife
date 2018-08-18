import React from 'react';
import {
    View, 
    StyleSheet,
    Text,
    ImageBackground
} from 'react-native';

export default class Congratulations extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>Congratulations</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent: "center"
    }
})