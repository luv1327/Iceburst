import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

function ImageSlider({images}) {
  return (
    <View style={{marginBottom: 30}}>
      <TouchableOpacity>
        <SliderBox
          images={images}
          sliderBoxHeight={220}
          circleLoop
          resizeMethod={'resize'}
          resizeMode={'cover'}
          ImageComponentStyle={{width: '100%'}}
          imageLoadingColor="#fff"
          dotStyle={{
            width: 8,
            height: 8,
            marginHorizontal: 0,
          }}
          dotColor="#fff"
          inactiveDotColor="#eee"
        />
      </TouchableOpacity>
    </View>
  );
}

export default ImageSlider;
