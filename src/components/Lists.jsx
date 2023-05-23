import React from "react";
import './Lists.css'
import MovieRow from "./MovieRow";

const Lists = ({ movieList }) => {
    return (
        <div className="page">
            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow  key={key} title={item.title} items={item.items}/>
            ))}
            </section>
        </div>

    )
}

export default Lists