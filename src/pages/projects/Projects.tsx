import Slider from "react-slick";
import project1Img from "../../assets/img/project-1.png";
import project2Img from "../../assets/img/project-2.png";
import project3Img from "../../assets/img/project-3.png";

const projects = [
  {
    name: "Store with JavaScript",
    image: project1Img,
    technologies: ["JavaScript", "hbs"],
    url: "https://example.com/project1",
  },
  {
    name: "Microservices JobSearch Page",
    image: project3Img,
    technologies: ["Angular", "Nest.Js", "PostgreSQL", "Docker", "Spring boot"],
    url: "https://example.com/project2",
  },
  {
    name: "Assitent IA Fitness with nest.js",
    image: project2Img,
    technologies: ["Angular", "Nest.Js", "PostgreSQL"],
    url: "https://example.com/project3",
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-base font-semibold text-left mb-8">My projects</h1>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="text-center">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-52 md:h-96 object-cover rounded-lg mb-4 cursor-pointer"
                loading="lazy"
              />
            </a>
            <h2 className="text-2xl text-white mb-2">{project.name}</h2>
            <div className="flex justify-center gap-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm text-gray-300 bg-gray-700 py-1 px-3 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
