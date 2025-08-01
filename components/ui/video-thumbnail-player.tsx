import * as React from "react";
import { cn } from "@/lib/utils";
import { Play, X } from "lucide-react";

// Interface for component props
interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  description?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
}

const VideoPlayer = React.forwardRef<HTMLDivElement, VideoPlayerProps>(
  (
    {
      className,
      thumbnailUrl,
      videoUrl,
      title,
      description,
      aspectRatio = "16/9",
      ...props
    },
    ref
  ) => {
    // State to manage the visibility of the video modal
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    // Effect to handle the 'Escape' key press for closing the modal
    React.useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsModalOpen(false);
        }
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    }, []);

    // Prevent body scroll when modal is open
    React.useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);


    return (
      <>
        <div
          ref={ref}
          className={cn(
            "group relative cursor-pointer overflow-hidden rounded-lg shadow-lg",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className
          )}
          style={{ aspectRatio }}
          onClick={() => setIsModalOpen(true)}
          onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
          tabIndex={0}
          aria-label={`Play video: ${title}`}
          {...props}
        >
          {/* Thumbnail Image */}
          <img
            src={thumbnailUrl}
            alt={`Thumbnail for ${title}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
              <Play className="h-8 w-8 fill-white text-white" />
            </div>
          </div>

          {/* Title and Description */}
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            {description && (
              <p className="mt-1 text-sm text-white/80">{description}</p>
            )}
          </div>
        </div>

        {/* Video Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex animate-in fade-in-0 items-center justify-center bg-black/80 backdrop-blur-sm"
            aria-modal="true"
            role="dialog"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close video player"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Video Iframe */}
            <div className="w-full max-w-4xl aspect-video p-4">
               <iframe
                    src={videoUrl}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full rounded-lg"
                ></iframe>
            </div>
          </div>
        )}
      </>
    );
  }
);
VideoPlayer.displayName = "VideoPlayer";

export { VideoPlayer };
