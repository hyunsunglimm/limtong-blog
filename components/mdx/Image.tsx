/* eslint-disable @next/next/no-img-element */
type ImageProps = {
  src: string;
  alt: string;
};

export const Image = ({ src, alt }: ImageProps) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`mx-auto mt-12 rounded-md ${alt ? "mb-0" : "mb-12"}`}
      />
      {alt !== "" && (
        <span className="mb-8 mt-2 block w-full text-center text-sm text-gray-400">
          {alt}
        </span>
      )}
    </>
  );
};
