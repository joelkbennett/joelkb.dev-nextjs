import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import { getAllProjects } from '../lib/projects';
import Link from 'next/link';
import ProjectList from '../components/ProjectList/ProjectList';
import WorkExperienceList from '../components/WorkExperienceList/WorkExperienceList';
import SkillList from '../components/SkillList/SkillList';

export default function Home({ projects }) {
  return (
    <Layout>
      <Head>
        <title>{'joelkb.dev'}</title>
      </Head>
      <ProjectList projects={projects} />
      <WorkExperienceList />
      <SkillList />
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = getAllProjects();
  return { props: { projects } };
}
