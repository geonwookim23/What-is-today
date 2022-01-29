import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homescreen from './HomeScreen';
import FriendListScreen from './FriendListScreen';
import SettingScreen from '/SettingScreen';

const Tab = createBottomTabNavigator();

function MainTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="FriendList" component={FriendListScreen} />
            <Tab.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
    );
}

export default MainTab;