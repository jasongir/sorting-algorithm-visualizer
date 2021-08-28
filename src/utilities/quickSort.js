let moments = [];

export const quickSort = (array) => {
	moments = [];
	moments.push({ wholeArray: [...array], highlighted: [] });
	const n = array.length;
	array.forEach((_, idx) => {
		const newIdx = Math.floor(Math.random() * n);
		[array[idx], array[newIdx]] = [array[newIdx], array[idx]];
		moments.push({ wholeArray: [...array], highlighted: [idx, newIdx] });
	});
	sort(array, 0, array.length - 1);
	moments.push({ wholeArray: [...array], highlighted: [] });
	return moments;
};

const sort = (array, lo, hi) => {
	if (hi <= lo) return;
	const j = partition(array, lo, hi);
	sort(array, lo, j - 1);
	sort(array, j + 1, hi);
};

const partition = (array, lo, hi) => {
	let [i, j] = [lo, hi + 1];

	const v = array[lo];
	while (true) {
		while (array[++i] < v) {
			moments.push({ wholeArray: [...array], highlighted: [i, j, lo] });
			if (i === hi) break;
		}
		while (v < array[--j]) {
			moments.push({ wholeArray: [...array], highlighted: [j, i, lo] });
			if (j === lo) break;
		}
		if (i >= j) break;

		moments.push({ wholeArray: [...array], highlighted: [i, j, lo] });
		[array[i], array[j]] = [array[j], array[i]];
		moments.push({ wholeArray: [...array], highlighted: [i, j, lo] });
	}
	[array[lo], array[j]] = [array[j], array[lo]];
	moments.push({ wholeArray: [...array], highlighted: [i, j, lo] });
	return j;
};

// let arr = [1, 3, 4, 5, 2, 8, 6, 9, 4, 6];
// quickSort(arr);

// console.log(arr);
