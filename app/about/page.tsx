import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <section className="about text-white py-16 px-16  w-full">
      <h1 className={title()}>About</h1>
      <p className="mt-4 text-lg text-gray-700">
        Welcome to Ultra Tech! We are committed to building cutting-edge tech
        solutions for the modern world.
      </p>
      <p>
        Ultra Tech Solutions is a leading technology company specializing in
        software development, cloud solutions, and IT consulting. Our mission is
        to empower businesses with innovative and reliable software solutions.
      </p>
      <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center gap-8">
        {/* <!-- Left Section --> */}
        <div className="left w-full md:w-1/2 flex flex-col items-center md:items-start">
          {/* <!-- Dots --> */}
          <div className="flex gap-2 mb-4">
            <i className="fas fa-circle text-green-500" />
            <i className="fas fa-circle text-green-500" />
            <i className="fas fa-circle text-green-500" />
          </div>

          {/* <!-- Stats --> */}
          <div className="content space-y-8">
            <div className="items flex flex-wrap justify-center md:justify-start gap-8">
              <div className="box bg-gray-700 rounded-full w-36 h-36 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <div className="number bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow">
                  90+
                </div>
                <h3 className="text-lg font-semibold mt-2">Happy Clients</h3>
              </div>
              <div className="box bg-gray-700 rounded-full w-36 h-36 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <div className="number bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow">
                  100+
                </div>
                <h3 className="text-lg font-semibold mt-2">Projects Done</h3>
              </div>
            </div>
            <div className="items flex flex-wrap justify-center md:justify-start gap-8">
              <div className="box bg-gray-700 rounded-full w-36 h-36 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <div className="number bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow">
                  15+
                </div>
                <h3 className="text-lg font-semibold mt-2">
                  Projects Progress
                </h3>
              </div>
              <div className="box bg-gray-700 rounded-full w-36 h-36 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <div className="number bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow">
                  500+
                </div>
                <h3 className="text-lg font-semibold mt-2">Working Hours</h3>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className="right w-full md:w-1/2 text-center md:text-left">
          <div className="heading space-y-4">
            <div className="heading_top flex items-center gap-2 justify-center md:justify-start">
              <div className="w-6 h-1 bg-green-500" />
              <div className="w-4 h-1 bg-green-500" />
              <i className="fas fa-circle text-green-500" />
              <h3 className="text-lg font-semibold">About Me</h3>
            </div>
            <h2 className="text-3xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-400">
                Unleash Your Creativity
              </span>
            </h2>
            <h4 className="text-xl font-medium text-gray-300">
              A Lead UX & UI Designer based in Canada, with 8+ Years of
              Experience
            </h4>
          </div>
          <p className="text-gray-400 mt-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button className="btn3 mt-6 px-8 py-3 text-sm font-semibold text-green-500 border border-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
