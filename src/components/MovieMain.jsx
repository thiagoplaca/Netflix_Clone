import React from "react";
import './MovieMain.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MovieMain = ({ dataMain }) => {

    let dataReleased = new Date(dataMain.first_air_date)

    let genres = []

    for(let i in dataMain.genres) {
        genres.push(dataMain.genres[i].name)
    }

    return (
        <section>
            <div className="card_main" style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${dataMain.backdrop_path})`
            }}>
                <div className="card_main--vertical">
                    <div className="card_main--horizontal">
                        <div className="card_name">{dataMain.original_name}</div>
                        <div className="card_infos">
                            <div className="card_year">{dataMain.vote_average} Pontos.</div>
                            <div className="card_average">{dataReleased.getFullYear()}</div>
                            <div className="card_seasons">{dataMain.number_of_seasons} temporada{dataMain.number_of_seasons !== 1 ? 's' : ''}</div>
                        </div>
                        <div className="card_description">{dataMain.overview}</div>
                        <div className="card_buttons">
                            <a className='card_button--play' href={`/watch/${dataMain.id}`}>Assistir</a>
                            <a className='card_button--watch' href={`/list/add/${dataMain.id}`}>+ Minha Lista</a>
                        </div>
                        <div className="card_genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default MovieMain