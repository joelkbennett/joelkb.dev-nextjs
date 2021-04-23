import * as React from 'react';
import Project, { ProjectProps } from '../Project/Project';
import useViewport from '../../hooks/useViewport';
import styles from './projectList.module.css';

export default function ProjectList({
  projects,
}: {
  projects: ProjectProps[];
}) {
  // const { height } = useViewport();
  return (
    <ul className={styles.wrapper}>
      {projects.map((project, projectIndex) => (
        <Project
          key={project.title}
          number={projectIndex}
          title={project.title}
          description={project.description}
          links={project.links}
          images={project.images}
          body={project.body}
        />
      ))}
    </ul>
  );
}
