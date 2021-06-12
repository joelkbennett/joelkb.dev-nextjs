import * as React from 'react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { messages } from '@locales/en/messages';
import { en } from 'make-plural';

i18n.loadLocaleData('en', { plurals: en });
i18n.load('en', messages);
i18n.activate('en');

export default function LocalizationProvider({
  children,
}: React.PropsWithChildren<{}>): React.ReactElement {
  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
