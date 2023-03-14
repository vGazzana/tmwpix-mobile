import {View, Text} from 'react-native';
import React from 'react';
import Container from '../components/base/Container';
import ProfileBox from '../components/ProfileBox';
import Logo from '../components/base/Logo';
import Button from '../components/Button';

const Profile = () => {
  return (
    <Container>
      <Logo />
      <View className={'flex-1 items-center justify-evenly'}>
        <Text className={'my-4 text-xl font-bold text-white'}>
          Quem esta assistindo?
        </Text>
        <View className={'flex flex-row'}>
          {[...Array(5)].map(item => (
            <ProfileBox key={item} />
          ))}
        </View>
        <View className={'flex flex-row'}>
          <Button text={'Adicionar Perfil'} />
          <Button text={'Gerenciar Perfis'} />
        </View>
      </View>
    </Container>
  );
};

export default Profile;
