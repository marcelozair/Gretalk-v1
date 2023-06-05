import classNames from 'classnames';
import Loading from '../common/Loading';
import React, { ReactNode } from 'react';

interface ButtonProps {
  loading?: boolean;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit"
  style?: "ghost" | "normal" | 'dark'
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = (
  { children, loading = false, className, onClick, type = "button", style = "normal" }
) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        "px-6 py-2 rounded-md hover:shadow-md transition active:opacity-90 text-[15px] font-bold " + className,
        { 'bg-white text-primary': style === 'normal' },
        { 'bg-black text-white': style === 'dark' },
        { 'bg-transparent border-[2px] border-primary text-primary': style === 'ghost' },
      )}
    >
      {!loading && children}
      {loading && <Loading />}
    </button>
  );
}

export default Button;