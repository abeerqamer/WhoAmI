import React, { Component } from 'react';
import {View, Image} from 'react-native';

class SplashScreen extends Component {
    componentWillMount = () =>{
        setTimeout(()=>{
               this.props.navigation.navigate('login')
              
         }, 200);
    }
    render() { 
        return ( 

            <View style={styles.container}>
                     <Image source={require('../Assets/Images/logo.png')} />    
            </View>
           
       )
    }
}

const styles = {
    container: {
      flex: 1,

      backgroundColor:'#2a5298'
      
  
    },

  
   
  }

 
export default SplashScreen;
