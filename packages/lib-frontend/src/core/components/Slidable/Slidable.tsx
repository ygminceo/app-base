import React, { Children, useState } from 'react';
import { View as AnimatableView } from 'react-native-animatable';
import { Wrapper } from '@lib/frontend/core/components';
import { SlidableProps } from '@lib/frontend/core/components/Slidable/Slidable.model';
import { useStyles } from '@lib/frontend/core/hooks';
import { shapeStyle } from '@lib/frontend/core/styles/shape.style';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

export const Slidable = ({ previous, current, children, ...props }: SlidableProps) => {
  const { styles } = useStyles(props);
  const transition = useTheme<number>('animation.transition');
  const [width, setWidth] = useState<number>();
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  return (
    <Wrapper style={styles} grow overflowHidden relative onMeasure={({ width }) => setWidth(width)}>
      {width &&
        Children.map(children, (child, i) => {
          const isCurrent = current === i;
          const isPrevious = previous === i;
          return (
            (isCurrent || (isPrevious && isAnimating)) && (
              <AnimatableView
                key={i}
                onAnimationBegin={isCurrent ? () => setIsAnimating(true) : undefined}
                onAnimationEnd={isCurrent ? () => setIsAnimating(false) : undefined}
                animation={
                  current === previous ? undefined : isCurrent ? 'slideInRight' : 'slideOutLeft'
                }
                style={[shapeStyle.absoluteFill]}
                duration={transition}>
                {child}
              </AnimatableView>
            )
          );
        })}
    </Wrapper>
  );
};
