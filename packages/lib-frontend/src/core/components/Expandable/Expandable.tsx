import React, { useState } from 'react';
import { Icon, Text, Wrapper } from '@lib/frontend/core/components';
import { ExpandableProps } from '@lib/frontend/core/components/Expandable/Expandable.model';
import { MeasureModel } from '@lib/frontend/core/components/Wrapper/Wrapper.model';
import { useStyles } from '@lib/frontend/core/hooks';
import { shapeStyle } from '@lib/frontend/core/styles/shape.style';

export const Expandable = ({ title, isOpen: isOpenProps, children, ...props }: ExpandableProps) => {
  const { styles } = useStyles(props);
  const [isOpen, setIsOpen] = useState<boolean>(isOpenProps || false);
  const [measure, setMeasure] = useState<MeasureModel>();
  return (
    <Wrapper style={styles}>
      <Wrapper pTopTight pBottomTight row spacing alignCenter onPress={() => setIsOpen(!isOpen)}>
        <Wrapper
          style={isOpen ? shapeStyle.rotate90 : shapeStyle.noRotate}
          animatable={{ transition: ['rotate'] }}>
          <Icon icon="chevron-right" />
        </Wrapper>
        <Text subtitle>{title}</Text>
      </Wrapper>

      {measure ? (
        <Wrapper
          height={isOpen ? measure.height : 0}
          opacity={isOpen ? 1 : 0}
          overflowHidden
          animatable={{ transition: ['height', 'opacity'] }}>
          <Wrapper pBottom>{children}</Wrapper>
        </Wrapper>
      ) : (
        <Wrapper onMeasure={setMeasure} absolute opaque pBottom>
          {children}
        </Wrapper>
      )}
    </Wrapper>
  );
};
