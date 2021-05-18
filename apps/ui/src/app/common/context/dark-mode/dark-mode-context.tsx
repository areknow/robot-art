import { createContext, useEffect, useState } from 'react';
import { useColorScheme } from 'use-color-scheme';
import { DEFAULT_STATE, GlobalStyles } from './constants';
import { DarkModeContextModel, DarkModeContextType } from './types';

export const DarkModeContext = createContext<DarkModeContextType>({
  darkModeContext: DEFAULT_STATE,
});

/**
 * This provider allows all descendants to get access to the dark mode
 * context which reacts to the user system color scheme preference.
 * @returns Children of the provider
 */
export const DarkModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  /**
   * useColorScheme hook listens to `prefers-color-scheme` media query to
   * determine if the system is in native light/dark mode. Context is set
   * accordingly. https://github.com/mujo-code/use-color-scheme
   */
  const { scheme } = useColorScheme();
  const [darkModeContext, setDarkModeContext] = useState<DarkModeContextModel>({
    darkMode: scheme === 'dark',
  });

  /**
   * Listen for system color preference change and update the context accordingly.
   */
  useEffect(() => {
    setDarkModeContext({ darkMode: scheme === 'dark' });
  }, [scheme]);

  /**
   * The returned JSX element also includes the styled components GlobalStyles
   * component where the CSS custom properties are attached to :root{}. This
   * allows the entire DOM tree to have access to the color variables which
   * will dynamically update based on light/dark context.
   */
  return (
    <DarkModeContext.Provider value={{ darkModeContext }}>
      <GlobalStyles darkMode={darkModeContext.darkMode} />
      {children}
    </DarkModeContext.Provider>
  );
};
