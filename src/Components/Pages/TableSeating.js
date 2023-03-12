import { useState } from "react";


const Seating = () => {
    const table = [
        {number: 1, guests: ['Example', 'One', 'Two', 'Three']},
        {number: 2, guests: ['Example', 'One', 'Two']},
        {number: 3, guests: ['First', 'Second', 'Third']},
        {number: 4, guests: ['Some Name', 'Another Name', 'Guest 1', 'Guest 2']},
        {number: 5, guests: []},
        {number: 6, guests: []},
        {number: 7, guests: []},
        {number: 8, guests: []},
        {number: 9, guests: []},
        {number: 10, guests: []},
    ]

    const [filter, setFiltered] = useState('');

    return (
        <div className="w-full md:w-10/12 bg-white flex flex-col mx-auto px-3">
            <p className="mb-3 mx-auto">
                Search By Name: 
                <input
                    id="filter"
                    name="filter"
                    type="text"
                    value={filter}
                    onChange={(event) => setFiltered(event.target.value.toLowerCase())}
                    className="ml-1 border-solid border-2 border-black-400"
                />
            </p>
            <div className="w-10/12 mx-auto grid grid-cols-2 md:grid-cols-3 gap-5">
                {
                    table.map((table) => {
                        return(
                            <div key={table.number} className="p-8 h-48 border-solid border-2 border-black">
                                <span className="text-3xl">Table {table.number}</span>
                                <ul>
                                    {
                                        table.guests.filter((guest) => guest.toLowerCase().includes(filter) || filter === '')
                                        .map((guest) => {
                                            return(
                                                <li>{guest}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Seating;