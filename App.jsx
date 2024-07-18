import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import RetinClinicLoc from './screens/RetinClinicLoc';
import Diabatic from './screens/Diabatic';
import DiabaticResult from './screens/DiabaticResult';
import Retinopathy from './screens/Retinopathy';
import RetinopathyResult from './screens/RetinopathyResult';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Retinopathy" component={Retinopathy} />
        <Stack.Screen name="RetinopathyResult" component={RetinopathyResult} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Locations" component={RetinClinicLoc} />
        <Stack.Screen name="ResultScreen" component={DiabaticResult} />
        <Stack.Screen name="Diabatic" component={Diabatic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
