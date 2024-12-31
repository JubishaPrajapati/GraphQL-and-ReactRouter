import { useQuery } from '@apollo/client';
import { GET_ROLES } from './queries';

const UseQueryComp: React.FC = () => {
    const { loading, error, data } = useQuery(GET_ROLES, {            //usequery returns loading, error and data 
        variables: {    //query ma bhako variables lekhna parcha 
            isMain: true
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h3>Using useQuery</h3>
            <ul>
                {/* {data?.roles.length > 0 && data?.roles.map((role: any) => (
                    <li key={role.id}>
                        {role.name}
                    </li>
                ))} */}

                {data?.roles.map((role: any) => (
                    <li key={role.id}>
                        {role.name} - {role.email}
                    </li>
                ))}


            </ul>
        </div>
    );
};

export default UseQueryComp;