import { FC, useState } from "react";
import { Data } from "./types";

const CheckboxList: FC<{ data: Data[] }> = ({ data }) => {
    const dataWithStatus = data.map(item => {
        return { ...item, status: false }
    });

    const [newData, setNewData] = useState(dataWithStatus);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const { checked } = e.target;

        const updatedData = newData.map(item => {
            if (item.id === id) {
                return { ...item, status: checked };
            }
            return item;
        });

        setNewData(updatedData);
    }

    return (
        <>
            <p>{JSON.stringify(newData)}</p>
            <ul>
                {newData.map(listItem => {
                    return <li key={listItem.id}>
                        <input type='checkbox'
                            checked={listItem.status}
                            onChange={e => handleChange(e, listItem.id)}
                        />
                        {listItem.title}
                    </li>;
                })}
            </ul>
        </>
    );
}

export default CheckboxList;
