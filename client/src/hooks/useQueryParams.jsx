import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
}

function useQueryParams(...params) {
    const query = useQuery();

    const values = {};
    params.forEach(
        (param) => query.get(param) && (values[param] = query.get(param))
    );

    console.log('query', values);
    return values;
}

export default useQueryParams;
