import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://global.auxfin.com.np/graphql',
});

const authLink = setContext((_, { headers }) => {
    //const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNzJmODA3NTA2NTRmNjZkZmJhMjk4NmU2ZmM5ZGNhNGYyZmY5NzJjM2FkOTg3M2M1YzAyYzcxYTBmMmMzYmNkODQ5ZjFhNGMzZWYyNzgxOGIiLCJpYXQiOjE3MzQ1MTkxNDkuODQ4ODI0LCJuYmYiOjE3MzQ1MTkxNDkuODQ4ODI3LCJleHAiOjE3NjYwNTUxNDkuNzgwMzIyLCJzdWIiOiI4MDU0NzUiLCJzY29wZXMiOltdfQ.T5ALQ5-k1Fz5UelCfnbPDhm39PwVzljuKRn0eCuwWo-B4wRn8J-4uXn8VdIvExxvhWnSlaJDn7OWaOZFrhzF4sbqnIxSHNVVhAks_Cqx4kGKc0Np4HdoolWvRboYgQFQu-f_mqiLxwyDDGFhcCWkFzrxgd9m_gwwWNe19SNfzYjPO3OCfNsWf3WtBtqsAm41ThVukKaeATCuZPwoU8M1DcD_5X4DuHzbgfV0cCpM7TN-edm0GdYBmoCp2Yv1BMMh2p4r49BTDdiBcWyaWs-mGm2gRgfMrSbwDoLGVC9rlWxlR3QuQL0EbsAxRi_mcVRu9r1O1PcpH70vLry1d9BaU0qN7lg2ChDEaUqCJAwoykAETM-NQsOUeJH0W7U7QOu6oKQqYqTHsBVRnfcDIkrVZIHf742kGeWyW7K2x9ZvR_th3-gvvAW_q5MP1GXDRDWVEGIy2sJ0oUQcqPnPmAaXmpfRxwzgGWxZboV5N8sGWXQ-VXWhuhhECwQeFTaIn2WRBSi8twqNdltPflQhS5lXENIEll__NBXpMVb2HZVcmVLRGMRTHK65c7vDzIFb4czDLxuJc9kiIn41uoVb8UP5cwhFyJ-TiHbx_Tj2gVIRwakKHd11WpvDGM3-gyxBZk3Fa-Ir43XPLQPIGWAdZlT44VRjLfx0yrEHu8bQo6y5wqk'
    const token = localStorage.getItem('access_token');
    console.log(token);
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
})

const client = new ApolloClient({

    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),


});
export default client;