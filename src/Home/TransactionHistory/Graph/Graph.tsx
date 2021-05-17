import React from 'react';
// Modules
import {Dimensions} from 'react-native';
import {lerp} from './Scale';
// Components
import {Box, useTheme} from '../../../components';
import {Theme} from '../../../components/Theme';
import Underlay, {MARGIN} from './Underlay';
// Interface
export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme['colors'];
}
interface GraphProps {
  data: DataPoint[];
}
// Constants
const {width: wWidth} = Dimensions.get('window');
const aspectRatio = 195 / 305;
// Graph
const Graph = ({data}: GraphProps) => {
  const theme = useTheme();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];
  const values = data.map((p) => p.value);
  const dates = data.map((p) => p.date);
  const step = width / data.length;
  const minX = Math.min(...dates);
  const maxX = Math.max(...dates);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  return (
    <Box marginTop="xl" paddingBottom={MARGIN} paddingLeft={MARGIN}>
      <Underlay minY={minY} maxY={maxY} dates={dates} step={step} />
      <Box width={width} height={height}>
        {data.map((point, i) => {
          if (point.value === 0) {
            return null;
          }
          return (
            <Box
              key={point.date}
              position="absolute"
              left={i * step}
              bottom={0}
              width={step}
              height={lerp(0, height, point.value / maxY)}>
              <Box
                position="absolute"
                top={0}
                bottom={0}
                left={theme.spacing.m}
                right={theme.spacing.m}
                backgroundColor={point.color}
                opacity={0.1}
                borderTopLeftRadius="m"
                borderTopRightRadius="m"
              />
              <Box
                position="absolute"
                top={0}
                height={32}
                left={theme.spacing.m}
                right={theme.spacing.m}
                backgroundColor={point.color}
                borderRadius="m"
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default Graph;
