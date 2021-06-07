import { BackgroundProps } from '@lib/frontend/core/styles/background.model';
import { SizeProps } from '@lib/frontend/core/styles/size.model';

export interface LogoProps extends SizeProps, Pick<BackgroundProps, 'light'> {}
