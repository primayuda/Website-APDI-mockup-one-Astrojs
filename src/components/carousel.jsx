import { Carousel } from "@material-tailwind/react";
 
export default function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="/images/activities/APDI-1.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/images/activities/APDI-2.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/images/activities/APDI-3.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="/images/activities/APDI-4.jpg"
        alt="image 4"
        className="h-full w-full object-cover"
      />
      <img
        src="/images/activities/APDI-5.jpg"
        alt="image 5"
        className="h-full w-full object-cover"
      />
      <img
        src="/images/activities/APDI-6.jpg"
        alt="image 6"
        className="h-full w-full object-cover"
      />
      <img
        src="/images/activities/APDI-7.jpg"
        alt="image 7"
        className="h-full w-full object-cover"
      />
      <img
        src="/images/activities/APDI-8.jpg"
        alt="image 8"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}