import React from 'react';

export default class SessoesCategorizadas extends React.Component {
    renderizaFilmes(filmes){
        return filmes.map((filme) => {
            let linkImg;
            if(!filme.poster_path) linkImg = 'http://www.ekasa.com.br/App_Themes/ekasa/images/not-found.jpg';
            else linkImg = 'http://image.tmdb.org/t/p/original' + filme.poster_path;
            return(
                <div className="Item" style={{backgroundImage: `url(${linkImg})`}}>
                </div>
            )
        });
    }

    renderizaSessaoCategorizada(categoria){
        return(
            <div>
                <h1 style={{color: 'white'}}>
                    {categoria.nomeCategoria}
                </h1>
                {this.renderizaFilmes(categoria.filmes)}
            </div>
        );
    }

    render() {
        if(this.props.categorias) {
            return (
                <div style={{backgroundColor: 'black'}}>
                    {
                        this.props.categorias.map((categoria) => {
                            return this.renderizaSessaoCategorizada(categoria);
                        })}
                </div>
            )
        }
        return null;
    }
}