import { createGlobalStyle } from 'styled-components';
import { DARK_THEME, LIGHT_THEME } from '../../constants';
import { DarkModeContextModel } from './types';

export const DEFAULT_STATE: DarkModeContextModel = {
  darkMode: false,
};

/**
 * Generates the CSS custom property values. Dynamically switches
 * between light and dark theme based on context state.
 * @param darkMode whether or not dark theme should be used
 * @returns Object of custom properties to be set in :root{}
 */
const customProperties = (darkMode: boolean): { [key: string]: string } => {
  const colors = darkMode ? DARK_THEME : LIGHT_THEME;
  return {
    '--neutral-1': colors.neutral1,
    '--neutral-2': colors.neutral2,
    '--neutral-3': colors.neutral3,
    '--neutral-4': colors.neutral4,
    '--neutral-5': colors.neutral5,
    '--neutral-6': colors.neutral6,
    '--shadow': colors.shadow,
    '--overlay': colors.overlay,
    '--red': colors.red,
  };
};

export const GlobalStyles = createGlobalStyle<{ darkMode: boolean }>`
  :root {
    ${({ darkMode }) => customProperties(darkMode)}
  }
`;
