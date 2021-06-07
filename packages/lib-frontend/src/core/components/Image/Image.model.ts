import { StyledViewProps } from '@lib/frontend/core/hooks/useViewStyles/useViewStyles.model';

export interface ImageProps extends StyledViewProps {
  src: string | number;
}
