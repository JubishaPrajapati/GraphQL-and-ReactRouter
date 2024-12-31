import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "../useLazy/query2";
import { GetAddress } from "../useQuery/querirGetAddress";


const GetAddressQuery: React.FC = () => {
    // const [country, setCountry] = useState("");
    const { loading, error, data } = useQuery<GetAddress>(GET_COUNTRY);

    // useEffect(() => {
    //     if (country) {
    //         getCountryaddress({ variables: { byCountry: country } })
    //     }
    // }, [country, getCountryaddress]) // Trigger when `country` changes



    return (
        <div>
            <h3>Get address</h3>

            {/* <input type="text" placeholder="Enter a country name" value={country} onChange={(e) => setCountry(e.target.value)} /> */}

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
export default GetAddressQuery;


