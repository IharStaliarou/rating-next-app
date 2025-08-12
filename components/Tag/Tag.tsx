import cn from 'classnames';
import { ITagProps } from './Tag.props';
import styles from './Tag.module.css';

export const Tag = ({
  children,
  size = 'sm',
  color = 'ghost',
  href,
  className,
  ...props
}: ITagProps) => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.sm]: size === 'sm',
        [styles.md]: size === 'md',
        [styles.red]: color === 'red',
        [styles.gray]: color === 'gray',
        [styles.ghost]: color === 'ghost',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
