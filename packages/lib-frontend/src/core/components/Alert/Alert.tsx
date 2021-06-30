import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { alertDelete } from '@lib/frontend/app/actions/alert/alert.action';
import { Appearable, Icon, Text, Wrapper } from '@lib/frontend/core/components';
import { AlertProps } from '@lib/frontend/core/components/Alert/Alert.model';
import { getAlertStyle } from '@lib/frontend/core/components/Alert/Alert.style';
import { useStyles } from '@lib/frontend/core/hooks';
import { AppDispatchModel } from '@lib/frontend/root/stores/store';
import { useTheme } from '@lib/frontend/theme/stores/theme.reducer';

export const Alert = ({ id, icon, message, duration, ...props }: AlertProps) => {
  const { styles } = useStyles(props, [getAlertStyle]);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatchModel>();
  const animationDuration = useTheme<number>('animation.duration');

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => dispatch(alertDelete(id)), animationDuration);
  };

  useEffect(() => {
    duration && setTimeout(handleClose, duration);
  }, [duration]);

  return (
    <Appearable style={styles} isVisible={isVisible} dimension="height">
      <Wrapper
        mTop
        pLeft
        pRight
        pTopTight
        pBottomTight
        round
        primary
        shadow
        row
        alignCenter
        spacingTight>
        {icon && <Icon contrast icon={icon} />}
        <Wrapper grow>
          <Text contrast>
            {id} {message}
          </Text>
        </Wrapper>
        <Icon contrast icon="times" onPress={handleClose} />
      </Wrapper>
    </Appearable>
  );
};
