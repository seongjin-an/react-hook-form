import React, { useState } from "react";
import {useForm, FormProvider, useFormContext, FieldValues, FieldValue} from 'react-hook-form'

interface Form {
    name: string;
}

const NestedInput = () => {
    const { register } = useFormContext()
    return <input placeholder="User Name" {...register('name', {minLength: 2, onChange: event => console.log('event:', event.target.value)})}/>
}

const HookFormProvider: React.FC = () => {
    const methods = useForm();
    const [result, setResult] = useState('');
    const onSubmit = (data: FieldValue<Form>) => {
        setResult(JSON.stringify(data))
    }
    return(
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <NestedInput/>
                <input type="submit"/>
                <p>{result}</p>
            </form>
        </FormProvider>
    )
}
export default HookFormProvider