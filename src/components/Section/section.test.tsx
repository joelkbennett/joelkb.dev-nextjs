import { render, screen } from '@testing-library/react';
import faker from 'faker';
import Section from './Section';

function createProps() {
  return {
    title: faker.lorem.words(),
    accessibleLabel: faker.lorem.words(),
    children: faker.lorem.words(),
    className: faker.lorem.word(),
  };
}

test('Render a section with a given title, accessible label, and children', () => {
  const { title, accessibleLabel, children } = createProps();
  render(
    <Section title={title} accessibleLabel={accessibleLabel}>
      {children}
    </Section>,
  );

  expect(screen.getByRole('heading').textContent).toBe(title);
  expect(screen.getByRole('region', { name: accessibleLabel })).toBeTruthy();
  expect(screen.getByText(children)).toBeTruthy();
});

test('Render a section with a custom class', () => {
  const { className, title, accessibleLabel, children } = createProps();
  render(
    <Section
      className={className}
      title={title}
      accessibleLabel={accessibleLabel}>
      {children}
    </Section>,
  );

  expect(screen.getByRole('region', { name: accessibleLabel })).toHaveClass(
    className,
  );
});

test('Use title for accessibile label if none given', () => {
  const { title, children } = createProps();
  render(<Section title={title}>{children}</Section>);

  expect(screen.getByRole('region', { name: title })).toBeTruthy();
});
