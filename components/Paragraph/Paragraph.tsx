import cn from 'classnames';
import { IParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';

export const Paragraph = ({
  children,
  size = 'md',
  className,
  ...props
}: IParagraphProps) => {
  return (
    <p
      className={cn(styles.paragraph, className, {
        [styles.sm]: size === 'sm',
        [styles.md]: size === 'md',
        [styles.lg]: size === 'lg',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
