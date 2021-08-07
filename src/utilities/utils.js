export const createRandomArray = (numItems = 10, min = 1, max = 100) => {
	return [...new Array(numItems)].map(
		() => Math.floor(Math.random() * (max - min)) + min
	);
};
