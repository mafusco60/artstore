import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b bg-cyan-800 text-white">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link
            rel="preload"
            as="image"
            type="image/svg+xml"
            href="/"
            className="flex-start"
          >
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={408}
              width={794}
              priority={true}
              className="h-[100px] w-auto max-w-[200px]"
            />
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
