import * as React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useRecoilValue } from 'recoil';
import { scrollPositionState } from '../../state/window';
import useViewport from '../../hooks/useViewport';

import styles from './project.module.css';

type Asset = {
  title: string;
  url: string;
};

export type ProjectProps = {
  number: number;
  title: string;
  description: string;
  links: Asset[];
  images: Asset[];
  techStack: string[];
  body: any;
};

enum ProjectState {
  Current = 'Current',
  Upcoming = 'Upcoming',
  Passed = 'Passed',
}

export default function Project({
  number,
  title,
  description,
  links,
  images,
  techStack,
  body,
}: React.PropsWithChildren<ProjectProps>) {
  const projectRef = React.useRef(null);
  const [projectState, setProjectState] = React.useState(ProjectState.Upcoming);
  const { position } = useRecoilValue(scrollPositionState);
  const { width, height } = useViewport();
  // const visibleMin = position.y > (height / 4) * (number + 1);
  // const visibleMax = position.y < (height / 4) * (number + 2);

  // React.useEffect(() => {
  //   if (visibleMin && visibleMax) {
  //     setProjectState(ProjectState.Current);
  //     projectRef.current.focus();
  //   } else if (!visibleMin) {
  //     setProjectState(ProjectState.Passed);
  //   } else if (!visibleMax) {
  //     setProjectState(ProjectState.Upcoming);
  //   }
  // }, [visibleMin, visibleMax, setProjectState]);

  // const { opacity, translate } = useSpring({
  //   opacity: projectState === ProjectState.Current ? 1 : 0,
  //   translate:
  //     projectState === ProjectState.Current
  //       ? `translateY(0px)`
  //       : projectState === ProjectState.Upcoming
  //       ? `translateY(0px)`
  //       : `translateY(200px)`,
  //   from: { opacity: 0, translate: `translateY(200px)` },
  //   config: config.default,
  // });

  // React.useEffect(() => {
  //   // Setup tab navigation for each project
  //   if (!projectRef.current) {
  //     return;
  //   }

  //   function scrollToOnFocus() {
  //     window.scrollTo(0, (height / 4) * (number + 1) + 1);
  //   }

  //   projectRef.current.addEventListener('focus', scrollToOnFocus);

  //   return () => {
  //     if (!projectRef.current) {
  //       return;
  //     }

  //     projectRef.current.removeEventListener('focus', scrollToOnFocus);
  //   };
  // }, [height, number]);

  return (
    <animated.li
      ref={projectRef}
      tabIndex={0}
      // style={{
      //   opacity,
      //   transform: translate,
      //   backgroundImage:
      //     'linear-gradient(rgba(255,255,255,1), rgba(255,0,0,.1))',
      // }}
      className={`${styles.wrapper}`}>
      <div className={styles.inner}>
        <div className={styles.number}>
          <p>{number}</p>
        </div>

        <div className={styles.bodyWrapper}>
          <header>
            <h2>{title}</h2>
            <div>
              <h4 className={styles.descriptionWrapper}>{description}</h4>
            </div>
          </header>
          <section className={styles.body}>
            <div>
              <p className={styles.description}>{body}</p>
            </div>

            {techStack && techStack.length > 0 && (
              <ul className={`${styles.stack} inline`}>
                {techStack.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            {links.length > 0 && (
              <ul className={styles.links}>
                {links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* {images.length > 0 && (
            <ul className={styles.images}>
              {images.map((image) => (
                <li key={image.title} className={styles.image} />
              ))}
            </ul>
          )} */}
        </div>
      </div>
    </animated.li>
  );
}
