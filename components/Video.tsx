import { VideoPlayer } from "@/components/ui/video-thumbnail-player";

export default function VideoPlayerDemo() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <VideoPlayer
        thumbnailUrl="/5.webp"
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Example: YouTube embed URL with autoplay
        title=""
        description=""
        className="rounded-xl"
      />
    </div>
  );
}
