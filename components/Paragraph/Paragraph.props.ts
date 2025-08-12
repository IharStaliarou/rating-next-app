import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}
