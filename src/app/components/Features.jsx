import { FaRocket, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import styles from "../styles/style";
import Gradient from "./Gradient";

export default function Features() {
  const features = [
    {
      icon: FaRocket,
      title: "Fast & Easy Setup",
      description:
        "Launch your website in minutes with clean and reusable components.",
    },
    {
      icon: FaMobileAlt,
      title: "Responsive Design",
      description:
        "Looks perfect on all devices — desktops, tablets, and smartphones.",
    },
    {
      icon: FaPaintBrush,
      title: "Customizable Components",
      description:
        "Easily adjust colors, fonts, and layout to match your brand.",
    },
  ];

  return (
    <section
      id="features"
      className={`relative py-20 flex flex-col justify-center items-center ${styles.padding}`}
    >
      <Gradient />
      <div className="relative max-w-7xl z-10 mx-auto px-6 flex flex-col gap-10 text-center">
        {/* Section Title */}
        <h2 className={`${styles.title} max-w-[800px] mx-auto`}>
          Powerful Features That Help Your Startup Grow
        </h2>
        <p className={`${styles.paragraph} max-w-[700px] mx-auto`}>
          Our template comes with all the essential tools you need to launch
          your business quickly and effectively.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="bg-white group flex flex-col gap-5 items-center rounded-2xl shadow-sm p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center items-center px-6 py-6 rounded-[25px] transition-colors duration-200 group-hover:bg-blue-500">
                <Icon className="text-blue-600 group-hover:text-white text-4xl" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
                {title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
