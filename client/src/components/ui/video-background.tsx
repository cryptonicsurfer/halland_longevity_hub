import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface VideoBackgroundProps {
  videoSrc: string;
  children: React.ReactNode;
  overlay?: boolean;
  overlayOpacity?: number;
  overlayColor?: string;
}

export function VideoBackground({
  videoSrc,
  children,
  overlay = true,
  overlayOpacity = 0.3,
  overlayColor = "005F73",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {overlay && (
        <div 
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: `#${overlayColor}`,
            opacity: overlayOpacity
          }}
        ></div>
      )}
      
      <motion.div 
        className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
