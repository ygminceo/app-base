import { ProgressBarProps } from '@lib/frontend/core/components/ProgressBar/ProgressBar.model';
import { getProgressBarStyle } from '@lib/frontend/core/components/ProgressBar/ProgressBar.style';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { useStyles } from '@lib/frontend/core/hooks';
import React, { useEffect, useState } from 'react';

export const ProgressBar = ({ ...props }: ProgressBarProps) => {
  const { styles } = useStyles(props, [getProgressBarStyle]);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(300);
  }, []);

  return (
    <Wrapper style={styles} round relative secondary width={400} height={7} overflowHidden>
      <Wrapper primary absoluteLeft width={progress} animatable={{
        transition: ['width'],
        duration: 1000,
       }} />
    </Wrapper>
  );
};
