import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import utilStyles from '../styles/utils.module.css';
import { getAllProjects } from '../lib/projects';
import Link from 'next/link';
import ProjectList from '../components/ProjectList/ProjectList';

export default function Home({ projects }) {
  return (
    <Layout>
      <Head>
        <title>{'joelkb.dev'}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ProjectList projects={projects} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = getAllProjects();
  return { props: { projects } };
}
