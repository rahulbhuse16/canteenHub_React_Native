import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MenuManageMent from '../Pages/MenuMangeMent';
import Authentication from '../Pages/Authentication/Authentication';
import { useAppSelector } from '../Redux/store';
import OrderPlaceMent from '../Pages/OrderPlaceMent/OrderPlaceMent';
import Profile from '../Pages/Profile/Profile';
const Tab = createBottomTabNavigator();

const Screen1 = () => (
    
  <Authentication/>
);

const Screen2 = () => (
  <MenuManageMent/>
);

const Screen3 = () => (
 <View></View>
);

const Screen4 = () => (
  <OrderPlaceMent/>
);

const Screen5 = () => (
  <Profile/>
);

// Custom Tab Bar Component
const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.customTabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName = '';
        switch (route.name) {
          case 'Authentication':
            iconName = 'home';
            break;
          case 'Menu':
            iconName = 'fast-food';
            break;
          case 'Order':
            iconName = 'list-outline';
            break;
          case 'Screen4':
            iconName = 'cart-sharp';
            break;
          case 'Profile':
            iconName = 'person-circle-sharp';
            break;
        }

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabItem}
            onPress={onPress}
          >
            <Ionicons
              name={iconName}
              size={30}
              color={isFocused ? '#870091' : 'gray'}
            />
            <Text style={{ color: isFocused ? '#870091' : 'gray' }}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabNavigator = () => {
    const userRole=useAppSelector(state=>state.authInfo.authRelatedState.role)

  return (
    
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
         {userRole==='ADMIN'?
        (<Tab.Screen name={`Menu`} component={Screen2}/>):null}
        <Tab.Screen name="Order" component={Screen3} />
        {userRole==='STUDENT'?
        (<Tab.Screen name="Screen4" component={Screen4} />):null}
        <Tab.Screen name="Profile" component={Screen5} />
       
      </Tab.Navigator>
   
  );
};

const styles = StyleSheet.create({
  customTabBar: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabNavigator;
