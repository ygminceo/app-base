import { HomePageProps } from '@lib/frontend/app/pages/Home/Home.model';
import { ProgressBar, Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { Card } from '@lib/frontend/payment/components';
import React from 'react';

export const HomePage = ({ ...props }: HomePageProps) => {
  const { styles } = useStyles(props);
  return (
    <Wrapper style={styles} grow center alignCenter>
      {/* <Card /> */}
      <ProgressBar />
    </Wrapper>
  );
};
