import React from 'react';
import { ScratchPadPageProps } from '@lib/frontend/admin/pages/ScratchPad/ScratchPad.model';
import { Wrapper, Text } from '@lib/frontend/core/components';

export const ScratchPadPage = ({ ...props }: ScratchPadPageProps) => {
  return (
    <Wrapper grow>
      <Text>Scratchpad</Text>
    </Wrapper>
  );
};
