"use client";

import { ImageType } from "@/app/page";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface BentoBoxZoomProps {
  imagesArray: ImageType[];
  zoomSpeed?: "sm" | "default" | "lg";
  backgroundColor?: string;
}
export default function BentoBoxZoom({
  imagesArray,
  zoomSpeed = "default",
  backgroundColor = "bg-neutral-900",
}: BentoBoxZoomProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale4x = useTransform(scrollYProgress, [0, 1], [1, 4]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-[300vh] relative",
        zoomSpeed === "sm" && "h-[400vh]",
        zoomSpeed === "default" && "h-[300vh]",
        zoomSpeed === "lg" && "h-[200vh]"
      )}
    >
      <div
        className={cn(
          "h-screen sticky top-0 bg-neutral-900 overflow-hidden",
          backgroundColor
        )}
      >
        <motion.div
          style={{
            scale: scale4x,
          }}
          className=" size-full flex justify-center items-center p-20"
        >
          <div className="grid grid-rows-6 grid-cols-12 size-full gap-6">
            {imagesArray.map((img, index) => (
              <motion.div
                key={index}
                className={cn(
                  "relative row-span-2 col-span-4 opacity-80 hover:opacity-95 transition duration-200",
                  index === 0 && "row-span-4",
                  index === 4 && "row-span-4",
                  index === 5 && "col-span-8"
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover rounded-md"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
