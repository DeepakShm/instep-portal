import axios from "axios"
import useSWR from "swr"
import { swrArgs } from "../../common/hooks/useSubmitForm"

const getAllApplications = async (args:swrArgs)=>{
  return await axios({
    method:args.method,
    url:args.url,
    responseType:"json",
    headers:args.headers
})
}

const ShowApplication = ({args}:{args:swrArgs}) => {

  const {data,error} = useSWR(args,getAllApplications)

  if(error) return <pre><code>{JSON.stringify(error?.response?.data, null, 4)}</code></pre>
  if(!data) return <div>loading...</div>

  return (
    <div>
      {/* <h2>All Applications</h2> */}
      <pre><code>{JSON.stringify(data?.data, null, 4)}</code></pre>
    </div>
  )
}

export default ShowApplication