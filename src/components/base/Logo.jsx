import {Image} from 'react-native';
import React from 'react';
import LogoImage from '../../assets/logoTmwpix.png';

const Logo = () => {
  return (
    <Image
      className={`absolute top-0 h-[36px]`}
      source={LogoImage}
      resizeMode={'contain'}
    />
  );
};

export default Logo;
