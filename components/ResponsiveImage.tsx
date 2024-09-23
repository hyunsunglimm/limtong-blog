import Image from "next/image";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  priority: boolean;
};

export default function ResponsiveImage({
  src,
  alt,
  priority,
}: ResponsiveImageProps) {
  return (
    <div className="relative w-full pb-[75%]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        className="object-cover rounded-md"
        priority={priority}
      />
    </div>
  );
}