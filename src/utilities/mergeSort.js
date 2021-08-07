let aux;
let moments = [];

const merge = (array, lo, mid, hi) => {
	let [i, j] = [lo, mid + 1];

	for (let k = lo; k <= hi; k++) {
		aux[k] = array[k];
	}

	for (let k = lo; k <= hi; k++) {
		moments.push({ wholeArray: [...array], highlighted: [k, i, j] });
		if (i > mid) array[k] = aux[j++];
		else if (j > hi) array[k] = aux[i++];
		else if (aux[j] < aux[i]) array[k] = aux[j++];
		else array[k] = aux[i++];
	}
};
const sort = (array, lo, hi) => {
	if (hi <= lo) return;
	let mid = Math.floor(lo + (hi - lo) / 2);
	sort(array, lo, mid); // sort the left half
	sort(array, mid + 1, hi); // sort the right half
	merge(array, lo, mid, hi); // merge results
};

export const mergeSort = (array) => {
	moments = [];
	moments.push({ wholeArray: [...array], highlighted: [] });
	aux = new Array(array.length).fill(0);
	sort(array, 0, array.length - 1);

	moments.push({ wholeArray: [...array], highlighted: [] });
	return moments;
};
