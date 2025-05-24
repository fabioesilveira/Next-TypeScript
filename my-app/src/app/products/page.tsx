"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Products() {
    
    type Data = {
        id: number;
        name: string;
        email: string;
    }

    const [data, setData] = useState<Data[] | null>(null);

    const router = useRouter();

    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get("https://jsonplaceholder.typicode.com/users");
            setData(req.data)
        }
        fetchApi();
    }, [])
    
    return (
        <>
        <div>
            { !data ? <span>Loading..</span> : data.map((e) => (
                <div key={e.id} onClick={() => router.push(`/products/${e.id}`)}>
                    <h2>{e.name}</h2>
                    <h3>{e.email}</h3>
                    </div>
            ))}
       
        </div>    
        </>
    )
}