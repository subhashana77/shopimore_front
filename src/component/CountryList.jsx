import React, {useState} from "react";

const CountryList = ({placeholder, data}) => {
    const [filterData, setFilterData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.title.includes(searchWord);
        });
        setFilterData(newFilter);
    }
    return (
        <div className='form-group w-100'>
            <div className="search-country">
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
            </div>
            {filterData.length !== 0 && (
                <div className="dataResult">
                    {filterData.map((value, key) => {
                        return <div>{value.title}</div>
                    })}
                </div>
            )}
        </div>
    )
}

export default CountryList;