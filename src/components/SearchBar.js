import './SearchBar.css'
import { useEffect, useState } from 'react';

export default function SearchBar({ onChange }) {

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className={'SearchBar SearchBar'}>

            
            <input


                onChange={(e) => { onChange({ value: e.target.value, type: 0 }) }}
                className='SearchBarInput'

                placeholder={''}

            />


            <div>
                <LabeledCheckBox text={"Name"} handleOnChange={handleOnChange} isChecked={isChecked} />
                <LabeledCheckBox text={"Time"} handleOnChange={handleOnChange} isChecked={isChecked} />

                <LabeledCheckBox text={"Zip"} handleOnChange={handleOnChange} isChecked={isChecked} />
                <LabeledCheckBox text={"County"} handleOnChange={handleOnChange} isChecked={isChecked} />
                <LabeledCheckBox text={"Name"} handleOnChange={handleOnChange} isChecked={isChecked} />

            </div>
        </div>
    );

    function LabeledCheckBox({ text, isChecked, handleOnChange }) {
        return <div className='checkbox'><input
            type="checkbox"
            id="topping"
            name="topping"
            value="Paneer"
            checked={isChecked}
            onChange={handleOnChange}
        />
            <label> {text}</label>
        </div>
    }
}