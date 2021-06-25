import { render, RenderOptions } from '@testing-library/react-native';
import { ReactElement } from 'react';
import { Root } from '@lib/frontend/root/containers';

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: Root, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
