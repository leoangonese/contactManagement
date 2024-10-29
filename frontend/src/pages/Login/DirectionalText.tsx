import { Link } from 'react-router-dom';

interface IDirectionalText {
  text: string;
  href: string;
}

const DirectionalText = ({ text, href }: IDirectionalText) => {
  return (
    <Link to={href}>
      <p className="text-white font-bold text-lg hover:cursor-pointer">{text}</p>
    </Link>
  );
};

export default DirectionalText;
