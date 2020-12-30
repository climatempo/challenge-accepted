import React, { useState, useEffect } from 'react';

import './styles.css';

export default function LocaleSearch({ locales }) {
  const [locale, setLocale] = useState(null);

  return (
    <div>{locales}</div>
  );
}
