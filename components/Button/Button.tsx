'use client';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import cn from 'classnames';
import { IButtonProps } from './Button.props';
import styles from './Button.module.css';

export const Button = ({
  children,
  arrow = 'none',
  appearance,
  className,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <ArrowForwardIosIcon
          sx={{ fontSize: 14, transition: 'all 0.2s' }}
          className={cn(styles.arrow, className, {
            [styles.arrow]: arrow === 'right',
            [styles.down]: arrow === 'down',
          })}
        />
      )}
    </button>
  );
};
