import {TouchFiller} from '@components';
import {MainLayout} from '@hoc';
import {Language as LanguageType, switchLanguage} from '@locale';
import {useAppTheme} from '@theme';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';

const Language = () => {
  const {t} = useTranslation();

  return (
    <View className="grow self-stretch justify-center items-center">
      <LanguageItem languageShort="en" languageTitle="English" />
      <LanguageItem languageShort="de" languageTitle="Deutsch" />
      <LanguageItem languageShort="ar" languageTitle="العربية" />
    </View>
  );
};

const LanguageItem = ({
  languageTitle,
  languageShort,
}: {
  languageTitle: string;
  languageShort: LanguageType;
}) => {
  const colors = useAppTheme().colors;

  return (
    <View
      className="m-1 rounded-full bg-gray-400 overflow-hidden self-stretch"
      style={{
        backgroundColor: colors._surface,
      }}>
      <Text
        className="m-5 text-center font-bold text-[20px]"
        style={{
          color: colors._onSurface,
        }}>
        {languageTitle}
      </Text>
      <TouchFiller
        onPress={() => {
          switchLanguage(languageShort);
        }}
      />
    </View>
  );
};

export default () => {
  const {t} = useTranslation();

  return MainLayout(Language, {
    title: t('language'),
    hasBackButton: true,
  });
};
