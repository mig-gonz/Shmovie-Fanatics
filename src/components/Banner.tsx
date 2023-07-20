// import Linkedin from "../assets/linkedin.png";

// const Banner = () => {
//   return (
//     <div className="hero h-96 ">
//       <div className="hero-content text-center">
//         <div className="max-w-md">
//           <h1 className="text-5xl font-bold hero-header">Hello there</h1>
//           <p className="py-6 text-lg">
//             If you are digging this website 🤓 and would like to connect, here
//             is my <br />
//             <a
//               className="beautiful-header underline text-2xl"
//               href="https://www.linkedin.com/in/miguel-gonzalez-b50170282/"
//             >
//               <img
//                 src={Linkedin}
//                 alt="LinkedIn"
//                 className="w-8 h-8 inline-block"
//               />
//               &nbsp;LinkedIn
//             </a>
//           </p>
//           {/* <button className="btn btn-primary">Get Started</button> */}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Banner;
import Linkedin from "../assets/linkedin.png";

const Banner = () => {
  return (
    <div className="hero h-96 ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold hero-header">Hello there</h1>
          <p className="py-6 text-lg">
            If you are digging this website 🤓 and would like to connect, let me
            introduce myself. I'm a recent software boot camp graduate with a
            passion for web development and creating awesome user experiences.
            You can find me on&nbsp;
            <a
              className="beautiful-header underline text-2xl"
              href="https://www.linkedin.com/in/miguel-gonzalez-b50170282/"
            >
              <img
                src={Linkedin}
                alt="LinkedIn"
                className="w-8 h-8 inline-block"
              />
              &nbsp;LinkedIn
            </a>
            &nbsp;to know more about my journey and projects. Looking forward to
            connecting with you! 😊
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};
export default Banner;
