import { Link } from 'react-router-dom';

interface IDirectionalText {
  text: string;
  href: string;
  custom?: string;
}

const DirectionalText = ({ text, href, custom }: IDirectionalText) => {
  return (
    <Link to={href}>
      <p className={`text-white hover:text-yellow-300 duration-300 font-light text-lg hover:cursor-pointer ${custom}`}>{text}</p>
    </Link>
  );
};

export default DirectionalText;
