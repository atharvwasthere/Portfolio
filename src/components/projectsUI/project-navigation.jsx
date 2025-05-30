import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PropTypes from "prop-types";
import { projectsData } from "@/data/ProjectData";

export function ProjectNavigation({ currentSlug }) {
  const projectSlugs = Object.keys(projectsData);
  const currentIndex = projectSlugs.indexOf(currentSlug);

  const previousProject = currentIndex > 0 ? projectSlugs[currentIndex - 1] : null;
  const nextProject = currentIndex < projectSlugs.length - 1 ? projectSlugs[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center pt-12 mt-12 border-t border-gray-200">
      <div className="flex-1">
        {previousProject && (
          <Link
            to={`/project/${previousProject}`}
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <div>
              <div className="text-xs text-gray-500">Previous</div>
              <div className="font-medium">{projectsData[previousProject].name}</div>
            </div>
          </Link>
        )}
      </div>

      <div className="flex-1 text-right">
        {nextProject && (
          <Link
            to={`/project/${nextProject}`}
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors group"
          >
            <div>
              <div className="text-xs text-gray-500">Next</div>
              <div className="font-medium">{projectsData[nextProject].name}</div>
            </div>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
}

ProjectNavigation.propTypes = {
  currentSlug: PropTypes.string.isRequired,
};
