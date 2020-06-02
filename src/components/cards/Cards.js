import React, { Component } from 'react'

import Card from '../card/Card';

import crowd from '../../images/crowd.jpeg';
import history from '../../images/history1.jpg';
import geography from '../../images/geography1.jpg';
import economy from '../../images/economy.jpg';
import c from '../../images/c.jpg';
import art from '../../images/van.jpg';

export default class Cards extends Component {
    render() {
        const items = [
            { title: 'populatie', image: crowd, subtitle: '11.460.983 locuitori', text: 'Belgia are unul dintre cele mai dens populate teritorii din Europa, 97% din populație locuind în mediul urban. ' },
            { title: 'istorie', image: history, text: 'Numele de „Belgia” provine din Gallia Belgica, numele unei provincii romane din nordul Galiei care, înainte de invazia romană din 100 î.e.n., era locuită de Belgae, un amestec de populații celtice și germanice. O migrație treptată a francilor germanici în secolul al V-lea a adus zona sub dominația regilor merovingieni. Schimbarea treptată a echilibrului puterilor în secolul al VIII-lea a dus la evoluția regatului franc în Imperiul Carolingian.  Împăratul Carol al V-lea a extins uniunea personală a celor Șaptesprezece Provincii în anii 1540, făcând din ele mai mult decât o uniune personală, prin Pragmatica Sancțiune din 1549 și și-a sporit influența asupra Principatului Eclesiastic de Liège. Revoluția Belgiană din 1830 a dus la înființarea Belgiei independente, catolice, burgheze, neutre și oficial francofone, condusă de un guvern provizoriu și un congres național.' },
            { title: 'geografie',image: geography, text: 'Belgia se învecinează cu Franța (pe 620 km), Germania (pe 167 km), Luxemburg (pe 148 km) și cu Țările de Jos (450 km). Suprafața sa totală, inclusiv apele de suprafață, este de 33.990 kilometri pătrați; suprafața uscatului este de 30.528 km2. Ea se află între latitudinile de 49° și 53° N, și între longitudinile de 2° și 7° E. Câmpia litorală constă în principal din dune și poldere. Spre interiorul continentului, peisajul rămâne neted și urcă ușor, câmpia fiind udată de numeroase ape, cu văi fertile și cu câmpia nord-estică. Dealurile și podișurile Ardenilor acoperite cu păduri dese sunt mai stâncoase și mai accidentate, cu peșteri și mici chei. Clima este temperat-oceanică, cu precipitații semnificative în toate anotimpurile.' },
            { title: 'economie',image: economy, text: 'Economia Belgiei și infrastructura sunt puternic integrate cu cele ale Europei de Vest. Belgia este situată în centrul unei regiuni puternic industrializate, ceea ce îi rezervă un loc printre primele zece țări în clasamentul comerțului internațional. Economia este caracterizată de o forță de muncă foarte productivă, un PIB ridicat și exporturi importante. Principalele produse de import sunt: alimente, echipamente industriale, produse petroliere și chimice, diamante brute, îmbrăcăminte și accesorii și textile. Principalele produse de export sunt automobilele, produse alimentare, oțel, produse petroliere, mase plastice, textile, diamante finisate.' },
            { title: 'cultura', image: c,text: 'În ciuda diviziunilor politice și lingvistice, regiunea ce corespunde Belgiei actuale a fost centrul înfloririi unor mari mișcări artistice, care au exercitat o puternică influență asupra artei și culturii europene. Astăzi, într-o anumită măsură, viața culturală este concentrată în fiecare comunitate lingvistică, o sferă culturală comună fiind greu de realizat din cauza diferitelor bariere.[58][59][60] Din anii 1970, nu mai există universități și colegii bilingve în țară, cu excepția Academiei Militare Regale și a Academiei Maritime de la Anvers, nici mass-media bilingvă[61] și nu există nicio organizație științifică și culturală în care să fie reprezentate ambele comunități.' },
            { title: 'arta', image: art, text: 'Contribuțiile în domeniul picturii și arhitecturii au fost deosebit de bogate. Arta mosană, cea neerlandeză veche, Renașterea flamandă și pictura barocă și marile exemple de arhitectură romanescă, gotică, renascentistă și barocă sunt pietre de hotar în istoria artei. În vreme ce arta secolului al XV-lea în Țările de Jos a fost dominată de picturile religioase ale lui Jan van Eyck și Rogier van der Weyden, secolul al XVI-lea se caracterizează printr-o gamă mai largă de stiluri, cum ar fi peisajele lui Peter Breughel și reprezentarea anticului de către Lambert Lombard.' }
        ];
        return (
            <div>
                { items && items.map((item) => <Card item={item} /> ) }
                
            </div>
        )
    }
}
