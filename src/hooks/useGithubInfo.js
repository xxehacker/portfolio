import React , {useEffect,useState} from 'react'

function useGithubInfo() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{

        ;(async () => {
            try {
                const res = await fetch('https://api.github.com/users/xxehacker');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setData(data);
            } catch (err) {
                setError(err);
            }
        })();

    },[data])
    
    return { data, error };
    
}

export default useGithubInfo;