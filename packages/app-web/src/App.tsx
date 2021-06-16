import React from 'react';
import { Root } from '@lib/frontend/root/containers';
import { Router } from '@lib/frontend/routing/containers';
import { ROUTES } from '@lib/frontend/routing/containers/Router/Router.constants';
import { GlobalStyle } from '@lib/frontend/web/Global.style';

const App = () => (
  <Root>
    <GlobalStyle />
    <Router routes={ROUTES} />
  </Root>
);

export default App;
