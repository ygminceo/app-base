import React from 'react';
import { COMMON } from '@lib/common/core/constants';
import { Button, Wrapper } from '@lib/frontend/core/components';
import { FormProps } from '@lib/frontend/core/components/Form/Form.model';
import { getFormStyle } from '@lib/frontend/core/components/Form/Form.style';
import { _Form } from '@lib/frontend/core/components/Form/internal/_Form';
import { useStyles } from '@lib/frontend/core/hooks';
import { useTranslation } from '@lib/frontend/locale/hooks';

export const Form = ({
  children,
  closeLabel,
  onClose,
  onReset,
  onSubmit,
  isLoading,
  isDisabled,
  submitLabel,
  ...props
}: FormProps) => {
  const { t } = useTranslation([COMMON]);
  const { styles } = useStyles(props, [getFormStyle]);
  return (
    <Wrapper style={styles} spacing selfCenter>
      <_Form onSubmit={onSubmit}>{children}</_Form>

      <Wrapper row spacing>
        {onClose && (
          <Wrapper grow shrink>
            <Button
              fullWidth
              transparent
              isDisabled={isDisabled || isLoading}
              onPress={() => {
                onReset && onReset();
                onClose();
              }}>
              {closeLabel || t('common:labels.cancel')}
            </Button>
          </Wrapper>
        )}

        <Wrapper grow shrink>
          <Button fullWidth isLoading={isLoading} isDisabled={isDisabled} onPress={onSubmit}>
            {submitLabel || t('common:labels.submit')}
          </Button>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
