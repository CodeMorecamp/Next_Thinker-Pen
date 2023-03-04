import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-lg mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">About Me</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 flex-shrink-0">
            <div className="relative w-48 h-48 rounded-full overflow-hidden">
              <Image
                src="../public/profilepicture.jpg"
                alt="Profile Picture"
                width={300}
                height={300}
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate augue et quam maximus, ac laoreet mi aliquet. Duis malesuada, turpis id fringilla vestibulum, ipsum justo venenatis nulla, a lacinia massa eros et sem. Pellentesque vulputate est sit amet neque ullamcorper, sit amet blandit nulla porttitor. Nullam vel sapien vitae sapien sollicitudin elementum vel in odio. Etiam id elit faucibus, tincidunt arcu id, hendrerit metus. Curabitur sagittis tincidunt lacus, in blandit lectus rhoncus quis. Sed ac nunc sit amet mauris consequat ultricies ac eu ex.
            </p>
            <p className="mb-4">
              Sed feugiat eleifend turpis, non sagittis velit rhoncus eu. Sed posuere tortor vel nibh faucibus commodo. Praesent pharetra sed turpis id consectetur. Nam posuere tortor sit amet tellus lacinia, ac blandit urna rhoncus. Suspendisse potenti. Mauris posuere, ex ac tincidunt fringilla, purus justo ultrices lorem, vel aliquam sapien ex quis odio. Sed sodales id magna vitae pretium.
            </p>
            <p className="mb-4">
              Nulla faucibus augue nisi, eu sagittis arcu mollis vel. Donec tincidunt interdum sapien, vitae efficitur nisl pharetra nec. In hac habitasse platea dictumst. Sed at augue nunc. Etiam euismod euismod neque, in posuere sapien blandit eu. Sed ac dolor blandit, elementum mi id, ullamcorper metus. Sed non orci in metus commodo faucibus. Mauris ac libero euismod, efficitur dolor sed, aliquam velit. Sed bibendum orci a purus gravida, a molestie ante vehicula. Sed efficitur massa at orci rutrum, vel interdum odio ultrices. Donec vitae neque eu odio lobortis sodales quis eget sem.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};
