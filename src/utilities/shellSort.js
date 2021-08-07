export const shellSort = (array) => {
	let moments = [{ wholeArray: [...array], highlighted: [] }];
	let n = array.length;
	let h = 1;
	while (h < Math.floor(n / 3)) h = 3 * h + 1;
	while (h >= 1) {
		for (let i = h; i < n; i++) {
			for (let j = i; j >= h && array[j] < array[j - h]; j -= h) {
				moments.push({ wholeArray: [...array], highlighted: [j, j - h] });

				[array[j], array[j - h]] = [array[j - h], array[j]];
				moments.push({ wholeArray: [...array], highlighted: [j, j - h] });
			}
		}
		h = Math.floor(h / 3);
	}
	moments.push({ wholeArray: [...array], highlighted: [] });

	return moments;
};
