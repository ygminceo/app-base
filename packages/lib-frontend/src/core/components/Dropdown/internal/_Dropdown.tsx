import Tippy, { TippyProps } from '@tippyjs/react';
import { set } from 'lodash';
import React, { useState } from 'react';
import { Appearable, Wrapper } from '@lib/frontend/core/components';
import { _DropdownProps } from '@lib/frontend/core/components/Dropdown/internal/_Dropdown.model';
import { useStyles } from '@lib/frontend/core/hooks';

const LazyTippy = (props: TippyProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const computedProps = { ...props };
  computedProps.plugins = [
    {
      fn: () => ({
        onMount: () => setIsMounted(true),
        onHidden: () => setIsMounted(false),
      }),
    },
    ...(props.plugins || []),
  ];
  if (props.render) {
    const render = props.render;
    computedProps.render = (...args) => (isMounted ? render(...args) : '');
  } else {
    computedProps.content = isMounted ? props.content : '';
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
  return (
    <LazyTippy
      visible={isOpen}
      onClickOutside={onClose}
      ignoreAttributes
      placement="bottom"
      appendTo={() => document.body}
      interactive
      maxWidth="none"
      content={<Appearable isVisible={isOpen}>{children}</Appearable>}
      duration={0}
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
