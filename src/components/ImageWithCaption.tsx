import Image from "next/image";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
  widthPercentage?: number;
  minWidth?: number;
  className?: string;
}

export default function ImageWithCaption({
  src,
  alt,
  caption,
  widthPercentage = 100,
  className,
}: ImageWithCaptionProps) {
  return (
    <figure className="flex flex-col items-center w-full my-4">
      {/* Image container with responsive width */}
      <div
        className="w-full"
        style={{
          width: `${widthPercentage}%`, // Responsive width based on the parent container
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={
            100
          } /* These values represent percentage of the container’s width */
          height={
            75
          } /* Adjust the ratio accordingly or leave auto for responsive height */
          className={`w-full h-auto object-contain aspect-auto ${className}`}
        />
      </div>
      {caption && (
        <figcaption className="text-center text-caption text-sm mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
