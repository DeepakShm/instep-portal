import { NextPage } from 'next'
import Head from "next/head";
import Link from 'next/link';
import { useState } from 'react';
import { swrArgs } from '../common/hooks/useSubmitForm';
import ShowApplication from '../modules/dashboard/ShowApplication';

const Applications: NextPage = () => {
  const [type, setType] = useState<"ALL" | "ONE" | "NONE">("NONE");
  const [email,setEmail] = useState<string>('');

  const getApplicationArgs:any = {
    "ALL":{
      url: "http://localhost:3010/applyform",
      method: "get",
      // headers: { "Authorization": "Bearer adminToken" }
    },
    "ONE":{
      url: `http://localhost:3010/applyform/user?email=${email}`,
      method: "get",
    },
  }

  return (
    <div className='p-4'>
      <Head>
        <title>Applications</title>
      </Head>
      <div>
      <Link href="/" >
            <button>Home</button>
      </Link>
      </div>
      <h1 className='text-xl font-bold'>
        Applications
      </h1>
      <div className='flex col justify-between m-4'>
        <button onClick={()=>setType("ALL")} >All Application</button>
        <div className='flex row'>
          <input className='border-2 p-2' type="email" name="email" placeholder='enter email here...' value={email} onChange={(e)=>{setEmail(e.target.value);setType("NONE")}} />
          <button onClick={()=>{setType("ONE")}} >Show</button>
        </div>

      </div>
      {
        
        type!=="NONE" && <ShowApplication args={getApplicationArgs[type]} />

      }

    </div>
  )
}

export default Applications