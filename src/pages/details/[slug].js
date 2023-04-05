import { useRouter } from 'next/router'
import React,{useEffect} from 'react'

export default function Slug() {
  const router=useRouter();
  const[data, setData] = React.useState()

  useEffect(() => {
    setData(router.query.slug);
  }, [])
  
    return (
    <div>
      <p>{data}</p>
    </div>
  )
}
