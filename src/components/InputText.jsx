import {Pressable, TextInput} from 'react-native';
import React from 'react';

const InputText = ({onSubmit}) => {
  const inputRef = React.useRef('');

  return (
    <Pressable
      android_ripple={{color: '#333'}}
      onPress={() => inputRef.current.focus()}>
      <TextInput
        className={'m-2 h-[46] w-[250px] rounded bg-slate-100 text-center'}
        placeholder={'TOKEN'}
        ref={inputRef}
        onSubmitEditing={onSubmit}
      />
    </Pressable>
  );
};

export default InputText;
