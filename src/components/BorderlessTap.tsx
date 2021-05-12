import React from 'react';
// Modules
import Animated, {
  add,
  and,
  call,
  clockRunning,
  cond,
  debug,
  eq,
  greaterThan,
  neq,
  not,
  set,
  startClock,
  stopClock,
  useCode,
  useValue,
} from 'react-native-reanimated';
import {
  useTapGestureHandler,
  useClock,
} from 'react-native-redash/lib/module/v1';
import {State, TapGestureHandler} from 'react-native-gesture-handler';
// Interface
interface BorderlessTapProps {
  onPress: () => void;
  children: React.ReactNode;
}
// BorderlessTap
const BorderlessTap = ({onPress, children}: BorderlessTapProps) => {
  const clock = useClock();
  const start = useValue(0);
  const opacity = useValue(0);
  const {gestureHandler, state} = useTapGestureHandler();
  useCode(
    () => [
      cond(and(not(clockRunning(clock)), eq(state, State.BEGAN)), [
        startClock(clock),
        set(start, clock),
      ]),
      cond(neq(state, State.BEGAN), stopClock(clock)),
      cond(eq(state, State.END), [call([], onPress)]),
      set(
        opacity,
        cond(
          and(greaterThan(clock, add(start, 100)), clockRunning(clock)),
          0.5,
          1,
        ),
      ),
    ],
    [],
  );
  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View style={{opacity}}>{children}</Animated.View>
    </TapGestureHandler>
  );
};
export default BorderlessTap;
