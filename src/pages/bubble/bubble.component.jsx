import React from "react";
import { bubbleSort } from "../../utilities/bubbleSort";
import Sort from "../../components/sort/sort.component";

const BubbleSort = () => (
	<Sort sortingAlgorithm={bubbleSort} sortName="Bubble Sort!" />
);

export default BubbleSort;
