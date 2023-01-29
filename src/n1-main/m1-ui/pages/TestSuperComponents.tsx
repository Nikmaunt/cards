import React from 'react';
import SuperInputText from "../common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "../common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../common/c2-SuperButton/SuperButton";
import SuperSelect from "../common/c5-SuperSelect/SuperSelect";
import SuperEditableSpan from "../common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperDebouncedInput from "../common/c8-SuperDebouncedInput/SuperDebouncedInput";


const TestSuperComponents = () => {
    return (
        <div>
            <div>
                <SuperInputText/>
                <SuperDebouncedInput/>
            </div>
            <SuperCheckbox/>
            <div>
                <SuperButton>Submit</SuperButton>
            </div>
            <div>
                <SuperSelect/>
            </div>

            <SuperEditableSpan/>

        </div>
    );
};

export default TestSuperComponents;