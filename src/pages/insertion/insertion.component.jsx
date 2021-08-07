import React from "react";
import { insertionSort } from "../../utilities/insertionSort";
import Sort from "../../components/sort/sort.component";

const InsertionSort = () => (
	<Sort sortingAlgorithm={insertionSort} sortName="Insertion Sort!" />
);

export default InsertionSort;
