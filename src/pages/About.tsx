import { Carousel, CarouselItem, CarouselContent } from "@/components/ui/carousel";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img6 from "../assets/img6.jpg";
import img10 from "../assets/img10.webp";
import Image from "../assets/image.avif";
import Image2 from "../assets/logo3.webp";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div className=" dark:bg-gray-900 overflow-x-hidden">
      <div className="grid md:grid-cols-2 space-x-2 mx-8 mt-4 items-center lg:mr-16">
        <div className="flex justify-center">
          <img src={Image} className="h-60 lg:h-72 rounded-lg items-center ml-3 md:ml-0 lg:ml-12 xl:ml-36" />
        </div>

        <div className="dark:text-white xl:pr-20">
          <h1 className="font-bold mt-6 text-5xl mb-6 text-gray-700 dark:text-white">
            About <span className="text-teal-500">Us</span>
          </h1>
          <p className="text-lg lg:text-xl mb-4 font-semibold">
            Resume Builder is the ultimate tool for job seekers. Get access to:
          </p>
          <ul className="list-disc pl-6 lg:pl-6 text-sm lg:text-base font-medium mb-4 leading-8 xl:leading-9 text-gray-700 dark:text-white ">
            <li>Our advanced resume builder tool</li>
            <li>Professionally designed resume templates and examples created by certified resume experts</li>
            <li>Expert tips from industry recruiters and career coaches</li>
          </ul>
          <p className="text-base lg:text-lg font-medium sm:mx-4 md:mx-0 lg:mb-6">
            The Resume Builder app shows you how to make an ideal resume, including what keywords and relevant
            experience you should use.
          </p>
        </div>
      </div>
      <div className="px-9 mt-6 lg:mx-12 text-lg lg:text-3xl mb-6 font-semibold dark:text-white lg:leading-relaxed md:px-16 md:mb-10 xl:mb-16">
        More than 1 million job seekers have created resumes with Resume Builder. They've landed jobs at companies
        including:
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 text-black mx-20 md:mx-24 items-center gap-6 md:gap-4 md:pl-12 lg:pl-1 lg:gap-x-6 lg:mt-9 dark:bg-white dark:py-4">
        <img src={img1} className="h-4 sm:h-7 dark:pl-4 md:ml-4" />
        <img src={img2} className="h-4 sm:h-8" />
        <img src={img10} className="h-3 sm:h-6 lg:ml-3 ml-2" />
        <img src={img4} className="h-4 sm:h-8 r-2" />
        <img src={img5} className="h-3 sm:h-6 mb-2 ml-2" />
        <img src={img6} className="h-5 sm:h-10" />
      </div>
      <div>
        <div className="flex items-center justify-center">
          <p className="border-b-2 border-black dark:border-white font-bold text-3xl text-center my-12 dark:text-white dark:mt-8 md:mt-16 lg:mt-24">
            How It <span className="text-teal-500">Works</span>
          </p>
        </div>
        <div className="grid md:grid-cols-2 col-span-3 items-center mx-20">
          <div className="flex justify-center">
            <img src={Image2} className="rounded-xl md:px-2 px-2 mb-4" />
          </div>

          <div className="md:mx-4 min-w-44 lg:max-w-md">
            <Carousel
              plugins={[plugin.current]}
              className=""
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-none">
                      <CardContent className="flex aspect-square items-center justify-center">
                        <div className="text-center">
                          {index === 0 && (
                            <div>
                              <div className="text-2xl mb-2">1. Customize your resume template</div>
                              <p className="mb-10">Choose between 5+ resume templates.</p>
                            </div>
                          )}
                          {index === 1 && (
                            <div>
                              <div className="text-2xl mb-2">2. Build your resume</div>
                              <p className="mb-10">Get guidance to build your resume.</p>
                            </div>
                          )}
                          {index === 2 && (
                            <div>
                              <div className="text-2xl mb-2">3. Download resume</div>
                              <p className="mb-10">Finalize your resume and download it.</p>
                            </div>
                          )}
                          <Button className="bg-teal-500">Build Resume Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
