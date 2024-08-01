const page = () => (
  <div>
    <section className="relative flex items-center justify-center bg-gradient-to-r from-blue-400 to-teal-500 pb-40 pt-24">
      <div className="relative z-20 mb-36 flex w-10/12 flex-col items-start justify-center space-y-8 text-center md:text-left">
        <h1 className="text-5xl text-center md:text-start w-full font-bold text-white">About Bloggy</h1>
        <p className="text-xl text-white leading-relaxed">
          Welcome to Bloggy! We are thrilled to introduce you to a platform
          crafted with passion to become your ultimate hub for high-quality,
          engaging, and diverse content. Our mission is to create a space where
          readers from all walks of life can discover insightful articles,
          explore the latest trends, and dive into topics that pique their
          curiosity.
        </p>
        <p className="text-xl text-white leading-relaxed">
          At Bloggy, we believe that great content can inspire and inform. Our
          dedicated team of writers and content creators works tirelessly to
          bring you a variety of topics, from tech and lifestyle to culture and
          beyond. We are committed to delivering articles that not only
          captivate but also provide value and practical knowledge, all while
          ensuring a smooth and enjoyable reading experience.
        </p>
      </div>
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f6"
            fillOpacity="1"
            d="M0,160L24,170.7C48,181,96,203,144,208C192,213,240,203,288,186.7C336,171,384,149,432,165.3C480,181,528,235,576,224C624,213,672,139,720,117.3C768,96,816,128,864,138.7C912,149,960,139,1008,112C1056,85,1104,43,1152,37.3C1200,32,1248,64,1296,74.7C1344,85,1392,75,1416,69.3L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
    <section className="bg-gradient-to-t from-teal-600 to-teal-800 text-gray-100">
      <div className="w-full rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f6"
            fillOpacity="1"
            d="M0,160L24,170.7C48,181,96,203,144,208C192,213,240,203,288,186.7C336,171,384,149,432,165.3C480,181,528,235,576,224C624,213,672,139,720,117.3C768,96,816,128,864,138.7C912,149,960,139,1008,112C1056,85,1104,43,1152,37.3C1200,32,1248,64,1296,74.7C1344,85,1392,75,1416,69.3L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="mx-auto w-10/12 py-5 space-y-24">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-white">
            Technologies Behind Bloggy
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            At Bloggy, we harness the power of cutting-edge technologies to
            ensure a top-notch user experience. Our platform is designed with
            speed, scalability, and user engagement in mind, employing a robust
            tech stack to achieve these goals.
          </p>
          <p className="text-xl text-gray-200 leading-relaxed">
            By leveraging modern web technologies, we aim to provide a seamless
            and enjoyable experience for our readers, whether they're browsing
            on a desktop, tablet, or mobile device. Our commitment to
            technological excellence is reflected in every aspect of Bloggy,
            from its design to its performance.
          </p>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white">
              Next.js - The Framework
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Bloggy is powered by Next.js, a highly versatile framework for
              React applications. Next.js provides server-side rendering and
              static site generation capabilities, allowing us to deliver
              fast-loading pages and improve SEO performance. This framework is
              essential for building high-quality web applications that handle
              both dynamic and static content efficiently.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              With features such as automatic code splitting and optimized
              client-side routing, Next.js ensures that our application runs
              smoothly and performs well under varying loads. Its support for
              CSS-in-JS solutions and built-in TypeScript integration further
              enhances our development process, enabling us to build a
              responsive and maintainable platform.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white">
              React.js - The UI Library
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              React.js forms the core of our user interface, providing a
              powerful library for building interactive and dynamic UIs.
              Developed by Facebook, React's component-based architecture allows
              us to create reusable and modular components, enhancing both
              development efficiency and application performance.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              React's virtual DOM optimizes the rendering process, ensuring fast
              and efficient updates to the user interface. By leveraging React's
              capabilities alongside Next.js, we achieve a seamless integration
              of server-side rendering with client-side interactivity, resulting
              in a smooth user experience.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white">
              Tailwind CSS - Design with Ease
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Tailwind CSS is our choice for styling, offering a utility-first
              approach that simplifies the design process. This framework
              provides a comprehensive set of utility classes, allowing us to
              build custom designs without the need for extensive custom CSS.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Tailwind's flexibility and ease of customization help us maintain
              a consistent and responsive design across various devices. Its
              features, such as PurgeCSS, ensure that our production builds are
              optimized, resulting in smaller file sizes and faster load times
              for users.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white">
              TypeScript - Safer Code
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              We use TypeScript to enhance code quality and maintainability. As
              a superset of JavaScript, TypeScript adds optional static typing,
              which helps catch errors during the development phase rather than
              at runtime.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              TypeScript's static typing features, such as interfaces and type
              annotations, enable us to write more robust and scalable code.
              This not only improves the reliability of Bloggy but also enhances
              developer productivity through better tooling and editor support.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default page;
