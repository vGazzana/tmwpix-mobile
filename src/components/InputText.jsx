import {Pressable, TextInput} from 'react-native';
import React from 'react';

const InputText = ({onSubmit}) => {
  const inputRef = React.useRef('');

  return (
    <Pressable
      android_ripple={{color: '#333'}}
      onPress={() => inputRef.current.focus()}>
      <TextInput ref={inputRef} onSubmitEditing={onSubmit} />
    </Pressable>
  );
};

export default InputText;
