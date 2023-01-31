import React from 'react';
import SuperInputText from "../common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "../common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../common/c2-SuperButton/SuperButton";
import SuperSelect from "../common/c5-SuperSelect/SuperSelect";
import SuperEditableSpan from "../common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperDebouncedInput from "../common/c8-SuperDebouncedInput/SuperDebouncedInput";
import SuperPagination from "../common/c9-SuperPagination/SuperPagination";
import SuperSort, {pureChange} from "../common/c10-SuperSort/SuperSort";
import SuperRadio from "../common/c6-SuperRadio/SuperRadio";
import SuperRange from "../common/c7-SuperRange/SuperRange";


const TestSuperComponents = () => {
    return (
        <div style={{marginTop: '10px'}}>
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
            <SuperPagination page={1} itemsCountForPage={5} totalCount={10} onChange={() => {
            }}/>
            <SuperSort sort={'1'} value={'2'} onChange={() => {
            }}/>
            <SuperRadio/>
            <SuperRange/>
        </div>
    );
};

export default TestSuperComponents;