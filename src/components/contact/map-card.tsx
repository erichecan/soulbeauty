import { Heart } from "lucide-react";
import { ScriptAccent } from "@/components/decor";
import { googleMapEmbedUrl } from "@/lib/maps";

export function MapCard({ address }: { address: string }) {
  return (
    <div className="flex flex-col self-start">
      <div className="relative h-[385px] overflow-hidden rounded-2xl border border-lavender-line bg-lavender-soft/70">
        <iframe
          src={googleMapEmbedUrl(address)}
          title={`Map of Soul Beauty Healing Center at ${address}`}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      </div>

      <div className="mt-3 flex items-end justify-center gap-1.5">
        <ScriptAccent lines={["Find Your Balance Here"]} className="text-[21px]" />
        <Heart className="mb-1 h-4 w-4 text-script" strokeWidth={1.5} />
      </div>
    </div>
  );
}
