import React, { FC } from 'react';
import {Image} from 'react-native'

const ImageView = ({ src, imageStyle,Color }) => {
  return (
    <Image
      style={[imageStyle]}
      source={src}
      tintColor={Color}
      // {...props}
      // tintColor="grey"
    />
  );
};

export default ImageView;
