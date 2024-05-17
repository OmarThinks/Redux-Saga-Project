import {MainLayout} from '@hoc';
import {useAppColors} from '@theme';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';

const Home = () => {
  const {t} = useTranslation();
  // console.log(i18n.language);
  const colors = useAppColors();

  return (
    <View className="grow self-stretch justify-center items-center">
      <Text
        className="justify-center font-bold text-[30px]"
        style={{color: colors.normalText}}>
        {t('screen.home')}
      </Text>
    </View>
  );
};

export default () => {
  const {t} = useTranslation();

  return MainLayout(Home, {
    title: t('screen.home'),
    hasBackButton: false,
  });
};
