import React from "react";
import HeroImage from "../assets/chorebucks.png";

const style = {
  main: `text-center bg-hero-pattern bg-no-repeat bg-center bg-cover bg-blue-300 flex flex-col items-center justify-start`,
  section: `mt-6 mb-6`,
  headingOne: `text-md p-1 font-bold md:text-3xl lg:text-4xl`,
  headingTwo: `text-md p-1 md:text-lg lg:text-lg`,
  appLogo: `mx-auto w-5/6 md:w-5/6 lg:w-5/6`,
};

const Hero = () => {
  return (
    <main className={style.main}>
      <section className={style.section}>
        <h2 className={style.headingOne}>
          🚀 Kids earn points for completing chores! 🎉
        </h2>
        <h4 className={style.headingTwo}>
          Complete your chores to add points to your bank!
        </h4>
      </section>
      <section>
        <img
          src={HeroImage}
          alt="Chore Bucks"
          className={style.appLogo}
        />
      </section>
    </main>
  );
}

export default Hero