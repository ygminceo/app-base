import { Appearable, Wrapper } from '@lib/frontend/core/components';
import { _DropdownProps } from '@lib/frontend/core/components/Dropdown/internal/_Dropdown.model';
import { useStyles } from '@lib/frontend/core/hooks';
import { CommonTheme } from '@lib/frontend/theme/themes/common.theme';
import Tippy, { TippyProps } from '@tippyjs/react';
import { set } from 'lodash';
import React, { useState } from 'react';

const LazyTippy = (props: TippyProps) => {
  const [mounted, setMounted] = useState(false);
  const computedProps = { ...props };
  computedProps.plugins = [
    {
      fn: () => ({
        onMount: () => setMounted(true),
        onHidden: () => setMounted(false),
      }),
    },
    ...(props.plugins || []),
  ];
  if (props.render) {
    const render = props.render;
    computedProps.render = (...args) => (mounted ? render(...args) : '');
  } else {
    computedProps.content = mounted ? props.content : '';
  }
  return <Tippy {...computedProps} />;
};

export const _Dropdown = ({
  anchor,
  onClose,
  isOpen,
  children,
  fullWidth,
  ...props
}: _DropdownProps) => {
  const { styles } = useStyles(props);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <LazyTippy
      visible={isOpen}
      onClickOutside={onClose}
      ignoreAttributes
      placement="bottom"
      appendTo={() => document.body}
      interactive
      duration={CommonTheme.animation.duration}
      maxWidth="none"
      onShow={() => {
        setTimeout(() => setIsVisible(true));
      }}
      onHide={() => setIsVisible(false)}
      content={<Appearable isVisible={isVisible}>{children}</Appearable>}
      popperOptions={{
        modifiers: fullWidth
          ? [
              {
                enabled: true,
                fn: ({ state }) =>
                  set(state, 'styles.popper.width', `${state.rects.reference.width}px`),
                phase: 'beforeWrite',
                requires: ['computeStyles'],
              },
            ]
          : [],
      }}>
      <Wrapper style={styles}>{anchor}</Wrapper>
    </LazyTippy>
  );
};
