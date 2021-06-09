import * as React from 'react';
import Project, { ProjectProps } from 'components/Project/Project';
import Section from 'components/Section/Section';
import styles from './projectList.module.css';

export default function ProjectList({
  projects,
}: {
  projects: ProjectProps[];
}) {
  return (
    <Section title="Recent Work">
      <ul className={styles.projectList}>
        {projects.map((project, projectIndex) => (
          <Project
            key={project.title}
            number={projectIndex}
            title={project.title}
            description={project.description}
            links={project.links}
            images={project.images}
            body={project.body}
            techStack={project.techStack}
          />
        ))}
      </ul>
    </Section>
  );
}
