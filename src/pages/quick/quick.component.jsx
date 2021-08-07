import React from "react";
import { quickSort } from "../../utilities/quickSort";
import Sort from "../../components/sort/sort.component";

const QuickSort = () => (
	<Sort sortingAlgorithm={quickSort} sortName="Quick Sort!" />
);

export default QuickSort;
