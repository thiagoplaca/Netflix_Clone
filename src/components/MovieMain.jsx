import React from "react";
import './MovieMain.css'

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
                        <div className="card__infos">
                            <div className="card__name">{dataMain.original_name} pontos</div>
                            <div className="card_average">{dataReleased.getFullYear()}</div>
                            <div className="card_years">{dataMain.vote_average}</div>
                            <div className="card_seasons">{dataMain.number_of_seasons} temporada{dataMain.number_of_seasons !== 1 ? 's' : ''}</div>
                        </div>
                        <div className="card_description">{dataMain.overview}</div>
                        <div className="card_buttons">
                            <a href={`/watch/${dataMain.id}`}>Assistir</a>
                            <a href={`/list/add/${dataMain.id}`}>+ Minha Lista</a>
                        </div>
                        <div className="card__genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default MovieMain