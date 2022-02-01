import React from "react";
import {useForm} from "react-hook-form";

const WatchField: React.FC = () => {
    const {register, watch} = useForm()
    const watchNickname = watch('nickname', 'Easton')

    return(
        <>
            <input type="text" placeholder="Nick Name" {...register('nickname')}/>
            <p>{watchNickname}</p>
        </>
    )
}
export default WatchField