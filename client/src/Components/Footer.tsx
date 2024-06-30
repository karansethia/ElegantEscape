type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <div className="bg-blue-700 py-8">
      <div className="container flex mx-auto flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          Elegant Escapes
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
