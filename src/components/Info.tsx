import { FaGithub } from "react-icons/fa";
import Linkedin from "../assets/linkedin.png";
import fitness from "../assets/fitness.png";
import profile from "../assets/profile.png";

const Info = () => {
  return (
    <div className=" bg-white py-24 sm:py-32 border-x-4 border-purple-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold font-mono info-header tracking-tight text-gray-900 sm:text-4xl">
                Hello there
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                If you are digging this website 🤓 and would like to connect,
                let me introduce myself. I'm a recent software boot camp
                graduate with a passion for web development and creating awesome
                user experiences. You can find me on&nbsp;
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
                &nbsp;to know more about my journey and projects. Looking
                forward to connecting with you! 😊
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 flex">
                    Checkout my code:
                    <a
                      href="https://github.com/mig-gonz"
                      className="flex items-center text-white hover:text-gray-400 focus:text-gray-400 ml-5"
                    >
                      <FaGithub className="h-5 w-5 text-indigo-600" />
                    </a>
                  </dt>
                  <dt className="inline font-semibold text-gray-900 flex mt-5">
                    Email me at:
                    <a
                      href="mailto:mig256@outlook.com"
                      className="flex items-center beautiful-header hover:text-gray-400 focus:text-gray-400 ml-5"
                    >
                      mig256@outlook.com
                    </a>
                  </dt>
                  <dt className="inline font-semibold text-gray-900 flex mt-5">
                    Checkout another project:
                    <a
                      href="https://aws-deployment.d24dzy57n244p8.amplifyapp.com/"
                      className="flex items-center beautiful-header hover:text-gray-400 focus:text-gray-400 ml-5"
                    >
                      NodeShark
                    </a>
                  </dt>
                  <dt className="inline font-semibold text-gray-900 flex mt-5">
                    Visit TMDb to use the same api for your app:
                    <a
                      href="hhttps://developer.themoviedb.org/docs/getting-started"
                      className="flex items-center beautiful-header hover:text-gray-400 focus:text-gray-400 ml-5"
                    >
                      TMDb API
                    </a>
                  </dt>
                </div>
              </dl>
            </div>
          </div>
          <a href="https://github.com/mig-gonz" target="_blank">
            <img
              src={profile}
              alt="profile screen shot"
              className="rounded-xl border-2 border-purple-950"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Info;
