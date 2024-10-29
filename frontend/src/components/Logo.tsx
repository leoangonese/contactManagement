interface ILogoProps {
  size: 'md' | 'lg';
}

const Logo = ({ size }: ILogoProps) => {
  return (
    <div
      className={`rounded-full flex justify-center items-center bg-white shadow-md shadow-[#00000020]
        ${size === 'lg' ? 'w-[130px] h-[130px] text-3xl' : 'w-[65px] h-[65px] text-xl'} `}
    >
      Logo
    </div>
  );
};

export default Logo;
