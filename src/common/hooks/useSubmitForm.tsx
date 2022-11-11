import axios ,{AxiosError,AxiosResponse,AxiosRequestHeaders} from "axios";
import { useState } from "react";
import useSWR from "swr";
import { ApplyFormDetails } from "../types/applicationForm";

export type swrArgs = {
    url:string,
    method:"post"|"get"|"put"|"patch"|"delete"
    body?:any,
    baseURL?:"http://localhost:3010",
    headers?:any
}

export const  saveDetails = async (args:swrArgs)=>{
    console.log("fetcher : ",args)
    if(args===null)
        return null;

    return await axios({
        method:args.method,
        url:args.url,
        data:args?.body,
        responseType:"json",
    })
}

export default function useSubmitForm(formValue:ApplyFormDetails ) {
    const [shouldFetch,setShouldFetch] = useState<boolean>(false);
    const [details,setDetails] = useState<ApplyFormDetails>(formValue);

    const args:swrArgs = {
        url:"http://localhost:3010/applyform/step/1",
        method:"post",
        body:formValue
    }

    const {data,error} = useSWR(shouldFetch ? {...args,body:details}:null,saveDetails,{revalidateIfStale:false,revalidateOnFocus:false});

    return {
        data:data,
        error:error,
        loading:!error && !data && shouldFetch,
        setShouldFetch,
        setDetails
    }

}