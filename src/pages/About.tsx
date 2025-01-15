import Image from "../assets/image.avif";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.webp";
import img7 from "../assets/img7.webp";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";

export default function About() {
  return (
    <div className="dark:bg-gray-900">
      <div className="grid md:grid-cols-2 space-x-2 px-8 py-16 items-center justify-between">
        <img src={Image} className="h-72 border rounded-lg items-center md:ml-20" />

        <div className="dark:text-white lg:mr-20">
          <h1 className="font-semibold text-5xl mb-6">About Us</h1>
          <p className="text-xl mb-4">Resume Builder is the ultimate tool for job seekers. Get access to:</p>
          <ul className="list-disc pl-6 text-base font-normal mb-4">
            <li>Our advanced resume builder tool</li>
            <li>Professionally designed resume templates and examples created by certified resume experts</li>
            <li>Expert tips from industry recruiters and career coaches</li>
          </ul>
          <p className="text-lg font-normal">
            The Resume Builder app shows you how to make an ideal resume, including what keywords and relevant
            experience you should use.
          </p>
        </div>
      </div>
      <div className="px-16 text-3xl mb-6 font-semibold dark:text-white">
        More than 1 million job seekers have created resumes with Resume Builder. They've landed jobs at companies
        including:
      </div>
      <div className="grid lg:grid-cols-6 text-black mx-16 items-center">
        <img src="" />
        <img src={img2} className="text-sm" />
        <img src={img3} className="text-sm" />
        <img src={img4} className="text-sm" />
        <img src={img5} className="text-sm" />
        <img src={img6} className="text-sm" />
        <img src={img7} className="text-sm" />
        <img src={img8} className="text-sm" />
        <img src={img9} className="text-sm" />
        <img src={img10} className="text-sm" />
        <img src={img11} className="text-sm" />
      </div>
      {/* <div>How It Works</div> */}
    </div>
  );
}
