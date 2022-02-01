import React, {useState} from "react";
import {FieldValue, useForm} from 'react-hook-form'

interface Form{
    age: number;
}

const HandleError: React.FC = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [result, setResult] = useState('')
    const onSubmit = (data: FieldValue<Form>) => {
        setResult(JSON.stringify(data))
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="number" placeholder="Age" {...register('age', {required: true, min: 17, max: 40})}/>
            {
                errors.age?.type === 'required' && (
                    <span>Age is required</span>
                )
            }
            {
                errors.age?.type === 'min' && (
                    <span>Minimum age is 17</span>
                )
            }
            {
                errors.age?.type === 'max' && (
                    <span>Maximum age is 40</span>
                )
            }
            <input type="submit"/>
            <p>{result}</p>
        </form>
    )
}
export default HandleError