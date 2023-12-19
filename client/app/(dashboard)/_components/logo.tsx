import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image height={20} width={98} alt="logo" src="/logo.svg" />
    </Link>
  );
};
