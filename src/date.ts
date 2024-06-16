/**
 * Convers ms into a XX:YY:ZZ timestamp
 * @param ms Timestamp given in milliseconds
 * @returns Timestamp converted to XX:YY:ZZ format
 */
export function msToTimestamp(ms: number): string {
	if (ms < 1000) {
		// 1000 ms = 1 seconds.
		// Any positive number less than 1000 or any non-positive number should return "00:00"
		return '0:00';
	}
	const seconds = Math.floor(ms / 1000);
	if (seconds >= 3600) {
		const hours = Math.floor(ms / 1000 / 3600);
		const minutes = Math.floor(ms / 1000 / 60) - hours * 60;
		const newSeconds = seconds - hours * 3600 - minutes * 60;
		return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
			newSeconds < 10 ? '0' : ''
		}${newSeconds}`;
	}

	if (seconds >= 60) {
		const minutes = Math.floor(ms / 1000 / 60);
		const newSeconds = seconds - minutes * 60;
		return `${minutes}:${newSeconds < 10 ? '0' : ''}${newSeconds}`;
	}

	return `0:${seconds < 10 ? '0' : ''}${seconds}`;
}

/**
 * Converts a date into a time format. Format may include:
 * 1. 'X second(s)'
 * 2. 'X minute(s) and Y second(s)
 * 3. 'X hour(s), Y minute(s), and Z second(s)
 * @param ms Timestamp given in milliseconds
 * @returns Timestamp converted to time format
 */
export function msToTime(ms: number): string {
	if (ms < 1000) {
		// 1000 ms = 1 seconds.
		// Any positive number less than 1000 or any non-positive number should return "00:00"
		return '0 seconds';
	}
	const seconds = Math.floor(ms / 1000);
	if (seconds >= 3600) {
		const hours = Math.floor(ms / 1000 / 3600);
		const minutes = Math.floor(ms / 1000 / 60) - hours * 60;
		const newSeconds = seconds - hours * 3600 - minutes * 60;
		const hourTxt = `${hours} hour${hours > 1 ? 's' : ''}`;
		const minuteTxt = `${
			minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` : ''
		}`;
		const secondTxt = `${
			newSeconds > 0
				? `${newSeconds} second${newSeconds > 1 ? 's' : ''}`
				: ''
		}`;
		return `${hourTxt}${
			newSeconds === 0 ? (minutes > 0 ? ' and ' : '') : ' '
		}${minuteTxt}${
			newSeconds > 0 ? (minutes === 0 ? 'and ' : ' and ') : ''
		}${secondTxt}`;
	}

	if (seconds >= 60) {
		const minutes = Math.floor(ms / 1000 / 60);
		const newSeconds = seconds - minutes * 60;
		return `${minutes} minute${minutes > 1 ? 's' : ''}${
			newSeconds > 0
				? ` and ${newSeconds} second${newSeconds > 1 ? 's' : ''}`
				: ''
		}`;
	}

	return `${seconds} second${seconds > 1 ? 's' : ''}`;
}

/**
 * Converts a local date object to a UTC date object
 * @param date Date object based on locale
 * @returns UTC date
 */
export function dateToUTC(date: Date): Date {
	const utc = date.getTime();
	const offset = date.getTimezoneOffset() * 60000;
	return new Date(utc + offset);
}
