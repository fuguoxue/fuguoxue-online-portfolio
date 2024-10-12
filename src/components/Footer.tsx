import { FaVimeoV, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="flex items-center space-x-4 mb-10">
        <Link href="https://vimeo.com/xuefuguo" target="_blank">
          <FaVimeoV className="w-6 h-6 text-primary hover:text-tag transition" />
        </Link>
        <Link href="https://www.linkedin.com/in/xuefuguo/" target="_blank">
          <FaLinkedinIn className="w-6 h-6 text-primary hover:text-tag transition" />
        </Link>
        <Link href="https://github.com/fuguoxue-nyu" target="_blank">
          <FaGithub className="w-6 h-6 text-primary hover:text-tag transition" />
        </Link>
        {/* <Link
          href="https://www.instagram.com/fuguosmediaspace/"
          target="_blank"
        >
          <FaInstagram className="w-6 h-6 text-primary hover:text-tag transition" />
        </Link> */}
      </div>
    </div>
  );
}
