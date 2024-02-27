import { FC } from 'react';
import CheckboxList from './CheckboxList';
import ExampleAPIToDos from './ExampleAPIToDos';

const Dashboard: FC = () => {
    const data = [{ id: 1, title: 'Checkbox 1' }, { id: 2, title: 'Checkbox 2' }, { id: 3, title: 'Checkbox 3' }];


    return (
        <div>
            <div>
                <CheckboxList data={data} />
            </div>
            <br />
            <h1>----------------------------</h1>
            <br />
            <div>
                <ExampleAPIToDos />
            </div>
        </div>
    );
}

export default Dashboard;
