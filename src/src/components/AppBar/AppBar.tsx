import {CircleIcon, TouchFiller} from '@components';
import {setTheme, themeSelector} from '@redux';
import {useAppTheme} from '@theme';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {I18nManager, ScrollView, Text, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import {RootStackParamList, navigationNames} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const AppBar = ({
  title,
  hasBackButton,
}: {
  title?: string;
  hasBackButton: boolean;
}) => {
  const colors = useAppTheme().colors;
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);

  const {t} = useTranslation();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View
      className="h-[50] px-2 flex-row items-center justify-between self-stretch"
      style={{backgroundColor: colors.appBarBg}}>
      <View className="flex-row grow shrink mr-5 items-center self-stretch">
        {hasBackButton && (
          <CircleIcon
            size={40}
            iconName={I18nManager.isRTL ? 'arrow-right' : 'arrow-left'}
            color={colors.normalText}
            borderWidth={2}
            onPress={() => {
              try {
                navigation.goBack();
              } catch (error) {}
            }}
            className="mr-2"
          />
        )}

        <Text
          className="shrink text-[20px] font-bold"
          style={{color: colors.normalText}}
          numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View className="flex-row items-center">
        <CircleIcon
          size={40}
          iconName={theme === 'light' ? 'moon' : 'sun'}
          color={colors.normalText}
          borderWidth={2}
          onPress={toggleTheme}
          className="ml-1.5"
        />
        <CircleIcon
          size={40}
          iconName="bars"
          color={colors.normalText}
          borderWidth={2}
          onPress={() => {
            try {
              // What to do?
              setModalVisible(true);
            } catch (error) {}
          }}
          className="ml-1.5"
        />

        <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={() => setModalVisible(false)}
            contentContainerStyle={{
              width: '80%',
              alignSelf: 'flex-start',
              flexGrow: 1,
              backgroundColor: colors.appBg,
            }}>
            <ScrollView>
              <DrawerItem
                onPress={() => {
                  try {
                    navigation.navigate(navigationNames.Home);
                  } catch (error) {}
                }}
                iconName={'home'}
                title={t('screen.home')}
                setModalVisible={setModalVisible}
              />
              {__DEV__ && (
                <DrawerItem
                  onPress={() => {
                    try {
                      navigation.navigate(navigationNames.Components1);
                    } catch (error) {}
                  }}
                  iconName={'sitemap'}
                  title={t('screen.components1')}
                  setModalVisible={setModalVisible}
                />
              )}
              <DrawerItem
                onPress={() => {
                  try {
                    navigation.navigate(navigationNames.Language);
                  } catch (error) {}
                }}
                iconName={'language'}
                title={t('language')}
                setModalVisible={setModalVisible}
              />
            </ScrollView>
          </Modal>
        </Portal>
      </View>
    </View>
  );
};

const DrawerItem = ({
  onPress,
  iconName,
  title,
  setModalVisible,
}: {
  onPress: () => void;
  iconName: string;
  title: string;
  setModalVisible: (visible: boolean) => void;
}) => {
  const colors = useAppTheme().colors;
  const theme = useSelector(themeSelector);

  const borderColor = theme === 'light' ? 'border-black' : 'border-white';

  return (
    <View
      className={`${borderColor} border-2 m-2 rounded-[15px]  overflow-hidden`}>
      <View className="flex-row items-center p-2">
        <CircleIcon
          size={40}
          iconName={iconName}
          color={colors.normalText}
          borderWidth={2}
          onPress={() => {}}
          className="mr-2"
        />

        <Text
          className="shrink text-[20px] font-bold"
          style={{color: colors.normalText}}>
          {title}
        </Text>
      </View>

      <TouchFiller
        onPress={() => {
          onPress();
          setModalVisible(false);
        }}
      />
    </View>
  );
};

export default AppBar;
