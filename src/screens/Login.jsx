import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import InputText from '../components/InputText';
import {API_URL} from '@env';
import Loading from '../components/base/Loading';
import Container from '../components/base/Container';

const Login = () => {
  const onSubmit = ({nativeEvent: {text}}) => {
    if ((text === '') | (text === undefined) | !text) return;

    try {
    } catch (e) {
    } finally {
    }
  };

  return (
    <Container>
      {/* <Loading /> */}
      <Image
        source={{
          uri: 'https://tmwpix.com/images/logo2.png',
        }}
        className={'absolute top-0 my-2 h-[47px] w-[284px] bg-rose-600'}
        resizeMode={'stretch'}
      />
      <View>
        <InputText onSubmit={onSubmit} />
        <Button text="entrar" primary={true} />
        <Button text="cadastrar" primary={false} />
      </View>
    </Container>
  );
};

export default Login;
