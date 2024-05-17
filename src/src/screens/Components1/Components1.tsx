import {CircleIcon, Icon, TouchFiller} from '@components';
import {MainLayout} from '@hoc';
import {useAppColors} from '@theme';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';

const HR = ({height = 2}: {height?: number}) => {
  return (
    <View
      className="bg-black my-3"
      style={{
        height,
      }}
    />
  );
};

const Header = ({title = 'Title'}: {title: string}) => {
  const colors = useAppColors();
  return (
    <View>
      <HR height={4} />
      <Text
        className="text-[25px] font-bold"
        style={{color: colors.normalText}}>
        {title}
      </Text>
      <HR height={1} />
    </View>
  );
};

const Components1 = () => {
  const colors = useAppColors();

  return (
    <View>
      <Header title="TouchFiller" />
      <View>
        <View className="m-1 rounded-full bg-cyan-300 overflow-hidden">
          <Text className="m-5" style={{color: colors.normalText}}>
            Pressable
          </Text>
          <TouchFiller onPress={() => {}} />
        </View>
        <View className="m-1 rounded-full bg-gray-400 overflow-hidden">
          <Text className="m-5" style={{color: colors.normalText}}>
            Not Pressable
          </Text>
          <TouchFiller />
        </View>
        <View className="m-1 rounded-[20px] bg-gray-400 p-4 overflow-hidden">
          <Text className="m-5" style={{color: colors.normalText}}>
            {"Don't use with padding"}
          </Text>
          <TouchFiller onPress={() => {}} borderRadius={20} />
        </View>

        <View className="m-1 rounded-full bg-gray-400">
          <Text className="m-5" style={{color: colors.normalText}}>
            {"Don't forget to hide overflow"}
          </Text>
          <TouchFiller onPress={() => {}} />
        </View>
      </View>

      <Header title="Icon" />

      <Icon size={20} name="comments" color="lime" />
      <Icon size={20} name="comments" color="lime" solid />
      <Icon size={40} name="comments" color="lime" />
      <Icon className="m-5" size={20} name="comments" color="lime" />

      <Header title="CircleIcon" />

      <CircleIcon
        size={40}
        iconName="comments"
        color={'black'}
        onPress={() => {}}
      />
      <CircleIcon size={40} iconName="comments" color={'black'} />
      <CircleIcon
        size={40}
        iconName="comments"
        color={'black'}
        borderWidth={2}
        onPress={() => {}}
      />

      <CircleIcon
        size={40}
        iconName="comments"
        color={'black'}
        borderWidth={2}
        onPress={() => {}}
        bgColor="green"
      />

      <View
        style={{
          alignSelf: 'stretch',
          height: 40,
          backgroundColor: 'red',
          borderRadius: 16,
        }}
        // This works
      />
      <View
        className="self-stretch h-10 bg-red-500 rounded-[16px]"
        // This works
      />
      <View
        className="self-stretch h-10 bg-red-500 rounded-[16]"
        // This doesn't work
      />
    </View>
  );
};

/*
export default MainLayout(Components1, {
  title: 'Components1',
});
*/

export default () => {
  const {t} = useTranslation();

  return MainLayout(Components1, {
    title: t('screen.components1'),
    hasBackButton: true,
  });
};
