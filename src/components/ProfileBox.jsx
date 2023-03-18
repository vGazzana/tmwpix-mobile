import {Pressable, Text, Image, View} from 'react-native';
import React from 'react';

const ProfileBox = () => {
  return (
    <Pressable
      android_ripple={{color: '#444', radius: 88}}
      className={'mx-1 flex h-[140] w-[110] items-center justify-start py-2'}
      onHoverIn={() => {
        console.log('Hovered?');
      }}>
      <View
        className={
          'mb-2 aspect-square h-[85] items-center overflow-hidden rounded-md border-2 border-black'
        }>
        <Image
          className={'h-full w-full'}
          source={{
            uri: 'https://t4.ftcdn.net/jpg/05/09/59/75/360_F_509597532_RKUuYsERhODmkxkZd82pSHnFtDAtgbzJ.jpg',
          }}
        />
      </View>
      <Text
        className={
          'w-full bg-emerald-400/30 text-center capitalize text-white'
        }>
        antonio samuel
      </Text>
    </Pressable>
  );
};

export default ProfileBox;
