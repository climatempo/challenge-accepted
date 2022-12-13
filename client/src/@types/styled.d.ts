import 'styled-components';
import theme from '../styles/theme';

type ThemeInterface = typeof theme;

declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends ThemeInterface {}
}