import React, { FC } from 'react';
import FastImage, { ImageStyle } from 'react-native-fast-image';

const ImageView = ({ src, imageStyle,Color }) => {
  return (
    <FastImage
      style={[imageStyle]}
      source={src}
      tintColor={Color}
      // {...props}
      // tintColor="grey"
    />
  );
};

export default ImageView;
