import { useLazyQuery } from "@apollo/client";
import { GET_COUNTRY } from "./query2";
import { useEffect, useState } from "react";
import { Getresponse } from "./query2";


const LazyQuery2: React.FC = () => {
    const [country, setCountry] = useState("");
    const [getCountryaddress, { loading, error, data }] = useLazyQuery<Getresponse>(GET_COUNTRY);

    useEffect(() => {
        if (country) {
            getCountryaddress({ variables: { byCountry: country } })
        }
    }, [country, getCountryaddress]) // Trigger when `country` changes



    return (
        <div>
            <h3>Use lazy query to get country details</h3>

            <input type="text" placeholder="Enter a country name" value={country} onChange={(e) => setCountry(e.target.value)} />

            {loading && <p>loading...</p>}
            {error && <p>Error:{error.message}</p>}

            {/* display fetched data */}
            <div>
                <h3>Results:</h3>
                {data?.getCountryAddress?.map((address: any) => (
                    <div key={address.id}>
                        <p>Country: {address.country}</p>
                        <p>Latitude: {address.latitude}</p>
                        <p>Longitude: {address.longitude}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default LazyQuery2;


