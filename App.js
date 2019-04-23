import React from 'react';
import Login from './Components/Login';
import Home from './Components/Home';
import Questions from './Components/Questions';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import SplashScreen from './Components/splash';



class App extends React.Component {


//   componentWillMount(){
        
//     setTimeout(()=>{
//        this.props.navigation.navigate('login');
//     }, 200);
// }  
  


  render() {
    return (

        // <Image
        //   source={require('./Assets/Images/logo.png')}
        // />
        <AppContainer />

      
    );
  }
}

const AppNavigator = createStackNavigator({
  first:{screen: SplashScreen, navigationOptions: {
    header: null 
  }},
  login:{screen:Login, navigationOptions: {
    header: null 
  }},
  home:{screen:Home, navigationOptions: {
    header: null 
  }},
  question:{screen:Questions, navigationOptions: {
    header: null 
  }},

 
});

const AppContainer = createAppContainer(AppNavigator)

export default App;



