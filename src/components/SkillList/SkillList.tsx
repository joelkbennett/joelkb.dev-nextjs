import * as React from 'react';
import Section from '@components/Section/Section';
import styles from './skillList.module.scss';
import { t } from '@lingui/macro';

export default function SkillList() {
  return (
    <Section
      title={t({
        id: 'section.skills.title ',
        message: 'Professional Expertise (5+ years) in:',
      })}>
      <ul className={`list-flex`}>
        <li>
          {t({ id: 'skill.js.title', message: 'Javascript/Typescript' })}
          <div className={`list-item--description`}>
            Jest, Node, Express, Prisma
          </div>
        </li>
        <li>
          {t({ id: 'skill.react.title', message: 'React/React Native' })}
          <div className={`list-item--description`}>
            Next.js, Gatsby, Redux, Mobx-state-tree, React Native Firebase,
            Fastlane
          </div>
        </li>
        <li>
          {t({ id: 'skill.html.title', message: 'CSS/HTML' })}
          <div className={`list-item--description`}>Accessibility, SASS</div>
        </li>
        <li>
          {t({ id: 'skill.uiux.title', message: 'UI/UX Design' })}
          <div className={`list-item--description`}>
            Prototyping; Photoshop; XD; Illustrator
          </div>
        </li>
        <li>
          {t({ id: 'skill.unity.title', message: 'Unity/C#' })}
          <div className={`list-item--description`}>
            Editor Customization, Game Design
          </div>
        </li>
      </ul>
    </Section>
  );
}
