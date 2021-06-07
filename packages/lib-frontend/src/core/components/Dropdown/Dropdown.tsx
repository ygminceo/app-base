import { Wrapper } from '@lib/frontend/core/components';
import { DropdownProps } from '@lib/frontend/core/components/Dropdown/Dropdown.model';
import { _Dropdown } from '@lib/frontend/core/components/Dropdown/internal/_Dropdown';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import { useIsMobile, useStyles } from '@lib/frontend/core/hooks';
import React from 'react';

export const Dropdown = ({
  anchor,
  children,
  fullWidth,
  width,
  height,
  isOpen,
  onClose,
  header,
  ...props
}: DropdownProps) => {
  const { styles } = useStyles(props);
  const mobile = useIsMobile();

  return mobile ? (
    <>
      <Wrapper style={styles}>{anchor}</Wrapper>
      <Modal isOpen={isOpen} onClose={onClose} width={width} height={height} header={header}>
        {children}
      </Modal>
    </>
  ) : (
    <_Dropdown
      style={styles}
      isOpen={isOpen}
      onClose={onClose}
      anchor={anchor}
      fullWidth={fullWidth}>
      <Wrapper fill shadow border round width={fullWidth ? undefined : width} height={height}>
        {header}
        <Wrapper grow p>
          {children}
        </Wrapper>
      </Wrapper>
    </_Dropdown>
  );
};
