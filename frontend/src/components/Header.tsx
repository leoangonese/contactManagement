import Logo from './Logo';

const Header = () => {
  return (
    <div className="w-screen flex justify-center items-center bg-green-500 py-2 fixed top-0">
      <Logo size="md" />
    </div>
  );
};

export default Header;
