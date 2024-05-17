import {AppBar as AppBarOriginal} from '@components';
import {themeSelector} from '@redux';
import {useAppTheme} from '@theme';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {useSelector} from 'react-redux';

const AppBar = ({
  title,
  hasBackButton,
}: {
  title?: string;
  hasBackButton: boolean;
}) => <AppBarOriginal title={title} hasBackButton={hasBackButton} />;

const MainLayout = (
  ScreenComponent: React.FC,
  {
    isScrollable = true,
    hasAppBar = true,
    hasBackButton = true,
    title = '',
    hzPadding = 15,
    vrPadding = 15,
  }: {
    isScrollable?: boolean;
    hasAppBar?: boolean;
    hasBackButton?: boolean;
    title?: string;
    hzPadding?: number;
    vrPadding?: number;
  } = {},
) => {
  const appBar = hasAppBar && (
    <AppBar title={title} hasBackButton={hasBackButton} />
  );
  const colors = useAppTheme().colors;
  const theme = useSelector(themeSelector);

  if (isScrollable) {
    return (
      <SafeAreaView
        style={{
          backgroundColor: colors.appBg,
          flex: 1,
        }}>
        <StatusBar
          barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
          backgroundColor={colors.appBg}
        />
        {appBar}
        <ScrollView
          style={{
            flexGrow: 1,
          }}
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <View
            style={{
              marginHorizontal: hzPadding,
              marginVertical: vrPadding,
              flexGrow: 1,
              alignSelf: 'stretch',
            }}>
            <ScreenComponent />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  return (
    <View style={{flex: 1}}>
      {appBar}
      <ScreenComponent />
    </View>
  );
};

export default MainLayout;
