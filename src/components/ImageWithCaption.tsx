import Image from "next/image";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export default function ImageWithCaption({ src, alt, caption, width, height }: ImageWithCaptionProps) {
  return (
    <figure className="flex flex-col items-center">
      <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto object-cover" />
      <figcaption className="text-center text-secondary text-sm my-2">{caption}</figcaption>
    </figure>
  );
}
