import React from 'react';

export default class SessaoInicial extends React.Component {
    render() {
        const filme = this.props.filme;
        const linkPoster = 'http://image.tmdb.org/t/p/original' + filme.backdrop_path;
        let lancamento = filme.release_date;
        let generos = filme.genres;
        if(lancamento && generos){
            lancamento = lancamento.split("-");
            const anoLancamento = lancamento[0];

            return (
                <div style={{backgroundImage: `url(${linkPoster})`, height: 800}}>
                    <div style={{paddingTop:450, paddingRight:800}}>
                        <h1 style={{color: 'white'}}>
                            {filme.title}
                        </h1>
                        <p style={{color: 'white'}}>
                            {filme.overview}
                        </p>
                        <p style={{color: 'white'}}>
                            {filme.vote_average}/10
                        </p>
                        <p style={{color: 'white'}}>
                            Generos:
                            {generos.map((genero) => {
                                return genero.name + ', ';
                            })}
                        </p>
                        <p style={{color: 'white'}}>
                            Lançamento: {anoLancamento}
                        </p>
                    </div>

                </div>
            )
        }
        return null;


        // lançamento = this.state.filme.release_date.split("-");

    }
}
