import { ExchangeRateResponse } from "./nestedQuery";
import { useQuery } from "@apollo/client";
import { GET_EXCHANGERATE } from "./nestedQuery";

const NestedComp: React.FC = () => {
    const { data, loading, error } = useQuery<ExchangeRateResponse>(GET_EXCHANGERATE, {
        variables: {
            byBankId: "35"
        }
    });

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            <h2>Nested query</h2>
            {data?.ExchangeRate.map((rate) => (
                <div key={rate.value_type.id}>
                    <p>Created Date:{rate.created_date}</p>
                    <p>Created Date:{rate.value_type.name}</p>
                </div>
            ))}

        </div>
    )
}
export default NestedComp;