import React from 'react'

import workers from '../../assets/workers.png'
import './main_page.styles.scss'


class  MainPage extends React.Component {
    
    render(){
        return (
            <div className="section_container">
                <section id="sec1"> 
                    <div  className="main_bg"></div>
                    <div className="shalow_bg"></div>
                    <div className="content">
                        <h1 className="main_title">Trouvez un maalem pour réaliser vos travaux</h1>
                        <div className="form-group">
                            <input  id="input_search" className="form-control" placeholder="Que cherchez vous…" />
                            <select  name="cat_id" id="slect_categ" className="form-control" data-placeholder="Sélectionner une catégorie">
                                <option label="Sélectionner une catégorie" value="">Sélectionner une catégorie</option>
                                <option value="1580" data-parent-level="1">Bâtiment</option>
                                <option value="1589" data-parent-level="1">Camera de surveillance</option>
                                <option value="1593" data-parent-level="1">Carreleur</option>
                                <option value="1783" data-parent-level="1">Construction BTP</option>
                                <option value="1577" data-parent-level="1">Électricien</option>
                                <option value="1588" data-parent-level="1">électroménagers</option>
                                <option value="1581" data-parent-level="1">Forgeron</option>
                                <option value="1586" data-parent-level="1">Installation de climatiseur</option>
                                <option value="1591" data-parent-level="1">Jardinier</option>
                                <option value="1596" data-parent-level="1">Mécanique</option>
                                <option value="1582" data-parent-level="1">Menuiserie</option>
                                <option value="1583" data-parent-level="1">Menuiserie en aluminium</option>
                                <option value="1579" data-parent-level="1">Parabole TV</option>
                                <option value="1584" data-parent-level="1">Pigment / peinture</option>
                                <option value="1585" data-parent-level="1">Plâtre</option>
                                <option value="1578" data-parent-level="1">Plombier</option>
                                <option value="1592" data-parent-level="1">Programmeur</option>
                                <option value="1587" data-parent-level="1">Tapisserie</option>
                                <option value="1595" data-parent-level="1">Teindre des carrosseries</option>
                            </select>
                            <select id="select_lieu" className="form-control">
                                <option label="Sélectionnez le Lieu" value="">Sélectionnez le Lieu</option>
                                <option value="1601" data-parent-level="1">agadir</option>
                                <option value="1780" data-parent-level="1">bni melal</option>
                                <option value="1600" data-parent-level="1">Casablanca</option>
                                <option value="1778" data-parent-level="1">Dakhela</option><option value="1775" data-parent-level="1">Esssaouira</option><option value="1603" data-parent-level="1">Fes</option><option value="1604" data-parent-level="1">Kenitra</option><option value="1777" data-parent-level="1">Khemisat</option><option value="1782" data-parent-level="1">khenifra</option><option value="1774" data-parent-level="1">Laâyone</option><option value="1772" data-parent-level="1">laâyoune</option><option value="1598" data-parent-level="1">Marrakech</option><option value="1771" data-parent-level="1">Meknes</option><option value="1605" data-parent-level="1">Mohammedia</option><option value="1773" data-parent-level="1">oujda</option><option value="1599" data-parent-level="1">Rabat</option><option value="1602" data-parent-level="1">Tanger</option><option value="1781" data-parent-level="1">temara</option><option value="1776" data-parent-level="1">Tétouan</option><option value="1779" data-parent-level="1">Tiznit</option>
                            </select>
                            <button type="button" >Rechercer</button>
                        </div>
                    </div>
                </section>
                <section id="sec2">
                <h1>Bienvenue chez bricom</h1>
                    <div className="content container"> 
                    <div className="text_intro">
                        <h2>Qu'est-ce que bricom?</h2>
                        <p>Bricom est une plate-forme qui offre un espace aux artisans de toutes formes et professions pour afficher leurs services, ainsi qu’au client pour trouver un artisan via Bricom en un clic sans se soucier de la navigation et de la recherche.
                        <br/> <br/>
                        Pour référence, le site Bricom est 100% gratuit et sans aucune commission, ni de la part de l’artisan, ni du client.
                        </p>
                    </div>
                    <div className="img_intro">
                        <img  src={workers} alt="workes"/>
                    </div>
                    </div>
                </section>
                <section id="sec3">C</section>
                <section id="sec4">D</section>
            </div>
    
    
    
        )

    }
    
}

export default MainPage;