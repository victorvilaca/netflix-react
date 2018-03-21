import React, {Component} from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import SessaoInicial from './componentes/SessaoInicial';
import SessoesCategorizadas from './componentes/SessoesCategorizadas';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {

    constructor() {
        super();
        this.state = {
            filme: [],
            categorias: [],
        };
    }

    componentDidMount() {
        this.fazRequisicaoNaAPI('680');
        this.fazRequisicaoNaAPI('Mais Recentes');
        this.fazRequisicaoNaAPI('Acao');
        this.fazRequisicaoNaAPI('Animacao');
        this.fazRequisicaoNaAPI('Comedia');
        this.fazRequisicaoNaAPI('Romance');
    }

    fazRequisicaoNaAPI(search){
        //Se 'search' não for um número, então é um gênero. Se for um número, é o ID de um filme
        if(isNaN(search)) {
            switch (search) {
                case 'Mais Recentes':
                    let dataHoje = this.formataData(new Date());
                    console.log('data', dataHoje);
                    const requestMaisRecentes = `https://api.themoviedb.org/3/discover/movie?api_key=480e153975e045270d1160550d364852&language=pt-BR&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&release_date.lte=${dataHoje}`;
                    fetch(requestMaisRecentes)
                        .then(results => {
                            return results.json();
                        })
                        .then(data => {
                            let categorias = Object.assign({}, this.state.categorias);
                            categorias.nomeCategoria = 'Mais Recentes';
                            categorias.filmes = data.results;
                            this.limitaNumeroFilmes(categorias.filmes);
                            let arrayVar = this.state.categorias.slice();
                            arrayVar.push(categorias);
                            this.setState({categorias: arrayVar});
                        });
                    break;
                case 'Acao':
                    const requestAcao = 'https://api.themoviedb.org/3/genre/28/movies?api_key=480e153975e045270d1160550d364852&language=pt-BR&include_adult=false';
                    fetch(requestAcao)
                        .then(results => {
                            return results.json();
                        })
                        .then(data => {
                            let categorias = Object.assign({}, this.state.categorias);
                            categorias.nomeCategoria = 'Ação';
                            categorias.filmes = data.results;
                            this.limitaNumeroFilmes(categorias.filmes);
                            let arrayVar = this.state.categorias.slice();
                            arrayVar.push(categorias);
                            this.setState({categorias: arrayVar});
                        });
                    break;
                case 'Animacao':
                    const requestAnimacao = 'https://api.themoviedb.org/3/genre/16/movies?api_key=480e153975e045270d1160550d364852&language=pt-BR&include_adult=false';
                    fetch(requestAnimacao)
                        .then(results => {
                            return results.json();
                        })
                        .then(data => {
                            let categorias = Object.assign({}, this.state.categorias);
                            categorias.nomeCategoria = 'Animação';
                            categorias.filmes = data.results;
                            this.limitaNumeroFilmes(categorias.filmes);
                            let arrayVar = this.state.categorias.slice();
                            arrayVar.push(categorias);
                            this.setState({categorias: arrayVar});
                        });
                    break;
                case 'Comedia':
                    const requestComedia = 'https://api.themoviedb.org/3/genre/35/movies?api_key=480e153975e045270d1160550d364852&language=pt-BR&include_adult=false';
                    fetch(requestComedia)
                        .then(results => {
                            return results.json();
                        })
                        .then(data => {
                            let categorias = Object.assign({}, this.state.categorias);
                            categorias.nomeCategoria = 'Comédia';
                            categorias.filmes = data.results;
                            this.limitaNumeroFilmes(categorias.filmes);
                            let arrayVar = this.state.categorias.slice();
                            arrayVar.push(categorias);
                            this.setState({categorias: arrayVar});
                        });
                    break;
                case 'Romance':
                    const requestRomance = 'https://api.themoviedb.org/3/genre/10749/movies?api_key=480e153975e045270d1160550d364852&language=pt-BR&include_adult=false';
                    fetch(requestRomance)
                        .then(results => {
                            return results.json();
                        })
                        .then(data => {
                            let categorias = Object.assign({}, this.state.categorias);
                            categorias.nomeCategoria = 'Romance';
                            categorias.filmes = data.results;
                            this.limitaNumeroFilmes(categorias.filmes);
                            let arrayVar = this.state.categorias.slice();
                            arrayVar.push(categorias);
                            this.setState({categorias: arrayVar});
                        });
                    break;
                default:
                    console.log("Gênero inválido");
            }
        } else {
            const requestPorID = `https://api.themoviedb.org/3/movie/${search}?api_key=480e153975e045270d1160550d364852&language=pt-BR`;
            fetch(requestPorID)
                .then(results => {
                    return results.json();
                })
                .then(data => {
                    this.setState({filme: data});
                });
        }

    }

    formataData(data) {
        var d = new Date(data),
            mes = '' + (d.getMonth() + 1),
            dia = '' + d.getDate(),
            ano = d.getFullYear();

        if (mes.length < 2) mes = '0' + mes;
        if (dia.length < 2) dia = '0' + dia;

        return [ano, mes, dia].join('-');
    }

    limitaNumeroFilmes(arrayFilmes){
        for(let i = 0; i < arrayFilmes.length; i++){
            if(i>7){
                delete arrayFilmes[i];
            }
        }
    }

    render() {
        return (
            <div style={{backgroundColor: 'black'}}>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <Navbar />
                    <SessaoInicial
                        filme={this.state.filme}
                    />
                    <SessoesCategorizadas
                        categorias={this.state.categorias}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
