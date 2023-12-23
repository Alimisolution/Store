import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function About() {
  return (
    <>
      <Header />
      <div className="px-4 md:px-24 md:flex justify-between flex-row-reverse space-y-12 md:space-y-0 my-14 gap-6">
        <div className="md:w-[45%]">
          <h1 className="font-bold text-2xl sm:text-4xl text-yellow-900 ">
            Our Story
          </h1>
          <p className="mt-1 w-28 h-[3px] bg-yellow-900 block color-yellow-900"></p>
          <p className="mt-7 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            similique placeat, ipsum sit assumenda, corrupti culpa nisi
            veritatis laboriosam quas perspiciatis, nesciunt quidem cumque quos
            voluptatibus. Ipsa quibusdam dolorum laborum! similique placeat,
            ipsum sit assumenda, corrupti culpa nisi veritatis laboriosam quas
            perspiciatis, nesciunt quidem cumque quos voluptatibus. Ipsa
            quibusdam dolorum laborum! sit assumenda, corrupti culpa nisi
            veritatis laboriosam quas perspiciatis, nesciunt quidem cumque quos
            voluptatibus. Ipsa quibusdam dolorum laborum!
          </p>
        </div>
        <div className="md:w-[45%]">
          <img src="/img/pro13.jpg" alt="about-img" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
