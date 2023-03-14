import {View, Text, Pressable} from 'react-native';
import React from 'react';

const Button = ({text, icon = null, primary}) => {
  return (
    <Pressable
      android_ripple={{color: '#ff3333'}}
      className={`h m-2 flex h-[40px] w-[200px] max-w-xs flex-row items-center justify-start rounded border border-red/25 bg-[#222]`}
      onPress={() => console.log('mim clico')}>
      {icon ? icon : null}
      <Text className="w-full text-center  font-bold uppercase text-white">
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;

// ${primary ? 'bg-red' : 'bg-orange'}  ${
//   primary ? 'border-red-dark' : 'border-orange-dark'
// }
