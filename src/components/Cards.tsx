import React from "react";
import Image, { StaticImageData } from "next/image";

export function Cards({
  image,
  title,
  tags,
  description,
  children,
}: {
  image?: {
    src: string | StaticImageData;
    height: number;
    width: number;
    alt: string;
  };
  title: string;
  tags?: string[];
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <article className="border border-border flex flex-col">
      {image && (
        <div className="border-b border-border overflow-hidden">
          <Image
            src={image.src}
            height={image.height}
            width={image.width}
            alt={image.alt}
            className="w-full object-cover h-48"
          />
        </div>
      )}
      <div className="p-4 flex flex-col gap-3 flex-1">
        {tags && tags.length > 0 && (
          <p className="text-xs text-muted-foreground">{tags.join(" ")}</p>
        )}
        <h3 className="font-bold text-lg">{title}</h3>
        {description && (
          <p className="text-xs text-muted-foreground flex-1">{description}</p>
        )}
        {children && (
          <div className="flex gap-2 flex-wrap mt-auto pt-2">{children}</div>
        )}
      </div>
    </article>
  );
}
