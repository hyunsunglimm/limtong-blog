import { FaExternalLinkAlt } from "react-icons/fa";

export default function LinkIcon({
  responsive = false,
}: {
  responsive?: boolean;
}) {
  return (
    <FaExternalLinkAlt
      className={`sm:w-[28px] sm:h-[28px] hover:text-my transition ${
        responsive ? "w-[24px] h-[24px]" : "w-[28px] h-[28px]"
      }`}
    />
  );
}
