//import liraries
import React, {Component} from 'react';
import { View, Image, StatusBar, Text} from 'react-native';
import {Button, Icon} from 'native-base';

class login extends Component {
  state = {  }

  // StatusBar.setBackgroundColor("rgba(0,0,0,0.3)");
  // StatusBar.setBarStyle("light-content");
  // StatusBar.setTranslucent(true);



  render(){
    return (
        <View style={styles.container}>

             
          <Image style={{alignSelf:'center', top:0, marginTop:50}} source={require('../Assets/Images/logo-small.png')}/>
            <Button onPress={ () =>{ this.props.navigation.navigate('home') }} block rounded large style={{backgroundColor:'#FF5353', marginTop:20}}>
            <Text style={{color:'#fff', fontWeight:'700'}}>LOGIN WITH GOOGLE</Text>
            </Button>

           
           
              <Button block rounded large style={{backgroundColor:'#425BB4', marginTop:20}}>
              <Icon name='arrow-back' />
            <Text style={{color:'#fff', fontWeight:'700'}}>LOGIN WITH FACEBOOK</Text>
            </Button>

         
        </View>

      
    );
  }
}
 
export default login;


const styles = {
    container: {
      flex: 1,

      backgroundColor:'#2a5298'
      
  
    },

  
   
  }


  
  
  


