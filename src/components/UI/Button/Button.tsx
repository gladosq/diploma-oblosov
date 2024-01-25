import clsx, {ClassValue} from 'clsx';
import s from './Button.module.scss';
import {ReactNode} from 'react';

type ButtonType = 'primary' | 'secondary' | 'red';

type ButtonProps = {
  children?: ReactNode;
  viewType?: ButtonType;
  onClick?: () => void;
  isDisabled?: boolean;
  className?: ClassValue;
};

export default function Button(
  {children, isDisabled = false, onClick, viewType = 'primary', className}: ButtonProps
) {
  const buttonClasses = clsx(s.button, {
    [s.buttonPrimary]: viewType === 'primary',
    [s.buttonSecondary]: viewType === 'secondary',
    [s.buttonRed]: viewType === 'red',
    [s.buttonDisabled]: isDisabled
  }, className ?? undefined);

  return (
    <button
      className={clsx(s.button, buttonClasses, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
