import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Feature from '../components/Feature';
import Banner from '../components/banner';

const About = () => {
  return (
    <div className='w-full'>
      {/* Banner */}
      <header className="relative bg-cover bg-center h-70">
        <Banner />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-[221px] text-white text-center">
          <div>
            <h1 className="text-5xl font-bold">About</h1>
            <p className="text-xl mt-4">
              <Link href="/">Home</Link> &gt; About Us
            </p>
          </div>
        </div>
      </header>

      {/* 2nd Section: Blog Content with Two Columns (65:35 Ratio) */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* First Column (65% width) */}
            <div className="lg:col-span-3 space-y-8">
              {/* First Post */}
              <div>
                <Image
                  src="/Images/Rectangle 68.png"
                  alt="Going On"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
                <h2 className="text-2xl sm:text-3xl font-bold mt-4">Going all-in with millenial design</h2>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Second Post */}
              <div>
                <Image
                  src="/Images/Rectangle 68 (1).png"
                  alt="Going On Again"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
                <h2 className="text-2xl sm:text-3xl font-bold mt-4">Exploring New ways of decorating</h2>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Third Post */}
              <div>
                <Image
                  src="/Images/Rectangle 68 (2).png"
                  alt="Third Post"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
                <h2 className="text-2xl sm:text-3xl font-bold mt-4">Hand made pieces that took time to make</h2>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>
            </div>

            {/* Second Column (35% width) for Recent Posts */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Recent Posts</h2>

              {/* Recent Post 1 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/Images/Rectangle 69.png"
                  alt="Recent Post 1"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h3 className="text-black font-bold">Going all-in one with millenial design</h3>
                  <p className="text-gray-600 text-sm">03 Aug 2022</p>
                </div>
              </div>

              {/* Recent Post 2 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/Images/Rectangle 69 (1).png"
                  alt="Recent Post 2"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h3 className="text-black font-bold">Exploring new ways of decorating</h3>
                  <p className="text-gray-600 text-sm">03 Aug 2022</p>
                </div>
              </div>

              {/* Recent Post 3 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/Images/Rectangle 69 (2).png"
                  alt="Recent Post 3"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h3 className="text-black font-bold">Hand made pieces that took time to make</h3>
                  <p className="text-gray-600 text-sm">03 Aug 2022</p>
                </div>
              </div>

              {/* Recent Post 4 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/Images/Rectangle 69 (3).png"
                  alt="Recent Post 4"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h3 className="text-black font-bold">Modern home in Milan</h3>
                  <p className="text-gray-600 text-sm">03 Aug 2022</p>
                </div>
              </div>

              {/* Recent Post 5 */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/Images/Rectangle 69 (4).png"
                  alt="Recent Post 5"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h3 className="text-black font-bold">Colorful office redesign 5</h3>
                  <p className="text-gray-600 text-sm">03 Aug 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Feature />
    </div>
  );
}

export default About;
