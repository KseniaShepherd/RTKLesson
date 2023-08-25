import { ITodos } from '../model/ITodos'

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    tagTypes: ['Todos'],
    endpoints: (build) => ({

        getAllTodos : build.query<ITodos[], number>({
            query: (limit) => ({
                url: '/todos',
                params: {
                    _limit: limit
                }
            })
        }), 


    })
})