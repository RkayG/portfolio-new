"use client";

import { useState } from "react";

interface ProjectGalleryProps {
  images: string[];
  imageAlt: string;
  videoUrl?: string;
}

export function ProjectGallery({ images, imageAlt, videoUrl }: ProjectGalleryProps) {
  // If video exists, it's at index 0, images start at index 1
  const totalItems = videoUrl ? images.length + 1 : images.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const isVideo = videoUrl && currentIndex === 0;

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const previousItem = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const selectItem = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-handwriting text-4xl font-bold text-[#5D4037] dark:text-[#8D6E63]">
        Project Gallery
      </h2>
      <div className="relative w-full">
        <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
          {isVideo ? (
            <video
              className="w-full h-full object-cover"
              src={videoUrl}
              controls
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              className="w-full h-full object-cover"
              src={images[videoUrl ? currentIndex - 1 : currentIndex]}
              alt={imageAlt}
            />
          )}
        </div>
        {totalItems > 1 && (
          <>
            <div className="absolute top-1/2 left-4 -translate-y-1/2">
              <button
                onClick={previousItem}
                className="flex items-center justify-center size-10 rounded-full bg-white/70 dark:bg-black/50 text-[#5D4037] dark:text-white hover:bg-white dark:hover:bg-black/70 transition-colors shadow-md"
                aria-label="Previous item"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2">
              <button
                onClick={nextItem}
                className="flex items-center justify-center size-10 rounded-full bg-white/70 dark:bg-black/50 text-[#5D4037] dark:text-white hover:bg-white dark:hover:bg-black/70 transition-colors shadow-md"
                aria-label="Next item"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </>
        )}
      </div>
      {totalItems > 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {videoUrl && (
            <div
              onClick={() => selectItem(0)}
              className={`aspect-video overflow-hidden rounded-lg cursor-pointer border-2 transition-colors ${
                currentIndex === 0
                  ? "border-[#8D6E63] shadow-md"
                  : "border-transparent hover:border-[#8D6E63]/50"
              }`}
            >
              <div className="relative w-full h-full bg-gray-900 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-4xl">play_circle</span>
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          )}
          {images.map((image, index) => {
            const itemIndex = videoUrl ? index + 1 : index;
            return (
              <div
                key={index}
                onClick={() => selectItem(itemIndex)}
                className={`aspect-video overflow-hidden rounded-lg cursor-pointer border-2 transition-colors ${
                  itemIndex === currentIndex
                    ? "border-[#8D6E63] shadow-md"
                    : "border-transparent hover:border-[#8D6E63]/50"
                }`}
              >
                <img
                  className={`w-full h-full object-cover transition-opacity ${
                    itemIndex === currentIndex ? "opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
                  src={image}
                  alt={`${imageAlt} - Image ${index + 1}`}
                />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

