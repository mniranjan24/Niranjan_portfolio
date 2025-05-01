import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import waterbottle from '../../assets/water-bottle.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={fitLift}
          link="https://github.com/mniranjan24/django-weight-tracker-project"
          h3="Weight tracker"
          p="weight tracking App"
        />
         <ProjectCard
          src={waterbottle}
          link="https://github.com/mniranjan24/water-intake-fullstack-project"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/mniranjan24/ReactMovie-project"
          h3="Trending Movie  "
          p="Movie App"
        />
        
       
        
      </div>
    </section>
  );
}

export default Projects;