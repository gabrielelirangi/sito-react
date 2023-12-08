/* eslint-disable react/no-unescaped-entities */
// pagina inziale ---->home


import imgBox from "./immagini/sfondo-home.jpg"
import "./Home.css";

export default function Home() {
  return (
    <body>
      <section className="box-img" style={{backgroundImage: `url(${imgBox})`}}>
        <div className="bottone">
          <a href="#bottone1">YU-GHI-OH</a>
        </div>
        <div className="bottone">
          <a href="">SHADDOLL DECK</a>
        </div>
      </section>
      <section className="storia-gioco">
        <h1>Benvenuto nel Mondo di Yu-Gi-Oh! </h1>
        <p>
          Benvenuti nel mondo avvincente e magico di Yu-Gi-Oh!, il gioco di
          carte collezionabili che ha catturato l'immaginazione di milioni di
          giocatori in tutto il mondo. Yu-Gi-Oh! è molto più di un semplice
          gioco di carte; è un'esperienza epica che unisce strategia, abilità e
          l'emozione del duello in un unico pacchetto coinvolgente.
        </p>
        <h3>Il Cuore del Duello</h3>
        <p id="bottone1">
          In Yu-Gi-Oh!, i giocatori si sfidano a duelli usando i loro mazzi
          personalizzati di carte, ognuna con poteri e abilità uniche. Il cuore
          del gioco è la capacità di costruire un mazzo equilibrato, predire le
          mosse dell'avversario e utilizzare astutamente le carte per
          raggiungere la vittoria.
        </p>
        <h3>Collezione Infinita:</h3>
        <p>
          Con una vasta gamma di carte disponibili, Yu-Gi-Oh! offre
          un'esperienza di collezionismo senza fine. Dai potenti mostri alle
          magie e alle trappole strategiche, ogni carta apre nuove possibilità e
          tattiche per i duellanti. La costante introduzione di nuovi set e
          espansioni assicura che il gioco rimanga fresco e stimolante nel
          tempo.
        </p>
        <h3>Duellanti Leggendari</h3>
        <p>
          Yu-Gi-Oh! ha una ricca storia narrativa, iniziata con il manga e
          l'anime originali. Molti personaggi iconici, come Yugi Muto, Seto
          Kaiba e altri, sono diventati leggendari nel mondo dei duelli. I
          giocatori possono incarnare i loro personaggi preferiti e rivivere le
          epiche sfide che li hanno resi famosi.
        </p>
        <h3>Competizione Globale</h3>
        <p>
          Il gioco è un fenomeno globale con tornei a livello mondiale,
          consentendo ai duellanti di misurare le proprie abilità contro
          avversari provenienti da ogni angolo del pianeta. Dai tornei locali
          alle competizioni internazionali, Yu-Gi-Oh! offre un'arena per
          dimostrare chi è il vero Re dei Giochi.
        </p>
        <h3>Strategia in Evoluzione</h3>
        <p>
          Yu-Gi-Oh! è un gioco in costante evoluzione con nuove carte, regole e
          strategie. La community attiva di giocatori contribuisce alla crescita
          continua del gioco, garantendo che ci siano sempre nuove sfide da
          affrontare e nuovi modi di giocare. Esplorate le terre dei Duel
          Monsters, costruite i vostri mazzi e preparatevi per l'emozione dei
          duelli in Yu-Gi-Oh! Unitevi alla community globale di duellanti e
          scoprite il vostro cammino per diventare un vero Maestro dei Giochi!
        </p>
      </section>
    </body>
  );
}
