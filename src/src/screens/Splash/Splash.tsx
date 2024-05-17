import {initializeLanguage} from '@locale';
import {RootStackParamList, navigationNames} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {setTheme} from '@redux';
import {AnyAction} from '@reduxjs/toolkit';
import {getStoredTheme} from '@storage';
import React, {Dispatch} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

const initializeTheme = async (dispatch: Dispatch<AnyAction>) => {
  const storedTheme = await getStoredTheme();
  dispatch(setTheme(storedTheme));
};

const Splash = () => {
  // Navigation
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const dispatch = useDispatch();

  const [isReady1, setIsReady1] = React.useState(false);
  const [isReady2, setIsReady2] = React.useState(false);
  const [initialized, setInitialized] = React.useState(false);

  React.useEffect(() => {
    initializeLanguage()
      .catch(() => {})
      .finally(() => {
        setIsReady1(true);
      });

    initializeTheme(dispatch)
      .catch(() => {})
      .finally(() => {
        setIsReady2(true);
      });
  }, [dispatch]);

  React.useEffect(() => {
    if (isReady1 && isReady2 && !initialized) {
      setInitialized(true);
      navigation.replace(navigationNames.Home);
    }
  }, [isReady1, isReady2, initialized, navigation]);

  return <View />;
};

export default Splash;
