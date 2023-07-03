import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const BlurImage = ({
  source,
  alt,
  loaded,
  setLoaded,
}: {
  source: string;
  alt: string;
  loaded: number;
  setLoaded: React.Dispatch<React.SetStateAction<any>>;
}) => {
  return (
    <>
      {loaded == 0 && (
        <div className="absolute text-lg font-light text-white rounded-lg animate-pulse bottom-5 right-4 z-[1]">
          <Cog8ToothIcon className="w-10 h-10 animate-spin"/>
        </div>
      )}
      <Image
        src={source}
        fill
        alt={alt}
        className={`w-full h-full`}
        style={{ objectFit: "contain" }}
        placeholder="empty"
        onLoadingComplete={() => setLoaded(1)}
      />
    </>
  );
};
export default BlurImage;
