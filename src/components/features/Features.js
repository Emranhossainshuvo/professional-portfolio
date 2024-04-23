import React from 'react'
import { FaGlobe, FaAddressCard, FaBug, FaCloudUploadAlt, FaServer, FaUserLock } from "react-icons/fa";
import { SiProgress} from "react-icons/si";
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
          des="In today's world authentication is a must for an online platform. I use firebse for authenticate use's in the frontent and JWT in the backend"
          icon={<FaUserLock />}
        />
        <Card
          title="Debug"
          des="After having and solving a lot's of bugs now I became familiar with debugging and somewhat I love finding and fixing bugs. and yeah here are alway some annoying bugs that I can't solve, but overall I like solving bugs."
          icon={<FaBug />}
        />
        <Card
          title="Hosting Websites"
          des="I'm able to host web application various platforms like, vercel, firebase, netlify etc. yet, I'm learing to host application on more platforms."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features