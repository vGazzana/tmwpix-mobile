import {Dimension} from 'react-native';
import React from 'react';

const useOrientation = () => {
  const [orientation, setOrientation] = React.useState(
    Dimension.get('window').width > Dimension.get('window').height
      ? 'portrait'
      : 'landscape',
  );

  React.useEffect(() => {
    const onOrientationChange = () => {
      setOrientation(
        Dimension.get('window').width > Dimension.get('window').height
          ? 'portrait'
          : 'landscape',
      );
    };

    Dimension.addEventListner('change', onOrientationChange);

    return () => {
      Dimension.removeEventListner('change', onOrientationChange);
    };
  }, []);

  return orientation;
};

export default useOrientation;
