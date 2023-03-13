import {View, Text, Pressable} from 'react-native';
import React from 'react';

const Button = ({text, icon = null, primary}) => {
  return (
    <Pressable
      android_ripple={{color: '#111'}}
      className={`flex w-full max-w-xs flex-row items-center justify-start rounded border p-4 
      ${primary ? 'bg-red' : 'bg-orange'}  ${
        primary ? 'border-red-dark' : 'border-orange-dark'
      }`}
      onFocus={() => console.log('Focus')}>
      {icon ? icon : null}
      <Text className="text-white">{text}</Text>
    </Pressable>
  );
};

export default Button;
