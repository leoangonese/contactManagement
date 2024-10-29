import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

interface IInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
  type?: 'password' | 'text';
}

const Input = ({ onChange, value, label, placeholder, type }: IInputProps) => {
  const [inputType, setInputType] = useState<'password' | 'text'>(type ? type : 'text');

  return (
    <div className="w-full mt-4 relative">
      <p className="text-white pl-[13px] font-medium text-lg">{label}</p>
      <input
        className="w-full h-[50px] text-lg rounded-xl focus:outline-none py-[20px] px-[13px] shadow-md shadow-[#00000020]"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        type={inputType}
        value={value}
      />
      {type === 'password' ? (
        inputType === 'password' ? (
          <FaRegEyeSlash
            className="w-6 h-6 absolute right-2 bottom-2 text-gray-500"
            onClick={() => setInputType('text')}
          />
        ) : (
          <FaRegEye
            className="w-6 h-6 absolute right-2 bottom-2 text-gray-500"
            onClick={() => setInputType('password')}
          />
        )
      ) : null}
    </div>
  );
};

export default Input;
