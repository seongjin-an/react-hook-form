import React, {useState} from "react";
import {FieldValue, useForm} from 'react-hook-form'

interface Form{
    age: number;
}

const ApplyValidation: React.FC = () => {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState('')
    const onSubmit = (data: FieldValue<Form>) => {
        setResult(JSON.stringify(data))
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="number" placeholder="Age" {...register('age', {required: true, min: 17})}/>
            <input type="submit"/>
            <p>{result}</p>
        </form>
    )
}
export default ApplyValidation