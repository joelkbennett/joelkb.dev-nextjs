import Head from 'next/head';
import Layout from '@components/Layout/Layout';
import { getAllProjects } from '@lib/projects';
import Link from 'next/link';
import Section from '@components/Section/Section';
import ProjectList from '@components/ProjectList/ProjectList';
import SkillList from '@components/SkillList/SkillList';
import { t } from '@lingui/macro';

export default function Home({ projects }) {
  return (
    <Layout>
      <Head>
        <title>
          {t({
            id: 'site.index.title',
            message: 'Joel K Bennett - Recent Work',
          })}
        </title>
        <link rel="manifest" href="/manifest.json?v=2" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={t({
            id: 'site.meta.description',
            message: 'Portfolio of work of Web Developer Joel K Bennett',
          })}></meta>
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

      <Section
        title={t({
          id: 'section.work-experience.title',
          message: 'Worked For',
        })}>
        <ul className={`list-flex`}>
          <li>{t({ id: 'project.title.m56', message: 'm56 Studios' })}</li>
          <li>
            {t({
              id: 'org.title.coup-company',
              message: 'The Coup Company',
            })}
          </li>
          <li>
            {t({
              id: 'org.title.overinteractive-media',
              message: 'Overinteractive Media',
            })}
          </li>
          <li>
            {t({
              id: 'org.title.aids-vancouver',
              message: 'AIDS Vancouver',
            })}
          </li>
          <li>{t({ id: 'project.title.bang-on', message: 'Bang-On' })}</li>
        </ul>
      </Section>

      <Section
        title={t({
          id: 'section.projects.title',
          message: 'Projects Worked On',
        })}>
        <ul className={`list-flex`}>
          <li>{t({ id: 'project.title.story-hive', message: 'StoryHive' })}</li>
          <li>{t({ id: 'org.title.telus-fund', message: 'Telus Fund' })}</li>
          <li>{t({ id: 'org.title.cbc', message: 'CBC' })}</li>
          <li>
            {t({
              id: 'project.title.activity-challenge',
              message: 'The Canada Games Activity Challenge',
            })}
          </li>
          <li>
            {t({
              id: 'project.title.wattpad-presents-horror',
              message: 'Wattpad Presents... Horror',
            })}
          </li>
          <li>
            {t({ id: 'org.title.pivot', message: 'Pivot Legal Society' })}
          </li>
          <li>
            {t({
              id: 'org.title.vso',
              message: 'The Vancouver Symphony Orchestra',
            })}
          </li>
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
