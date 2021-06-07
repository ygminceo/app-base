import { ComponentType, ReactNode } from 'react';

export interface CatalogComponent<P> {
  title?: string;
  props: Partial<P>;
  render?: (props: Partial<P>) => ReactNode;
  width?: number;
  height?: number;
}

export interface CatalogGroup<P> {
  title?: string;
  component: ComponentType<P>;
  props?: Partial<P>;
  components: CatalogComponent<Partial<P>>[];
  width?: number;
  height?: number;
}
