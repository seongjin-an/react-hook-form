import React, {useState} from "react";
import {useForm, Controller, SubmitHandler, FieldValue, FieldValues} from "react-hook-form";
import { Input } from "@material-ui/core";

interface Form {
    age: number;
}

const HookForm: React.FC = () => {
    const { handleSubmit, control, formState: { errors }} = useForm();
    const [result, setResult] = useState<string>('')
    const onSubmit = (data: FieldValue<Form>) => {
        setResult(JSON.stringify(data))
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <Controller
                    name="age"
                    control={control}
                    defaultValue={33}
                    rules={{ required: true, min: 17, max: 40}}
                    render={({field}) => <Input {...field}/>}/>
                {
                    errors.age?.type === 'required' && <span>Age is required</span>
                }
                {
                    errors.age?.type === 'min' && <span>Minimum age is 17</span>
                }
                {
                    errors.age?.type === 'max' && <span>Maximum Age is 40</span>
                }
            </div>
            <Input type="submit"/>
            <p>{result}</p>
        </form>
    )
}
export default HookForm