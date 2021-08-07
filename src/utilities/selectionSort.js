export const selectionSort = (array) => {
	let moments = [{ wholeArray: array, highlighted: [] }];

	const newArr = [...array];
	const NUM_ITEMS = newArr.length;
	for (
		let i = 0; //
		i < NUM_ITEMS - 1; //
		++i //
	) {
		let minIdx = i;
		for (
			let j = i + 1; //
			j < NUM_ITEMS; //
			j++ //
		) {
			moments.push({ wholeArray: [...newArr], highlighted: [i, j] });
			if (newArr[j] < newArr[minIdx]) {
				minIdx = j;
			}
		}
		[newArr[minIdx], newArr[i]] = [newArr[i], newArr[minIdx]];
		moments.push({ wholeArray: [...newArr], highlighted: [i, minIdx] });
	}
	moments.push({ wholeArray: [...newArr], highlighted: [] });
	return moments;
};
