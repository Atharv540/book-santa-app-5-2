import * as React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import BookDonateScreen from '../screens/BookDonateScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen';
import ReceiverDetails from '../screens/ReceiverDetailsScreen';

export const AppStackNavigator = createStackNavigator({
    BookDonateList: {screen: BookDonateScreen},
    ReceiverDetails: {screen: ReceiverDetailsScreen},
},
{
    initialRouteName: 'BookDonateList'
}
)