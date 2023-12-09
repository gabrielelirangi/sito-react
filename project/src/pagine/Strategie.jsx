/* eslint-disable react/no-unescaped-entities */
import "./Strategie.css";
import sfondo from "./immagini/home.jpg";

export default function Strategie() {
  return (
    <div
      className="box"
      style={{ backgroundImage: `url(${sfondo})` }}
    >
      <h1>Strategia di gioco</h1>
      <div className="box-regole">
        <p>
          Yu-Gi-Oh! è un gioco di carte strategico con molte carte e strategie
          diverse. Tuttavia, qui sono alcune linee guida generali che si possono
          considerare quando si costruisce il proprio mazzo e si sviluppa la
          propria strategia in Yu-Gi-Oh!:
        </p>
        <h3>Regole di base:</h3>
        <p>
          Prima di tutto, è essenziale conoscere le regole di base del gioco.
          Comprendere le fasi di un turno, le regole di evocazione e le
          meccaniche di gioco ti aiuterà a prendere decisioni più informate
          durante le partite.
        </p>
        <h3>Costruisci un mazzo coerente:</h3>
        <p>
          Assicurati che il tuo mazzo abbia una strategia chiara. Concentrati su
          un tema o un tipo di mostro per rendere il tuo mazzo più coerente e
          potente.
        </p>
        <h3>Bilancia il mazzo:</h3>
        <p>
          Trova un equilibrio tra carte di mostro, carte magia, e carte trappola
          nel tuo mazzo. Un mazzo ben bilanciato ti permette di affrontare
          diverse situazioni di gioco.
        </p>
        <h3>Sfrutta le sinergie tra le carte:</h3>
        <p>
          Costruisci il tuo mazzo in modo che le carte si supportino a vicenda.
          Sfrutta le sinergie tra le carte per ottenere combo potenti e avere un
          impatto maggiore sulla partita.
        </p>
        <h3>Conosci le carte del tuo mazzo:</h3>
        <p>
          Familiarizzati con le carte del tuo mazzo. Conoscere le abilità e i
          poteri delle tue carte ti darà un vantaggio strategico durante la
          partita.
        </p>
        <h3>Adatta il mazzo all'attuale meta di gioco:</h3>
        <p>
          Tieni d'occhio l'attuale "meta" di gioco, ovvero le strategie e le
          carte popolari tra i giocatori. Adatta il tuo mazzo per affrontare le
          sfide della meta corrente.
        </p>
        <h3>Tenere conto delle carte proibite e limitate:</h3>
        <p>
          Controlla le carte proibite e limitate nella lista delle carte del
          gioco. Assicurati che le tue carte preferite non siano vietate o
          limitate, altrimenti potresti dover apportare modifiche al tuo mazzo.
        </p>
        <h3>segui gli aggiornamenti delle regole e delle ban-list:</h3>
        <p>
          Rimani aggiornato sugli aggiornamenti delle regole e sulle banlist
          ufficiali. Le regole del gioco e la lista delle carte proibite possono
          cambiare periodicamente, quindi è importante essere informati.
        </p>
      </div>
    </div>
  );
}
