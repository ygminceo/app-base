import React from 'react';
import { ImageProps } from '@lib/frontend/core/components/Image/Image.model';
import { _Image } from '@lib/frontend/core/components/Image/internal/_Image';
import { useViewStyles } from '@lib/frontend/core/hooks';

export const Image = ({ src, ...props }: ImageProps) => {
  const { styles } = useViewStyles(props, []);
  return <_Image style={styles} src={src} />;
};
