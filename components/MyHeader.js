import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert, TouchableOpacity, TouchableHighlight} from 'react-native';
import NotificationScreen from '../screens/NotificationScreen'


const MyHeader = props => {
  return (
    <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#eaf8fe"
      rightComponent={<TouchableHighlight><Icon name="bell" type="font-awesome" color="#696969" size={25} onPress={()=> props.navigation.navigate("NotificationScreen")}/></TouchableHighlight>}
    />
  );
};

export default MyHeader;
