import { KeyboardContainer } from '@lib/frontend/core/components';
import { Router } from '@lib/frontend/routing/containers';
import { ROUTES } from '@lib/frontend/routing/containers/Router/Router.constants';
import { Root } from '@lib/frontend/src/root/containers';
import React from 'react';

const App = () => (
  <Root>
    <KeyboardContainer>
      <Router routes={ROUTES} />
    </KeyboardContainer>
  </Root>
);

export default App;
