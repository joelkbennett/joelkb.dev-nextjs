import * as React from 'react';
import Section from '../Section/Section';
import styles from './WorkExperienceList.module.css';

export default function WorkExperienceList() {
  return (
    <Section title="Worked With">
      <ul className={`list-flex`}>
        <li>m56 Studios</li>
        <li>The Coup Company</li>
        <li>Overinteractive Media</li>
        <li>AIDS Vancouver</li>
        <li>Bang-On</li>
      </ul>

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
  );
}
