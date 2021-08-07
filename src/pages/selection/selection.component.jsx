import { selectionSort } from "../../utilities/selectionSort";
import Sort from "../../components/sort/sort.component";

const SelectionSort = () => (
	<Sort sortingAlgorithm={selectionSort} sortName="Selection Sort!" />
);

export default SelectionSort;
