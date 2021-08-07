export const insertionSort = (array) => {
	let moments = [{ wholeArray: array, highlighted: [] }];

	const newArr = [...array];
	const len = newArr.length;
	for (let i = 1; i < len; i++) {
		moments.push({ wholeArray: [...newArr], highlighted: [i] });
		for (let j = i; j > 0; j--) {
			moments.push({ wholeArray: [...newArr], highlighted: [j, j - 1] });
			if (newArr[j] < newArr[j - 1]) {
				[newArr[j], newArr[j - 1]] = [newArr[j - 1], newArr[j]];
				moments.push({ wholeArray: [...newArr], highlighted: [j, j - 1] });
			} else break;
		}
	}
	moments.push({ wholeArray: [...newArr], highlighted: [] });

	return moments;
};
