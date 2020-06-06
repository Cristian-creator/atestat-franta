import React, { Component } from 'react'

import Card from '../card/Card';

// import crowd from '../../images/crowd1.jpeg';
// import history from '../../images/history2.jpg';
// import geography from '../../images/geography2.jpg';
// import economy from '../../images/sua-economy1.jpg';
// import c from '../../images/c1.png';
// import art from '../../images/art1.jpg';

export default class Cards extends Component {
    render() {
        let history = 'https://www.history.com/.image/t_share/MTY1MTk5NzE5MTM0NDA1OTQ0/topic_bastille_day.jpg';
        // let history = '';
        let crowd = 'https://www.sportsnet.ca/wp-content/uploads/2018/07/19445155-1040x572.jpg';
        let economy = 'https://miro.medium.com/max/1000/1*yCW4YktPkwD4kcYv474guw.jpeg';
        let art = 'https://www.gites.co.uk/en/images/w.900/h.600/c.0/d.gimages/sd.2018-10/i.883c6612c33609721fc56caaa97b7ece.jpg';
        let c = 'https://s.france24.com/media/display/8a85cf2e-f9a9-11e8-8bf1-005056a964fe/w:1240/p:16x9/rentree-scolaire-france-afp_0.webp';
        let geography = 'https://img5.goodfon.com/wallpaper/nbig/7/3f/4k-uhd-background-mountains-valley-doran-valley-i-sallanches.jpg';
        const items = [
            { title: 'istorie', image: history, text: `Prezența omenească pe teritoriul actual al Franței datează din paleoliticul inferior; cele mai vechi urme de viață umană datează de acum circa 1.800.000 de ani.
            Cam de acum 7.000 de ani, această parte a Europei de Vest a intrat în neolitic și locuitorii ei s-au sedentarizat, chiar dacă evoluția aceasta a variat de la regiune la regiune.
            După o puternică dezvoltare demografică și agricolă în mileniile al IV-lea și al III-lea î.e.n., metalurgia și-a făcut apariția la sfârșitul mileniului al III-lea, întâi cu meșteșugul prelucrării aurului, cuprului și bronzului, apoi a fierului - în secolul al VIII-lea î.e.n.
            Începând cu anul 125 î.e.n., sudul Galiei a fost cucerit, încetul cu încetul, de Republica Romană, care a înființat aici orașele Aix-en-Provence, Toulouse și Narbonne.
            După scindarea Imperiului Roman, convertirea la creștinism a căpeteniei france Clovis a făcut din el un aliat al Bisericii creștine și i-a permis să cucerească, la sfârșitul secolului al V-lea și începutul secolului al VI-lea, mare parte din Galia.
            ` },
            { title: 'populatie', image: crowd, text: `
            Conform INSEE, la 1 ianuarie 2014, 66 milioane de oameni trăiau în Franța (cu excepția comunităților de peste mări și Noii Caledonii), dintre care 63,7 de milioane în metropolă și 2,1 milioane în departamentele de peste mări (inclusiv Mayotte).
            Dacă sunt incluși și cei 600.000 de locuitori din comunitățile de peste mări (Polinezia Franceză, Saint-Pierre-et-Miquelon, Wallis și Futuna, Saint-Martin și Saint-Barthélemy) și din Noua Caledonie, populația întregului teritoriu francez atinge 66,6 milioane de locuitori, adică circa 1% din populația mondială.` },
            { title: 'economie',image: economy, text: `
            Economia Franței este o economie socială de piață, bazată pe proprietatea privată. Există o puternică intervenție a statului în economie, începută după al Doilea Război Mondial, deși ea a început să fie contestată după anii 1980. Economia franceză este, în principal, una axată pe servicii.

            În studiul publicat de INSSE, valoarea patrimoniului național a fost evaluată la 12.513 miliarde de euro în 2007. În 2010, numai patrimoniul francezilor atinsese la sfârșitul anului anterior o cifră de aproape 11.000 miliarde de euro, adică de opt ori totalul veniturilor; rata de economisire a atins nivelul excepțional de circa 16% din venituri.
            ` },
            { title: 'arhitectura', image: art, text: `
                Franța deține un patrimoniu arhitectural bogat, mărturie a unei lungi istorii și a întâlnirii mai multor curente diferite.
               Dintre cele 753 de bogății culturale clasificate în patrimoniul mondial de către UNESCO la 27 ianuarie 2012, 34 sunt din Franța, ea fiind a treia țară din lume după numărul de situri culturale de pe această reputată listă. Patrimoniul arhitectural francez clasificat în lista UNESCO include atât edificii culturale religioase (cum ar fi, de exemplu, Abația Fontenay⁠(fr)), cât și civile (castelele din Valea Loarei), industriale (Ocnele regale de la Arc-et-Senans⁠(fr)), militare (orașele fortificate⁠(fr) de Vauban) și urbane (piața Stanislas⁠(fr) din Nancy, centrul istoric al Strasbourgului). Ea conține exemple de arhitectură din toate epocile, de la arhitectura romană (Pont du Gard⁠(en)) până la cea postbelică (centrul orașului Le Havre⁠(fr)), trecând prin capodoperele arhitecturii romane (Biserica din Saint-Savin sur Gartempe), gotică (catedrala din Chartres) și clasică (canal du Midi).
            ` },
            { title: 'geografie',image: geography, text: `
            Franța metropolitană se află la una dintre extremitățile vestice ale Europei. Are ieșire la Marea Nordului către nord, la Canalul Mânecii către nord-vest, la Oceanul Atlantic către vest și la Marea Mediterană către sud-est. Se învecinează cu Belgia și Luxemburg la nord-est, cu Germania și Elveția la est, cu Italia și cu Monaco la sud-est, cu Spania și cu Andorra la sud-vest.

Dacă frontierele sudice ale țării corespund unor creste montane, frontierele nord-estice nu corespund, aproape deloc, vreunor limite geografice fizice sau lingvistice.

Franța metropolitană cuprinde mai multe insule, cea mai mare fiind Corsica, multe fiind, însă, mici insule de coastă. Metropola se încadrează între paralelele de 42°19'46" N și 51°5'47" N, și între meridianele de 4°46' V și 8°14'42" E.` },
            { title: 'educatia', image: c,text: `
            În Franța, educația este obligatorie de la șase la șaisprezece ani, iar școala publică este laică și gratuită. Dacă formarea și plata serviciului de educație, ca și alegerea programelor, cad în sarcina statului, gestiunea unităților școlare primare și secundare este în sarcina comunităților teritoriale locale.
            Aproape 17% dintre elevii învățământului primar și secundar sunt școlarizați în unități private, cea mai mare parte sub contract de asociere cu statul și, adesea, cu cultele religioase.
            Franța a cunoscut în perioada postbelică o mărire considerabilă a ratei de școlarizare. În 1936, mai puțin de 3% dintr-o promoție obținea bacalaureatul; acest procentaj a depășit 30% în 1985 și 60% în 1995.
            ` },
        ];
        return (
            <div>
                { items && items.map((item) => <Card item={item} /> ) }
                
            </div>
        )
    }
}
