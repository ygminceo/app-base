import React, { useMemo, useState } from 'react';
import { Icon, Pressable, Text, Wrapper } from '@lib/frontend/core/components';
import { useIsMobile, useStyles } from '@lib/frontend/core/hooks';
import { _TabBarProps } from '@lib/frontend/routing/containers/Tabs/internal/_TabBar.model';
import {
  getTabBarItemStyle,
  getTabBarStyle,
} from '@lib/frontend/routing/containers/Tabs/internal/_TabBarTop.style';

export const _TabBarTop = ({ active, routes, ...props }: _TabBarProps) => {
  const { styles } = useStyles(props, [getTabBarStyle]);
  const { styles: tabBarItemStyle } = useStyles({}, [getTabBarItemStyle]);
  const isMobile = useIsMobile();

  const [width, setWidth] = useState<number>(0);
  const markerWidth = useMemo(() => width / routes.length, [routes]);
  const markerLeft = useMemo(() => active * (markerWidth || 0), [active, markerWidth]);

  return (
    <Wrapper
      style={styles}
      relative
      selfStart={!isMobile}
      onMeasure={({ width }) => setWidth(width)}>
      {markerWidth && (
        <Wrapper
          width={markerWidth}
          left={markerLeft}
          primary
          light
          round
          absolute
          top={0}
          bottom={0}
          animatable={{ transition: ['left'] }}
        />
      )}

      <Wrapper row fullWidth spacingTight>
        {routes.map((route, i) => {
          const isActive = i === active;
          return (
            <Pressable key={i} isDisabled={isActive} onPress={route.onPress}>
              <Wrapper row spacingTight alignCenter>
                {route.props && route.props.icon && (
                  <Icon icon={route.props.icon} primary={isActive} />
                )}
                <Text primary={isActive}>{route.pathname}</Text>
              </Wrapper>
            </Pressable>
          );
        })}
      </Wrapper>
    </Wrapper>
  );
};

// import React, { useMemo, useState } from 'react';
// import { Text, Wrapper } from '@lib/frontend/core/components';
// import { useIsMobile, useStyles } from '@lib/frontend/core/hooks';
// import { _TabBarProps } from '@lib/frontend/routing/containers/Tabs/internal/_TabBar.model';
// import {
//   getTabBarItemStyle,
//   getTabBarStyle,
// } from '@lib/frontend/routing/containers/Tabs/internal/_TabBarTop.style';

// export const _TabBarTop = ({ active, routes, ...props }: _TabBarProps) => {
//   const { styles } = useStyles(props, [getTabBarStyle]);
//   const { styles: tabBarItemStyle } = useStyles({}, [getTabBarItemStyle]);
//   const isMobile = useIsMobile();

//   const [width, setWidth] = useState<number>(0);
//   const markerWidth = useMemo(() => width / routes.length, [routes]);
//   const markerLeft = useMemo(() => active * (markerWidth || 0), [active, markerWidth]);

//   return (
//     <Wrapper
//       style={styles}
//       relative
//       selfStart={!isMobile}
//       onMeasure={({ width }) => setWidth(width)}>
//       {markerWidth && (
//         <Wrapper
//           width={markerWidth}
//           left={markerLeft}
//           primary
//           light
//           round
//           absolute
//           top={0}
//           bottom={0}
//           animatable={{ transition: ['left'] }}
//         />
//       )}

//       <Wrapper row fullWidth>
//         {routes.map((route, i) => {
//           const isActive = i === active;
//           return (
//             <Wrapper
//               key={i}
//               style={tabBarItemStyle}
//               grow
//               shrink
//               onPress={route.onPress}
//               round
//               pLeft
//               pRight
//               pTopTight
//               pBottomTight>
//               <Text primary={isActive} animatable={{ transition: 'color' }} center>
//                 {route.pathname}
//               </Text>
//             </Wrapper>
//           );
//         })}
//       </Wrapper>
//     </Wrapper>
//   );
// };
