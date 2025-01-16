"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <header className="w-full border-b bg-cyan-800 text-white items-center justify-center">
        <div className="wrapper flex-between">
          <div className="flex-start">
            <Link href="/" className="flex-start ">
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
        </div>
      </header>

      <div className="p-6 rounded-lg shadow-md w-1/3 text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested resource</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
