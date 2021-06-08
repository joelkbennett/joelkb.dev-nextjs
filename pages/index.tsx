import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import { getAllProjects } from '../lib/projects';
import Link from 'next/link';
import Section from '../components/Section/Section';
import ProjectList from '../components/ProjectList/ProjectList';
import SkillList from '../components/SkillList/SkillList';
import { t } from '@lingui/macro';

export default function Home({ projects }) {
  return (
    <Layout>
      <Head>
        <title>{'Joel K Bennett - Recent Work'}</title>
        <link rel="manifest" href="/manifest.json?v=2" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Portfolio of work of Web Developer Joel K Bennett"></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=2"
        />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=2"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ProjectList projects={projects} />
      <Section title="Worked For">
        <ul className={`list-flex`}>
          <li>{t({ id: 'project.title.m56', message: 'm56 Studios' })}</li>
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
