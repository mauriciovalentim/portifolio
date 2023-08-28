import "./App.css";
import monitor from "./assets/monitor.png";

function App() {
    const tech = ["HTML", "CSS", "Javascript", "API Rest"];
    return (
        <>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <header>
                <p className="introduce">Oi, meu nome é Mauricio</p>
                <p className="jobPosition">
                    WEB
                    <div className="social" id="linkedin"></div>
                    <div className="social" id="github"></div>
                    <div className="social" id="three"></div>
                    <br></br>
                    DEVELOPER
                </p>
                <p className="info">
                    Estudante de Análise e desenvolvimento de sistemas em busca
                    do primeiro estágio
                </p>
            </header>
            <main>
                <div className="arrowContainer">
                    <span className="material-symbols-outlined">
                        chevron_left
                    </span>
                </div>
                <div className="project">
                    <div className="monitor">
                        <div className="screen">
                            <iframe
                                className="webpage"
                                src="https://mauriciovalentim.github.io/pokedex/"
                                frameborder="0"
                            ></iframe>
                        </div>
                        {/*<img src={monitor} alt="monitor" className="screen"></img>*/}
                    </div>
                    <div className="info2">
                        <div className="coffee"></div>
                        <div className="paper">
                            <h2>Pokedex</h2>
                            <p>
                                Descrição:{" "}
                                {
                                    "Aplicativo com listagem dos 151 primeiros pokemons"
                                }
                            </p>
                            <p>Tecnologias: {tech.map((t, i) => i < tech.length -1 ? t+', ': t)}</p>
                        </div>
                    </div>
                </div>
                <div className="arrowContainer">
                    <span className="material-symbols-outlined" id="arrowRight">
                        chevron_left
                    </span>
                </div>
            </main>
        </>
    );
}

export default App;
