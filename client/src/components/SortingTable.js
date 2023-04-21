import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import data from "react-data-table-component";

export default function SortingTable (){
	const [users, setUsers] = useState(data);
	const [sorted, setSorted] = useState({ sorted: "sorting", reversed: false });

	const Sorting = () => {
		const usersCopy = [...users];
		usersCopy.sort((userA, userB) => {
			if (sorted.reversed) {
				return userA.id - userB.id;
			}
			return userB.id - userA.id;
		});
		setUsers(usersCopy);
		setSorted({ sorted: "sorting", reversed: !sorted.reversed });
	};

	
	const renderArrow = () => {
		if (sorted.reversed) {
			return <FaArrowUp />;
		}
		return <FaArrowDown />;
	};
    return(
    <>
        
    </>
    )
}

