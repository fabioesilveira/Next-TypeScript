"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Product() {

    type Data = {
        name: string;
        email: string;
    }

    const { id } = useParams();
    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            setData(req.data)
        }
        fetchApi();
    }, [id]);

    return (
        <>
            <div>
                {!data ?
                    <span>Loading..</span> :
                    <div>
                        <h1>{data.name}</h1>
                        <h2>{data.email}</h2>
                    </div>}
            </div>
        </>
    )
}