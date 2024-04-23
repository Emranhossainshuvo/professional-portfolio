import React from 'react'
import { FaGlobe, FaAddressCard, FaServer, FaUserLock } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I can do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Frontend"
          des="As a frontend developer, I love creating dynaic and functional web applications also I love to add animation to my work."
          icon={<FaAddressCard />}
        />
        <Card
          title="Backend"
          des="I love working with backend because it's more techiee than the frontend although I'm not much good at it but I love working with it."
          icon={<FaServer />}
        />
        <Card
          title="MERN stack"
          des="Besically I am a MERN stact developer I use MongoDB Express React Node etc for my development."
          icon={<SiProgress />}
        />
        <Card
          title="Authentication"
          des=""
          icon={<FaUserLock />}
        />
        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features