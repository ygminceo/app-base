import { SizeProps } from '@lib/frontend/core/styles/size.model';
import { StyledPropsWithChildren } from '@lib/frontend/core/styles/style.model';

export interface FormProps
  extends StyledPropsWithChildren<{
      onReset?(): any;
      onSubmit(): any;
      onClose?(): any;
      closeLabel?: string;
      isLoading?: boolean;
      isDisabled?: boolean;
      submitLabel?: string;
    }>,
    SizeProps {}
