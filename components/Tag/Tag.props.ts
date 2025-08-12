import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md';
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href?: string;
}
