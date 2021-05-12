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
          <li>Telus</li>
          <li>Telus Fund</li>
          <li>CBC</li>
          <li>The Canada Games</li>
          <li>Wattpad</li>
          <li>Pivot Legal Society</li>
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
