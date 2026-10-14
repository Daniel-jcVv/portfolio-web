import { Moon, Sun } from "lucide-react";
import { useState } from "react";

// Initial theme is set before paint by the inline script in index.html.
export const ThemeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(() =>
		document.documentElement.classList.contains("dark")
	);

	const toggleTheme = () => {
		const next = !isDarkMode;
		document.documentElement.classList.toggle("dark", next);
		try {
			localStorage.setItem("theme", next ? "dark" : "light");
		} catch {
			// Storage blocked: the choice lasts only for this visit.
		}
		setIsDarkMode(next);
	};

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-full text-foreground hover:text-primary transition-colors duration-300"
			aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
			title={isDarkMode ? "Light mode" : "Dark mode"}
		>
			{isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
		</button>
	);
};
