import { _ImageProps } from '@lib/frontend/core/components/Image/internal/_Image.model';
import compose from '@lib/frontend/core/utils/compose/compose';
import { isString } from 'lodash';
import { Image as NativeImage, ImageProps as NativeImageProps } from 'react-native';

export const _Image = compose<_ImageProps, NativeImageProps>({
  component: NativeImage,
  getProps: ({ src }) => ({
    source: isString(src) ? { uri: src } : src,
    resizeMode: 'contain',
  }),
});
