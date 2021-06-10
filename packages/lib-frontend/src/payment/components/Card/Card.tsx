import { Image, Logo, Wrapper } from '@lib/frontend/core/components';
import { useStyles } from '@lib/frontend/core/hooks';
import { CardProps } from '@lib/frontend/payment/components/Card/Card.model';
import { getCardStyle } from '@lib/frontend/payment/components/Card/Card.style';
import { config } from '@lib/common/core/utils/Config/Config';
import React from 'react';

const PUBLIC_URL = config.get<string>('REACT_APP_PUBLIC_URL', '');

export const Card = (props: CardProps) => {
  const { styles } = useStyles(props, [getCardStyle]);
  return (
    <Wrapper grow spacing p>
      {/* <Wrapper row spacing horizontalScrollable>
        <Wrapper style={styles} shadow border p relative center>
          <Wrapper absoluteTop pLeft>
            <Logo small />
          </Wrapper>
          <Image src={`${PUBLIC_URL}/images/emv.png`} width={30} height={30} />
        </Wrapper>
        <Wrapper style={styles} shadow border p relative center>
        <Wrapper absoluteTop pLeft>
          <Logo small />
        </Wrapper>
        <Image src={`${PUBLIC_URL}/images/emv.png`} width={30} height={30} />
      </Wrapper>
      </Wrapper> */}

      <Wrapper style={styles} shadow border p relative center>
        <Wrapper absoluteTop pLeft>
          <Logo small />
        </Wrapper>
        <Image src={`${PUBLIC_URL}/images/emv.png`} width={30} height={30} />
      </Wrapper>
    </Wrapper>
  );
};
