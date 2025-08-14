import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark' | 'system';

function createThemeStore() {
	// Get initial theme from localStorage or default to 'system'
	const getInitialTheme = (): Theme => {
		if (!browser) return 'system';
		return (localStorage.getItem('theme') as Theme) || 'system';
	};

	const { subscribe, set, update } = writable<Theme>(getInitialTheme());

	// Apply theme to document
	const applyTheme = (theme: Theme) => {
		if (!browser) return;

		const root = document.documentElement;
		const isDark =
			theme === 'dark' ||
			(theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

		if (isDark) {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
	};

	// Initialize theme on store creation
	if (browser) {
		applyTheme(getInitialTheme());
	}

	return {
		subscribe,
		set: (theme: Theme) => {
			if (browser) {
				localStorage.setItem('theme', theme);
				applyTheme(theme);
			}
			set(theme);
		},
		toggle: () => {
			update((currentTheme) => {
				const newTheme = currentTheme === 'light' ? 'dark' : 'light';
				if (browser) {
					localStorage.setItem('theme', newTheme);
					applyTheme(newTheme);
				}
				return newTheme;
			});
		}
	};
}

export const theme = createThemeStore();

// Listen for system theme changes
if (browser) {
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	let currentTheme: Theme;
	const unsubscribe = theme.subscribe((value) => {
		currentTheme = value;
	});

	mediaQuery.addEventListener('change', () => {
		if (currentTheme === 'system') {
			const root = document.documentElement;
			const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

			if (isDark) {
				root.classList.add('dark');
			} else {
				root.classList.remove('dark');
			}
		}
	});
}

function applyTheme(theme: Theme) {
	const root = document.documentElement;
	const isDark =
		theme === 'dark' ||
		(theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

	if (isDark) {
		root.classList.add('dark');
	} else {
		root.classList.remove('dark');
	}
}
