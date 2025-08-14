# Dark Mode Implementation Guide

## Overview

This project implements a complete dark mode solution with the following features:

- **Theme Toggle**: Click the moon/sun icon in the header to switch between light and dark modes
- **System Preference Detection**: Automatically follows your system's color scheme preference
- **Local Storage Persistence**: Remembers your theme choice across browser sessions
- **Smooth Transitions**: All theme changes include smooth CSS transitions

## How It Works

### 1. Theme Store (`src/lib/stores/theme.ts`)

The theme store manages the current theme state and handles:

- Theme persistence in localStorage
- System preference detection
- Automatic theme application to the document

### 2. Theme Toggle Component (`src/lib/components/theme-toggle.svelte`)

A reusable component that:

- Shows the appropriate icon (moon for light mode, sun for dark mode)
- Handles theme switching
- Provides proper accessibility attributes

### 3. CSS Variables (`src/app.css`)

The theme system uses CSS custom properties:

- Light mode variables in `:root`
- Dark mode variables in `.dark`
- Automatic switching based on the `dark` class on the document element

## Usage

### Basic Theme Toggle

```svelte
<script>
	import ThemeToggle from '$lib/components/theme-toggle.svelte';
</script>

<ThemeToggle />
```

### Programmatic Theme Control

```svelte
<script>
	import { theme } from '$lib/stores/theme';

	// Set specific theme
	theme.set('dark');
	theme.set('light');
	theme.set('system');

	// Toggle between light and dark
	theme.toggle();
</script>
```

## Theme States

1. **Light Mode**: Clean, bright interface with light gradients
2. **Dark Mode**: Dark interface with blue gradients
3. **System**: Automatically follows your OS preference

## Files Modified

- `src/lib/stores/theme.ts` - Theme store implementation
- `src/lib/components/theme-toggle.svelte` - Theme toggle component
- `src/lib/components/features/Header.svelte` - Updated to include theme toggle
- `src/routes/+layout.svelte` - Theme store initialization
- `src/app.css` - Theme variables and transitions

## Browser Support

The implementation works in all modern browsers and includes:

- Fallback for SSR (Server-Side Rendering)
- Graceful degradation for older browsers
- Proper TypeScript support
