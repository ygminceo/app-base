import { Root } from '@lib/frontend/root/containers';
import { Router } from '@lib/frontend/routing/containers';
import { ROUTES } from '@lib/frontend/routing/containers/Router/Router.constants';
import { GlobalStyle } from '@lib/frontend/web/Global.style';
import 'normalize.css';
import React from 'react';

const App = () => (
  <Root>
    <GlobalStyle />
    <Router routes={ROUTES} />
  </Root>
);

export default App;
