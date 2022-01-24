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
          <li>
            {t({ id: 'project.title.ahi', message: 'Anemone Hug Interactive' })}
            <div className={`list-item--description`}>
              Software Developer/Programmer
            </div>
          </li>
          <li>
            {t({ id: 'project.title.m56', message: 'm56 Studios' })}
            <div className={`list-item--description`}>
              Frontend Developer for Web, Mobile, and Games
            </div>
          </li>
          <li>
            {t({
              id: 'org.title.overinteractive-media',
              message: 'Overinteractive Media/The Coup Company',
            })}
            <div className={`list-item--description`}>
              Frontend Web Developer
            </div>
          </li>
          <li>
            {t({
              id: 'org.title.aids-vancouver',
              message: 'AIDS Vancouver',
            })}
            <div className={`list-item--description`}>
              Website Coordinator/Developer
            </div>
          </li>
          <li>
            {t({ id: 'or.title.e11', message: 'e11' })}
            <div className={`list-item--description`}>
              Self-employed Web Developer & Graphic Designer
            </div>
          </li>
          <li>
            {t({ id: 'project.title.bang-on', message: 'Bang-On' })}
            <div className={`list-item--description`}>
              Graphic Designer and Web Developer
            </div>
          </li>
        </ul>
      </Section>

      <Section
        title={t({
          id: 'section.projects.title',
          message: 'Projects Worked On',
        })}>
        <ul className={`list-flex`}>
          <li>
            {t({ id: 'project.title.story-hive', message: 'StoryHive' })}
            <div className={`list-item--description`}>
              PHP, Javascript, HTML/SCSS
            </div>
          </li>
          <li>
            {t({ id: 'org.title.telus-fund', message: 'Telus Fund' })}
            <div className={`list-item--description`}>
              Prototype development, Laravel/Blade/PHP, Javascript, HTML/SCSS
            </div>
          </li>
          <li>
            {t({ id: 'org.title.cbc', message: 'CBC' })}
            <div className={`list-item--description`}>
              PHP, Javascript, HTML/SCSS
            </div>
          </li>
          <li>
            {t({
              id: 'project.title.activity-challenge',
              message: 'The Canada Games Activity Challenge',
            })}
            <div className={`list-item--description`}>
              Javascript, HTML, SCSS
            </div>
          </li>
          <li>
            {t({
              id: 'project.title.wattpad-presents-horror',
              message: 'Wattpad Presents... Horror',
            })}
            <div className={`list-item--description`}>
              UI Design, Javascript, HTML/SCSS
            </div>
          </li>
          <li>
            {t({ id: 'org.title.pivot', message: 'Pivot Legal Society' })}
            <div className={`list-item--description`}>
              Graphic design for print & web, Drupal & NationBuilder template
              development
            </div>
          </li>
          <li>
            {t({
              id: 'org.title.vso',
              message: 'The Vancouver Symphony Orchestra',
            })}
            <div className={`list-item--description`}>
              Graphic design for print & web, HTML/CSS
            </div>
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
