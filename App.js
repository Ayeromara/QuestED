import React,{useEffect, useRef} from 'react';
import { AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from "react-redux"
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigation from './navigation/RootNavigation';
import { checkToken } from './api/user';


const App = () => {
  const appState = useRef(AppState.currentState);
  useEffect(()=>{
    const subscription = AppState.addEventListener('change', nextAppState =>{
        if(appState.current.match(/inactive|background/)&& nextAppState === 'active'){
          console.log('you have come back to the app');
          //we are coming from background to foreground
        }

        appState.current = nextAppState;
    });
    console.log('application rendered')
  },[])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootNavigation/>
          </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};



export default App;
