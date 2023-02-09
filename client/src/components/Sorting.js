import React from "react";

function Sorting (){
    const [users, setUsers] = useState(data);
	const [sorted, setSorted] = useState({ sorted: "id", reversed: false });
	const [searchPhrase, setSearchPhrase] = useState("");

	const sortById = () => {
		const usersCopy = [...users];
		usersCopy.sort((userA, userB) => {
			if (sorted.reversed) {
				return userA.id - userB.id;
			}
			return userB.id - userA.id;
		});
		setUsers(usersCopy);
		setSorted({ sorted: "id", reversed: !sorted.reversed });
	};

	const sortByName = () => {
		const usersCopy = [...users];
		usersCopy.sort((userA, userB) => {
			const fullNameA = `${userA.first_name} ${userA.last_name}`;
			const fullNameB = `${userB.first_name} ${userB.last_name}`;
			if (sorted.reversed) {
				return fullNameB.localeCompare(fullNameA);
			}
			return fullNameA.localeCompare(fullNameB);
		});
		setUsers(usersCopy);
		setSorted({ sorted: "name", reversed: !sorted.reversed });
	};

	const sortByEmail = () => {
		const usersCopy = [...users];
		usersCopy.sort((userA, userB) => {
			const fullNameA = `${userA.first_name} ${userA.last_name}`;
			const fullNameB = `${userB.first_name} ${userB.last_name}`;
			if (sorted.reversed) {
				return fullNameB.localeCompare(fullNameA);
			}
			return fullNameA.localeCompare(fullNameB);
		});
		setUsers(usersCopy);
		setSorted({ sorted: "email", reversed: !sorted.reversed });
	};

	

	const search = (event) => {
		const matchedUsers = data.filter((user) => {
			return `${user.first_name} ${user.last_name}`
				.toLowerCase()
				.includes(event.target.value.toLowerCase());
		});

		setUsers(matchedUsers);
		setSearchPhrase(event.target.value);
	};

	const renderUsers = () => {
		return users.map((user) => {
			return (
				<tr>
					<td>{user.id}</td>
					<td>{`${user.first_name} ${user.last_name}`}</td>
					<td>{user.email}</td>
					<td>{user.gender}</td>
				</tr>
			);
		});
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

export default Sorting;