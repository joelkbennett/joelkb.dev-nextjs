import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import { getAllProjects } from '../lib/projects';
import Link from 'next/link';
import Section from '../components/Section/Section';
import ProjectList from '../components/ProjectList/ProjectList';
import SkillList from '../components/SkillList/SkillList';

export default function Home({ projects }) {
  return (
    <Layout>
      <Head>
        <title>{'joelkb.dev'}</title>
      </Head>
      <ProjectList projects={projects} />
      <Section title="Worked For">
        <ul className={`list-flex`}>
          <li>m56 Studios</li>
          <li>The Coup Company</li>
          <li>Overinteractive Media</li>
          <li>AIDS Vancouver</li>
          <li>Bang-On</li>
        </ul>
      </Section>
      <Section title="Worked on projects for">
        <ul className={`list-flex`}>
          <li>StoryHive</li>
          <li>Telus Fund</li>
          <li>CBC</li>
          <li>The Canada Games Activity Challenge</li>
          <li>Wattpad Presents</li>
          <li>Pivot Legal Society (Hope in Shadows, The Pivot Foundation)</li>
          <li>The Vancouver Symphony Orchestra</li>
        </ul>
      </Section>
      <SkillList />
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = getAllProjects();
  return { props: { projects } };
}
