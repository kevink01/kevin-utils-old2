/**
 * Shuffles a generic array
 * @param arr The array to be shuffled
 * @returns Shuffled array
 */
export function shuffle<T>(arr: T[]): T[] {
	return arr
		.map((num) => ({ num, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ num }) => num);
}
