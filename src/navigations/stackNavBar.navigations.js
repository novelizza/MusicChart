import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Pages from '../pages';
import {faMusic, faFileAlt, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const NavStack = createBottomTabNavigator();

function StackNavBar() {
  return (
    <NavStack.Navigator>
      <NavStack.Screen
        name="Top Tracks"
        component={Pages.HomePages}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesomeIcon icon={faMusic} size={20} color={color} />;
          },
        }}
      />
      <NavStack.Screen
        name="Cari Lirik"
        component={Pages.CostPages}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesomeIcon icon={faFileAlt} size={20} color={color} />;
          },
        }}
      />
      <NavStack.Screen
        name="Profile"
        component={Pages.ProfilePages}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesomeIcon icon={faUser} size={20} color={color} />;
          },
        }}
      />
    </NavStack.Navigator>
  );
}

export default StackNavBar;
