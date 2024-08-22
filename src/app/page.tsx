import BentoBoxZoom from "@/components/bento-box-zoom";
export interface ImageType {
  src: string;
  alt: string;
}
const imagesArray: ImageType[] = [
  {
    src: "https://ca-times.brightspotcdn.com/dims4/default/29eb256/2147483647/strip/false/crop/2400x2400+0+0/resize/1486x1486!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F01%2Fb3%2Feb9ca76240bd9329345ee98987d5%2F1368175-env-metro-boomin-photo-1.jpg",
    alt: "Metro Boomin Photo 1",
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/06/19/16/03/new-york-4285256_1280.jpg",
    alt: "New York City",
  },
  {
    src: "https://salvemusic.com.ua/wp-content/uploads/2021/11/skepta1-1024x576.jpg",
    alt: "Skepta",
  },
  {
    src: "https://wallpapercave.com/wp/wp8608402.jpg",
    alt: "Wallpapercave Image",
  },
  {
    src: "https://sleeplessin.ch/img/gallery/newyork/one-world-trade-center-night.jpg",
    alt: "One World Trade Center at Night",
  },
  {
    src: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Unsplash Image 2",
  },
];

export default function Home() {
  return (
    <main className="bg-neutral-400">
      <section className="text-6xl h-screen flex justify-center items-center font-semibold">
        Prv Page
      </section>
      <BentoBoxZoom imagesArray={imagesArray} zoomSpeed="default" />
      <section className="text-6xl h-screen flex justify-center items-center font-semibold">
        Next Page
      </section>
    </main>
  );
}
