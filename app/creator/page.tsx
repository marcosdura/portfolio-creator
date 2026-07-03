import Image from "next/image";
import Link from "next/link";
import CreatorFadeIn from "./CreatorFadeIn";

export const revalidate = 3600;

async function getLatestVideo() {
  try {
    // Step 1: get last 10 uploads
    const searchRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.YOUTUBE_CHANNEL_ID}&maxResults=10&order=date&type=video&key=${process.env.YOUTUBE_API_KEY}`
    )
    const searchData = await searchRes.json()
    const ids = searchData.items.map((i: any) => i.id.videoId).join(",")

    // Step 2: get duration for each to filter out Shorts (<= 60s)
    const detailRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${ids}&key=${process.env.YOUTUBE_API_KEY}`
    )
    const detailData = await detailRes.json()

    // Step 3: parse ISO 8601 duration and find first video > 60s
    const parseDuration = (iso: string) => {
      const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
      if (!match) return 0
      return (parseInt(match[1] ?? "0") * 3600) +
             (parseInt(match[2] ?? "0") * 60) +
             (parseInt(match[3] ?? "0"))
    }

    const video = detailData.items.find(
      (i: any) => parseDuration(i.contentDetails.duration) > 60
    )

    if (!video) return null

    return {
      videoId: video.id,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.maxres?.url ?? 
                 video.snippet.thumbnails.high.url,
      videoUrl: `https://www.youtube.com/watch?v=${video.id}`
    }
  } catch {
    return null
  }
}

const pillClasses =
  "group flex items-center gap-4 rounded-2xl border border-[#E8752B]/40 bg-[#1A1A1A] p-4 transition-all duration-200 hover:border-[#E8752B] active:scale-95";

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" fill="#FF0000" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
    </svg>
  );
}

function PlayIcon({
  className = "h-5 w-5",
  fill = "#E8752B",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={fill} aria-hidden="true">
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10 flex-shrink-0" aria-hidden="true">
      <defs>
        <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FEDA75" />
          <stop offset="30%" stopColor="#FA7E1E" />
          <stop offset="60%" stopColor="#D62976" />
          <stop offset="100%" stopColor="#962FBF" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-gradient)" />
      <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="white" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.4" fill="none" stroke="white" strokeWidth="1.6" />
      <circle cx="16.2" cy="7.8" r="1" fill="white" />
    </svg>
  );
}

function ArrowIcon() {
  return <span className="text-[#E8752B]">↗</span>;
}

export default async function CreatorPage() {
  const video = await getLatestVideo();

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[52vh] w-full overflow-hidden pt-10 md:min-h-[58vh] md:pt-14">
        <div className="absolute inset-0">
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 p-6 text-center text-sm uppercase tracking-widest text-zinc-500">
            [ hero photo: use an epic landscape photo of you ]
          </div>
          <Image
            src="/creator/hero.jpg"
            alt="Marcos Dura"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#0D0D0D]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0D0D0D] to-transparent md:h-32" />

        <div className="relative flex flex-col gap-3 px-6 md:px-10">
          <span className="creator-hero-animate text-sm font-bold uppercase tracking-[0.3em] text-[#E8752B]">
            VIVIENDO MI VIDA
          </span>
          <h1 className="creator-hero-animate creator-delay-1 text-5xl font-black leading-none text-white md:text-7xl">
            Marcos Dura
          </h1>
        </div>
      </section>

      {/* Links + video + cross-links: one consistent flow */}
      <section className="bg-[#0D0D0D] px-6 pb-24 pt-6 md:px-10">
        <div className="mx-auto max-w-lg">
          <div className="flex flex-col gap-4">
            <CreatorFadeIn>
              <a
                href="https://youtube.com/@marcosdura"
                target="_blank"
                rel="noopener noreferrer"
                className={pillClasses}
              >
                <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-zinc-700">
                  <div className="absolute inset-0 flex items-center justify-center text-center text-[6px] uppercase leading-tight text-zinc-400">
                    yt avatar
                  </div>
                  <Image src="/creator/yt-avatar.jpg" alt="YouTube" fill sizes="40px" className="object-cover" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="text-xs uppercase tracking-wide text-[#6B6B6B]">Canal de YouTube</span>
                  <span className="text-base font-semibold text-white">@marcosdura</span>
                </div>
                <div className="flex flex-shrink-0 items-center gap-2">
                  <YouTubeIcon />
                  <ArrowIcon />
                </div>
              </a>
            </CreatorFadeIn>

            <CreatorFadeIn delay={160}>
              <a
                href="https://instagram.com/marcosdurayt"
                target="_blank"
                rel="noopener noreferrer"
                className={pillClasses}
              >
                <InstagramIcon />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="text-xs uppercase tracking-wide text-[#6B6B6B]">Instagram</span>
                  <span className="text-base font-semibold text-white">@marcosdurayt</span>
                </div>
                <div className="flex-shrink-0">
                  <ArrowIcon />
                </div>
              </a>
            </CreatorFadeIn>
          </div>
        </div>

        <div className="mx-auto mt-7 mb-9 max-w-2xl">
          <CreatorFadeIn delay={240}>
            <h2 className="mb-3 text-2xl font-bold text-white">Último video</h2>
            <a
              href={video?.videoUrl ?? "#latest-video"}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl bg-[#1A1A1A] transition-colors duration-200 hover:bg-[#242424]"
            >
              <div className="relative aspect-video w-full">
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-center text-xs uppercase tracking-widest text-zinc-500">
                  [ video thumb ]
                </div>
                <Image
                  src={video?.thumbnail ?? "/creator/latest-thumb.jpg"}
                  alt="Último video"
                  fill
                  sizes="(min-width: 768px) 672px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/50 transition-all duration-200 group-hover:scale-110 group-hover:bg-black/70">
                    <PlayIcon className="h-6 w-6 translate-x-0.5" fill="white" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="font-semibold text-white">{video?.title ?? "Nombre del video aquí"}</p>
                <p className="mt-1 text-sm text-[#6B6B6B]">@marcosdurayt · YouTube</p>
                <span className="mt-3 block w-full rounded-xl bg-[#E8752B] py-3 text-center font-bold text-black transition-colors duration-200 group-hover:bg-[#F0954C]">
                  Ver en YouTube ↗
                </span>
              </div>
            </a>
          </CreatorFadeIn>
        </div>

        
        <div className="mx-auto mt-4 max-w-lg">
          <div className="flex flex-col gap-4">
            <CreatorFadeIn delay={320}>
              <Link href="/" className={pillClasses}>
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center text-2xl">💻</div>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="text-xs uppercase tracking-wide text-[#6B6B6B]">
                    También soy desarrollador
                  </span>
                  <span className="text-base font-semibold text-white">Ver mi portfolio</span>
                </div>
                <div className="flex-shrink-0">
                  <ArrowIcon />
                </div>
              </Link>
            </CreatorFadeIn>

            {/*
            <CreatorFadeIn delay={400}>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className={pillClasses}
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center text-2xl">🗺️</div>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="text-xs uppercase tracking-wide text-[#6B6B6B]">
                    Descubrí spots de aventura
                  </span>
                  <span className="text-base font-semibold text-white">Rumbo — Uruguay</span>
                </div>
                <div className="flex-shrink-0">
                  <ArrowIcon />
                </div>
              </a>
            </CreatorFadeIn>
            */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-sm text-[#6B6B6B]">© 2025 Marcos Dura</p>
        <Link href="/" className="mt-1 inline-block text-sm text-[#6B6B6B] underline-offset-4 hover:underline">
          marcosdura.com
        </Link>
      </footer>
    </main>
  );
}
