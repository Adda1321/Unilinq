import React, { FC } from 'react';
import { Image } from 'react-native'

const ImageView = ({ src, imageStyle, Color, ...props }) => {

  return (
    <Image
      style={[imageStyle, { tintColor: Color }]}
      source={src}
      // tintColor={Color}
      {...props}
    // tintColor="grey"
    />
  );
};

export default ImageView;
