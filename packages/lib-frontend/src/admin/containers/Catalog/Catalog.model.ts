import { ComponentType, ReactNode } from 'react';

export interface CatalogModel<P> {
  title?: string;
  props: Partial<P>;
  render?: (props: Partial<P>) => ReactNode;
  width?: number;
  height?: number;
}

export interface CatalogGroupModel<P> {
  title?: string;
  component: ComponentType<P>;
  props?: Partial<P>;
  components: CatalogModel<Partial<P>>[];
  width?: number;
  height?: number;
}
