import './SearchBar.css'
import { useEffect, useState } from 'react';

export default function SearchBar({ onChange }) {

    const [isZipChecked, setIsZipChecked] = useState(false);
    const [isNameChecked, setIsNameZipChecked] = useState(true);
    const [isCountyChecked, setIsCountyZipChecked] = useState(false);


    const [searchType, setSearchType] = useState(0);
    const checkZip = () => {

        setIsZipChecked(true);
        setIsNameZipChecked(false);
        setIsCountyZipChecked(false);
        setSearchType(1);

    };

    const checkCounty = () => {
        setIsZipChecked(false);
        setIsNameZipChecked(false);
        setIsCountyZipChecked(true);
        setSearchType(2);

    };
    const checkName = () => {

        setIsZipChecked(false);
        setIsNameZipChecked(true);
        setIsCountyZipChecked(false);
        setSearchType(0);

    };
    return (
        <div className={'SearchBar SearchBar'}>


            <input


                onChange={(e) => { onChange({ value: e.target.value, type: searchType }) }}
                className='SearchBarInput'

                placeholder={'Search For Charity'}

            />


            <div>
                <LabeledCheckBox text={"Name"} handleOnChange={checkName} isChecked={isNameChecked} />

                <LabeledCheckBox text={"Zip"} handleOnChange={checkZip} isChecked={isZipChecked} />
                <LabeledCheckBox text={"County"} handleOnChange={checkCounty} isChecked={isCountyChecked} />

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