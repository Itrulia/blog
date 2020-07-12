import { themeMode } from '../mode';

export const pageBackgroundColor = themeMode({
	light: ({ theme }) => `hsl(${theme.colors.primaryHue}, 50%, 98%)`,
});

export const foregroundColor = themeMode({
	light: ({ theme }) => `hsl(${theme.colors.primaryHue}, 90%, 16%)`,
});

export const saturatedForegroundColor = themeMode({
	light: ({ theme }) => `hsl(${theme.colors.primaryHue}, 22%, 41%)`,
});

export const linkForegroundColor = themeMode({
	light: ({ theme }) => `hsl(${theme.colors.primaryHue}, 100%, 50%)`,
});
