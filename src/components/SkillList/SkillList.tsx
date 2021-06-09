import * as React from 'react';
import Section from 'components/Section/Section';
import styles from './skillList.module.css';

export default function SkillList() {
  return (
    <Section title="Skills">
      <ul className={`list-flex`}>
        <li>Javascript/Typescript</li>
        <li>React/React Native</li>
        <li>CSS/HTML</li>
        <li>UI/UX Design</li>
        <li>C#</li>
        <li>Unity</li>
      </ul>
    </Section>
  );
}
