/**
 * Get the intiials of a string username.
 * @param name The full name of the user. Assumes first and last name is provided.
 * @returns The initials of the user's full name, or their first name initial. Otherwise, return "AA"
 */
export function getInitials(name?: string): string {
	const defaultStr = 'AA';
	if (!name || name.trim() === '') {
		return defaultStr;
	}
	const names: string[] = name.split(' ');
	if (names.length === 0) {
		return defaultStr;
	}
	if (!names[0]) {
		return defaultStr;
	}
	if (names.length === 1) {
		return names[0].charAt(0).toLocaleUpperCase();
	}

	const userInitials: string = names[0].charAt(0).toLocaleUpperCase();
	if (!names[1] || names[1].length === 0) {
		return userInitials;
	}

	return userInitials + names[1].charAt(0).toLocaleUpperCase();
}

/**
 * Capitalizes the string
 * @param str String to capitlize
 * @returns The first letter of the string capitalized, while case is preserved
 */
export function capitalize(str: string): string {
	if (str.length === 0) return str;
	if (str.length === 1) return str.charAt(0).toLocaleUpperCase();
	return str.charAt(0).toLocaleUpperCase() + str.substring(1);
}

/**
 * Truncate the string to a maximum length, and add ellipse to the tail
 * @param str String to ellipse
 * @param maxLength The maximum length the string should have
 * @returns Ellipsed string (or the full string if str's length < maxLength)
 */
export function ellipse(str: string, maxLength: number): string {
	if (maxLength < 0) return str;
	if (maxLength === 0) return '';
	if (str.length <= maxLength) return str;
	return str.slice(0, maxLength).trimEnd() + '...';
}
