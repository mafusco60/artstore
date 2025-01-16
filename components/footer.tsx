import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-indigo-800">
      <div className="p-5 flex-center">
        <p>&copy;</p> 2021-{currentYear} {APP_NAME}.{" "}
        <span className="pl-3"></span> All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
