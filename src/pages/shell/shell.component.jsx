import React from "react";
import { shellSort } from "../../utilities/shellSort";
import Sort from "../../components/sort/sort.component";

const ShellSort = () => (
	<Sort sortingAlgorithm={shellSort} sortName="Shell Sort!" />
);

export default ShellSort;
