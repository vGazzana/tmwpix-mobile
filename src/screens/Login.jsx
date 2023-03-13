import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import InputText from '../components/InputText';
import {API_URL} from '@env';
import Loading from '../components/base/Loading';

const Login = () => {
  const onSubmit = ({nativeEvent: {text}}) => {
    if ((text === '') | (text === undefined) | !text) return;

    try {
    } catch (e) {
    } finally {
    }
  };

  return (
    <View>
      {/* <Loading /> */}
      <Text>{API_URL}</Text>
      <InputText onSubmit={onSubmit} />
      <Button text="entrar" primary={true} />
      <Button text="cadastrar" primary={false} />
    </View>
  );
};

export default Login;
