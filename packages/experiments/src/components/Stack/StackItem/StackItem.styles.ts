import { IThemedProps } from '../../../Foundation';
import { getGlobalClassNames } from '../../../Styling';
import { IStackItemProps, IStackItemStyles } from './StackItem.types';

const GlobalClassNames = {
  root: 'ms-StackItem'
};

const alignMap: { [key: string]: string } = {
  start: 'flex-start',
  end: 'flex-end'
};

export const styles = (props: IThemedProps<IStackItemProps>): IStackItemStyles => {
  const { grow, shrink, preventShrink, align, fillHorizontal, fillVertical, className, theme } = props;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      classNames.root,
      {
        width: fillHorizontal ? '100%' : 'auto',
        height: fillVertical ? '100%' : 'auto'
      },
      grow && { flexGrow: grow === true ? 1 : grow },
      (preventShrink || (!grow && !shrink)) && {
        flexShrink: 0
      },
      shrink &&
        !preventShrink && {
          flexShrink: 1
        },
      align && {
        alignSelf: alignMap[align] || align
      },
      className
    ]
    // TODO: this cast may be hiding some potential issues with styling and name
    //        lookups and should be removed
  } as IStackItemStyles;
};
