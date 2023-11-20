import { RiLinkedinLine, RiFacebookLine, RiGithubLine } from "react-icons/ri";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-2 text-lg">
      <Link
        href={""}
        className="hover:text-accent text-xl hover:bg-white/10 hover:backdrop-blur-sm  transition-all duration-400 p-3 rounded-full"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={""}
        className="hover:text-accent text-xl hover:bg-white/10 hover:backdrop-blur-sm  transition-all duration-400 p-3 rounded-full"
      >
        <RiFacebookLine />
      </Link>

      <Link
        href={""}
        className="hover:text-accent text-xl hover:bg-white/10 hover:backdrop-blur-sm  transition-all duration-400 p-3 rounded-full"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};
export default Socials;
