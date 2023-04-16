import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function Detail(){
    const {id} = useParams();
    console.log(id);

    const [loading, setLoading] = useState(true);
    const [movieInfo, setMovieInfo] = useState(null);

    const getMovie = async()=>{
        
        const json = await( 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            console.log(json);
            setMovieInfo(json.data.movie);
            //여기가 중요
            setLoading(false);
        };



    useEffect(()=>{
        getMovie();
    },[id]);


    return (
        <div >
            <h1>Detail</h1>
            
            {loading? (<strong>Loading...</strong>) 
            : 
            (
                <div>
                    <h1>{movieInfo.title_long}</h1>
                    <strong>{movieInfo.description_intro}</strong>
                </div>
            )}
       </div>
    
    );
}

export default Detail;
