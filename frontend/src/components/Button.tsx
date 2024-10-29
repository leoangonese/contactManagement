import { ReactNode } from 'react';

interface IButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

const Button = ({ onClick, children, className }: IButtonProps) => {
  return (
    <button
      className={`w-full h-[50px] rounded-2xl bg-red-500 mt-6 shadow-md shadow-[#00000020] flex justify-center items-center ${className}`}
      onClick={() => onClick()}
    >
      <p className="text-white font-bold text-3xl">{children}</p>
    </button>
  );
};

export default Button;
