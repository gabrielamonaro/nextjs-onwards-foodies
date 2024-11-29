import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import Logo from "@/../assets/logo.png";
import classes from "./main-header.module.css";

const MainHeader: FC = () => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={Logo} alt="A plate with food on it" />
        NextLever Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/community"> Foodies Community </Link>
          </li>
          <li>
            <Link href="/meals"> Browse Meals </Link>
          </li>
          <li>
            <Link href="/meals/share"> Share Meal </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
