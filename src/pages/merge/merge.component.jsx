import React from "react";
import { mergeSort } from "../../utilities/mergeSort";
import Sort from "../../components/sort/sort.component";

const MergeSort = () => (
	<Sort sortingAlgorithm={mergeSort} sortName="Merge Sort!" />
);

export default MergeSort;
