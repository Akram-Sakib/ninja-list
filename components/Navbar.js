import Image from "next/image";
import Link from "next/Link";

const Navbar = () => {
  
    return (
      <nav>
        <div className="logo">
          <Image width={128} height={77} src="/logo.png" alt="Logo" />
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/ninja">
          <a>Ninja List</a>
        </Link>
      </nav>
    );
}
 
export default Navbar;