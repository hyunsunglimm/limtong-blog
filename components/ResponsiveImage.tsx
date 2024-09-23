import Image from "next/image";

type ResponsiveImageProps = {
  src: string;
  alt: string;
};

export default function ResponsiveImage({ src, alt }: ResponsiveImageProps) {
  return (
    <div className="relative w-full pb-[75%]">
      <Image src={src} alt={alt} fill className="object-cover rounded-md" />
    </div>
  );
}
