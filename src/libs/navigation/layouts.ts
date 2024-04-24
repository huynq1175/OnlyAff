import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import type {Layout, Options} from 'react-native-navigation';

type CompIdOrLayout = string | Layout;

const stack = <P>(
  rawChildren: CompIdOrLayout | CompIdOrLayout[],
  id?: string,
  options?: Options
): Layout => {
  const childrenArray = isArray(rawChildren) ? rawChildren : [rawChildren];
  const children: any[] = childrenArray.map(child => component<P>(child));
  return {stack: {children, id, options}};
};

const component = <P>(
  compIdOrLayout: CompIdOrLayout,
  options?: Options,
  passProps?: P
): Layout<P> => {
  return isString(compIdOrLayout)
    ? {component: {name: compIdOrLayout, options, passProps}}
    : (compIdOrLayout as Layout<P>);
};

export {stack, component};
