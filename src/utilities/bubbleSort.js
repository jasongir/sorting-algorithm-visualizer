export const bubbleSort = (array) => {
	const moments = [];
	moments.push({ wholeArray: [...array], highlighted: [] });

	const n = array.length;
	for (let i = 0; i < n - 1; i++)
		for (let j = 0; j < n - i - 1; j++) {
			moments.push({ wholeArray: [...array], highlighted: [i, j] });
			if (array[j] > array[j + 1]) {
				moments.push({ wholeArray: [...array], highlighted: [i, j, j + 1] });
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				moments.push({ wholeArray: [...array], highlighted: [i, j, j + 1] });
			}
		}
	moments.push({ wholeArray: [...array], highlighted: [] });
	return moments;
};

// const a = [5, 3, 1, 3, 5, 6, 7, 3, 1, 9, 7, 5];
// bubbleSort(a);
// console.log(a);
