import Section from "./Section";
import couplePhoto from "@/assets/couple-photo.jpg";

const CouplePhoto = () => {
  return (
    <Section className="flex justify-center items-center py-12 md:py-20">
      <div className="max-w-md md:max-w-lg lg:max-w-xl w-full">
        <img
          src={couplePhoto}
          alt="Paula i Adrià"
          className="w-full h-auto object-cover grayscale-[20%] contrast-[0.95]"
          loading="lazy"
        />
      </div>
    </Section>
  );
};

export default CouplePhoto;