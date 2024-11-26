/* eslint-disable prettier/prettier */
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-blue-500 text-white text-center py-6">
          <h1 className="text-3xl font-bold">Welcome to Ultra Tech!</h1>
        </header>
        <main className="p-6 space-y-6">
          <section>
            <p className="text-gray-700 text-lg">
              At Ultra Tech, we are dedicated to crafting cutting-edge
              technology solutions for the modern world.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-blue-600">
              About Ultra Tech
            </h2>
            <p className="text-gray-700">
              Founded with a vision to transform how businesses operate, Ultra
              Tech Solutions specializes in software development, cloud
              computing, and IT consulting services. We partner with
              organizations of all sizes, helping them embrace innovation and
              achieve sustainable growth in a rapidly evolving digital
              landscape.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-blue-600">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is simple: to empower businesses with reliable,
              innovative, and tailored software solutions. We pride ourselves on
              combining technical expertise with a deep understanding of our
              clients&apos; unique challenges, ensuring we deliver solutions
              that truly make an impact.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-blue-600">
              Why Choose Ultra Tech?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Innovation at the Core:</strong> We leverage the latest
                technologies to deliver transformative solutions.
              </li>
              <li>
                <strong>Customer-Centric Approach:</strong> Your goals drive our
                solutions. We listen, adapt, and deliver.
              </li>
              <li>
                <strong>Proven Expertise:</strong> With years of industry
                experience, we understand what works and how to make it work for
                you.
              </li>
            </ul>
          </section>
          <section className="text-center">
            <p className="text-gray-700">
              Join us as we build the future of technology—one solution at a
              time. Together, let’s achieve more.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AboutUs;
