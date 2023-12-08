/* eslint-disable react/no-unescaped-entities */
// pagina inziale ---->home

import imgBox from "./immagini/sfondo-home.jpg";
import img1 from "./immagini/img-sez1.jpg";
import img2 from "./immagini/Collezione.jpg";
import img3 from "./immagini/imgSezione4.jpg";
import img4 from "./immagini/imgSez5.jpg";
import sfondo from "./immagini/home.jpg";
import "./Home.css";

export default function Home() {
  return (
    <body style={{backgroundImage: `url(${sfondo})`}}>
      <section
        className="box-img"
        style={{ backgroundImage: `url(${imgBox})` }}
      >
        <div className="bottone">
          <a href="#bottone1">YU-GHI-OH</a>
        </div>
        <div className="bottone">
          <a href="">SHADDOLL DECK</a>
        </div>
      </section>

      <section className="storia-gioco">
          <h1 id="bottone1">Benvenuto nel Mondo di Yu-Gi-Oh! </h1>
        <div className="sezione1">
          <img src={img1} alt=""  className="img1"/>
          <div className="testo">
            <p >
              Benvenuti nel mondo avvincente e magico di Yu-Gi-Oh!, il gioco di
              carte collezionabili che ha catturato l'immaginazione di milioni
              di giocatori in tutto il mondo. Yu-Gi-Oh! è molto più di un
              semplice gioco di carte; è un'esperienza epica che unisce
              strategia, abilità e l'emozione del duello in un unico pacchetto
              coinvolgente.
            </p>
          </div>
        </div>

        
        <div className="sezione2">
          
          <h3>Il Cuore del Duello</h3>
          <p >
            In Yu-Gi-Oh!, i giocatori si sfidano a duelli usando i loro mazzi
            personalizzati di carte, ognuna con poteri e abilità uniche. Il
            cuore del gioco è la capacità di costruire un mazzo equilibrato,
            predire le mosse dell'avversario e utilizzare astutamente le carte
            per raggiungere la vittoria.
          </p>
        </div>


        <div className="sezione3">
          <img src={img2} alt="" className="imgSez3"/>
          {/* <h3>Collezione Infinita:</h3> */}
          <p>
            Con una vasta gamma di carte disponibili, Yu-Gi-Oh! offre
            un'esperienza di collezionismo senza fine. Dai potenti mostri alle
            magie e alle trappole strategiche, ogni carta apre nuove possibilità
            e tattiche per i duellanti. La costante introduzione di nuovi set e
            espansioni assicura che il gioco rimanga fresco e stimolante nel
            tempo.
          </p>
        </div>


        <h3 className="titolo-sez4">Duellanti Leggendari</h3>
        <div className="sezione4">
          <img src={img3} alt="" />
          <p>
            Yu-Gi-Oh! ha una ricca storia narrativa, iniziata con il manga e
            l'anime originali. Molti personaggi iconici, come Yugi Muto, Seto
            Kaiba e altri, sono diventati leggendari nel mondo dei duelli. I
            giocatori possono incarnare i loro personaggi preferiti e rivivere
            le epiche sfide che li hanno resi famosi.
          </p>
        </div>


        <h3 className="titolo-sez5">Competizione Globale</h3>
        <div className="sezione5">
          <img src={img4} alt="" />
          <p>
            Il gioco è un fenomeno globale con tornei a livello mondiale,
            consentendo ai duellanti di misurare le proprie abilità contro
            avversari provenienti da ogni angolo del pianeta. Dai tornei locali
            alle competizioni internazionali, Yu-Gi-Oh! offre un'arena per
            dimostrare chi è il vero Re dei Giochi.
          </p>
        </div>


      
      </section>


     
    </body>
  );
}
