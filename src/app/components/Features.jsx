import { FaRocket, FaMobileAlt, FaPaintBrush, FaSearch } from "react-icons/fa";
import styles from "../style";

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
    {
      icon: FaSearch,
      title: "SEO Optimized",
      description:
        "Built with best practices to help your startup rank higher on search engines.",
    },
  ];

  return (
    <section
      id="features"
      className={`relative py-20 flex flex-col justify-center items-center ${styles.padding} `}
    >
      {/* Decorative Gradients */}
      <div className="gradient_3 z-10" />
      <div className="gradient_4 z-10" />

      <div className="max-w-7xl z-20 mx-auto px-6 flex flex-col gap-10 text-center">
        {/* Section Title */}
        <h1 className={`${styles.title} max-w-[800px] mx-auto`}>
          Powerful Features That Help Your Startup Grow
        </h1>
        <p className={`${styles.paragraph} max-w-[700px] mx-auto`}>
          Our template comes with all the essential tools you need to launch
          your business quickly and effectively.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white group flex flex-col gap-5 items-center rounded-2xl shadow-sm p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center items-center duration-200 group-hover:bg-blue-500 transition-colors px-6 py-6 rounded-[25px]">
                  <Icon className="text-blue-600 group-hover:text-white text-4xl" />
                </div>
                <h3 className="text-[18px] md:text-[20px] lg:text-[25px] font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-[16px] lg:text-[18px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
