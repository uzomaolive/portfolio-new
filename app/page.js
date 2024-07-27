// import { Roboto } from "next/font/google";
// import Image from "next/image";
// import Link from "next/link";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "500", "700", "900"],
//   styles: ["italic", "normal"],
//   display: "swap",
// });

// const Home = () => {
//   return (
//     <div className={`roboto.classname h-screen w-full`}>
//       <div className="profile-picture w-60 h-60 rounded-full overflow-hidden absolute left-[43%] top-[28%]">
//         <Image
//           src="/olive.jpeg"
//           alt="Olive Uzoma"
//           width={500}
//           height={500}
//           className="object-cover"
//         />
//       </div>
//       <div className="upper-div h-2/5 bg-slate-200"></div>
//       <div className="lower-div flex flex-col justify-center items-center h-1/2">
//         <h1 className="text-5xl font-thin my-4 pt-20">
//           Olive <span className="uppercase font-medium">Uzoma</span>
//         </h1>
//         <p className={`roboto.classname mb-10 font-light`}>Software Engineer | WordPress Expert</p>
//         <p className=" w-1/2 text-center">
//           Hi, I'm Olive Uzoma, a software developer and your friendly WordPress
//           expert! I love the challenge of bringing ideas to life through code
//           and have a particular passion for React. Over the years, I've had the
//           pleasure of partnering with a wide range of organizations, helping
//           them leverage the power of WordPress to achieve their goals.
//           Currently, I'm supporting the important work of <Link href={`https://350.org`} className={`font-semibold text-blue-500`}>350.org</Link> as their
//           WordPress Support Consultant. When I'm not wrangling code, you can
//           usually find me exploring new hiking trails or taking care of my cats. If you have a Website
//           project in mind (big or small!), I'd love to chat and see how I can
//           help.
//         </p>
//         <Link href="mailto:olive.uzoma.c@gmail.com" className="bg-black text-white py-3 px-10 rounded mt-8 hover:bg-red-500">Send me an Email</Link>
//       </div>
//     </div>
//   );
// };

// export default Home;



import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  styles: ["italic", "normal"],
  display: "swap",
});

const Home = () => {
  return (
    <div className={`roboto.classname h-screen w-full`}>
      <div className="upper-div w-full h-3/6 bg-slate-200 flex justify-center items-center">
        <div className="profile-picture w-60 h-60 rounded-full overflow-hidden">
          <Image
            src="/olive.jpeg"
            alt="Olive Uzoma"
            width={240}
            height={240}
            className="object-cover rounded-full"
          />
        </div>
      </div>
      <div className="lower-div flex flex-col items-center w-full h-2/3 justify-center mt-[-40px]">
        <h1 className="text-5xl font-thin my-4">
          Olive <span className="uppercase font-medium">Uzoma</span>
        </h1>
        <p className={`roboto.classname mb-6 font-light text-center`}>Software Engineer | WordPress Expert</p>
        <p className="w-3/4 text-center">
          Hi, I'm Olive Uzoma, a software developer and your friendly WordPress
          expert! I love the challenge of bringing ideas to life through code
          and have a particular passion for React. Over the years, I've had the
          pleasure of partnering with a wide range of organizations, helping
          them leverage the power of WordPress to achieve their goals.
          Currently, I'm supporting the important work of <Link href={`https://350.org`} className={`font-semibold text-blue-500`}>350.org</Link> as their
          WordPress Support Consultant. When I'm not wrangling code, you can
          usually find me exploring new hiking trails or taking care of my cats. If you have a Website
          project in mind (big or small!), I'd love to chat and see how I can
          help.
        </p>
        <Link href="mailto:olive.uzoma.c@gmail.com" className="bg-black text-white py-3 px-10 rounded mt-8 hover:bg-red-500">Send me an Email</Link>
      </div>
    </div>
  );
};

export default Home;
