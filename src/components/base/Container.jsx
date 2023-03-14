import {SafeAreaView} from 'react-native';
import React from 'react';

const Container = ({children}) => {
  return (
    <SafeAreaView
      className={'flex flex-1 items-center justify-center bg-background p-2 '}>
      {children}
    </SafeAreaView>
  );
};

export default Container;
