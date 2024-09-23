import { FaGithub } from "react-icons/fa";

export default function GithubIcon({
  responsive = false,
}: {
  responsive?: boolean;
}) {
  return (
    <FaGithub
      className={`sm:w-[28px] sm:h-[28px] hover:text-my transition ${
        responsive ? "w-[24px] h-[24px]" : "w-[28px] h-[28px]"
      }`}
    />
  );
}
