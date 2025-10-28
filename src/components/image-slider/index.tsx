"use client";
import Slider, { Settings } from "react-slick";
import Image, { StaticImageData } from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = { listImage: string[] | StaticImageData[] };

const ImageBanner = ({ listImage }: Props) => {
  const settings: Settings = {
    speed: 700,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  if (listImage.length > 1) {
    return (
      <Slider {...settings} className="w-full">
        {listImage.map((image, index) => (
          <div key={index} className="relative w-full h-[400px]">
            <Image
              src={image}
              alt="image banner"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
    );
  } else {
    return (
      <div className="relative w-full h-[400px]">
        <Image
          src={listImage[0]}
          alt="image banner"
          fill
          className="object-cover"
        />
      </div>
    );
  }
};

export default ImageBanner;
