//import liraries
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';


// create a component
class home extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Button onPress={ () =>{ this.props.navigation.navigate('question') }} block rounded large style={{backgroundColor:'#000', marginTop:20}}>
                    <Text style={{color:'#fff', fontWeight:'700'}}>LEVEL 1</Text>
                    </Button> 
                    
                    <Button onPress={ () =>{ this.props.navigation.navigate('question') }} block rounded large style={{backgroundColor:'#000', marginTop:20}}>
                    <Text style={{color:'#fff', fontWeight:'700'}}>LEVEL 2</Text>
                    </Button>
                    
                    <Button onPress={ () =>{ this.props.navigation.navigate('question') }} block rounded large style={{backgroundColor:'#000', marginTop:20}}>
                    <Text style={{color:'#fff', fontWeight:'700'}}>LEVEL 3</Text>
                 </Button>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2a5298',
    },
});

//make this component available to the app
export default home;
