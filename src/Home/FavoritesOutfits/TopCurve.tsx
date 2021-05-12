import React from 'react';
// Components
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '../../components';
// Interface
interface TopCurveProps {
  footerHeight: number;
}
// TopCurve
const TopCurve = ({footerHeight}: TopCurveProps) => {
  const theme = useTheme();
  const size = Math.hypot(theme.borderRadii.xl);
  return (
    <Svg
      width={size}
      height={size}
      style={{
        position: 'absolute',
        bottom: footerHeight,
        right: 0,
      }}
      viewBox="0 0 1 1">
      <Path
        d="M 0 1 A 0 0, 0, 0, 0, 1, 0 L 1 1"
        fill={theme.colors.secondary}
      />
    </Svg>
  );
};
export default TopCurve;
