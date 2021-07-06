import React, { useEffect, useState } from 'react'
import { getCategories } from '../../api/api.categories'
import workers from '../../assets/landing2.png'
import MenuItem from '../../components/MenuItem/MenuItem.component'
import './main_page.styles.scss'

function  MainPage(props) {
    const [sections, setsections] = useState([])
    useEffect(() => {
        getCategories().then((result) => {
            setsections(result.data);
            }).catch((err) => {
                alert(err)
            });
    }, [])
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         sections : [
    //             {
    //               title: 'Bâtiment',
    //               imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    //               id: 1,
    //               linkUrl: 'shop/hats'
    //             },
    //             {
    //               title: 'Camera de surveillance',
    //               imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    //               id: 2,
    //               linkUrl: 'shop/jackets'
    //             },
    //             {
    //               title: 'Électricien',
    //               imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    //               id: 3,
    //               linkUrl: 'shop/sneakers'
    //             },
    //             {
    //               title: 'électroménagers',
    //               imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    //               id: 4,
    //               linkUrl: 'shop/womens'
    //             },
    //             {
    //               title: 'mens',
    //               imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    //               id: 5,
    //               linkUrl: 'shop/mens'
    //             }
    //           ]
    //     }
    // }
        return (
            <div className="section_container ">
                <section id="sec1"> 
                    <div  className="main_bg"></div>
                    <div className="shalow_bg"></div>
                    <div className="content ">
                        <h1 className="main_title">Trouvez un Maalem pour réaliser vos travaux</h1>
                        <div className="form-group ">
                            <input  id="input_search" className="form-control-main" placeholder="Que cherchez vous…" />
                            <select  name="cat_id" id="slect_categ" className="form-control-main" data-placeholder="Sélectionner une catégorie">
                                <option label="Sélectionner une catégorie" value="">Sélectionner une catégorie</option>
                                <option value="1580" data-parent-level="1">Bâtiment</option>
                                <option value="1589" data-parent-level="1">Camera de surveillance</option>
                                <option value="1593" data-parent-level="1">Carreleur</option>
                                <option value="1783" data-parent-level="1">Construction BTP</option>
                                <option value="1577" data-parent-level="1">Électricien</option>
                                <option value="1588" data-parent-level="1">électroménagers</option>
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
                            <select id="select_lieu" className="form-control-main">
                                <option label="Sélectionnez le Lieu" value="">Sélectionnez le Lieu</option>
                                <option value="1601" data-parent-level="1">agadir</option>
                                <option value="1780" data-parent-level="1">bni melal</option>
                                <option value="1600" data-parent-level="1">Casablanca</option>
                                <option value="1778" data-parent-level="1">Dakhela</option><option value="1775" data-parent-level="1">Esssaouira</option><option value="1603" data-parent-level="1">Fes</option><option value="1604" data-parent-level="1">Kenitra</option><option value="1777" data-parent-level="1">Khemisat</option><option value="1782" data-parent-level="1">khenifra</option><option value="1774" data-parent-level="1">Laâyone</option><option value="1772" data-parent-level="1">laâyoune</option><option value="1598" data-parent-level="1">Marrakech</option><option value="1771" data-parent-level="1">Meknes</option><option value="1605" data-parent-level="1">Mohammedia</option><option value="1773" data-parent-level="1">oujda</option><option value="1599" data-parent-level="1">Rabat</option><option value="1602" data-parent-level="1">Tanger</option><option value="1781" data-parent-level="1">temara</option><option value="1776" data-parent-level="1">Tétouan</option><option value="1779" data-parent-level="1">Tiznit</option>
                            </select>
                            <button type="button" style={{cursor:'pointer'}} >Rechercer</button>
                        </div>
                    </div>
                </section>
                <section id="sec2">
                <h1>Bienvenue chez BRICOLEUR</h1>
                    <div className="content container"> 
                    <div className="text_intro">
                        <h2>Qu'est-ce que BRICOLEUR?</h2>
                        <p>BRICOLE est une plate-forme qui offre un espace aux artisans de toutes formes et professions pour afficher leurs services, ainsi qu’au client pour trouver un artisan via Bricom en un clic sans se soucier de la navigation et de la recherche.
                        <br/> <br/>
                        Pour référence, le site BRICOLE est 100% gratuit et sans aucune commission, ni de la part de l’artisan, ni du client.
                        </p>
                    </div>
                    <div className="img_intro">
                        <img  src={workers} alt="workes"/>
                    </div>
                    </div>
                </section>
                <section id="sec3">
                    <h1 className="section-title">Rechercher par métier</h1>
                    <div className="section-content" style={{"position": "relative"}}>
                    {
                        sections.map((category,i)=> {
                            return(
                            <MenuItem key={category.idCateg} category={category}/>
                            )
                        })
                    }
                    </div>
                 
                </section>
                <section id="sec4">D</section>
            </div>
    
    
    
        )
 
    
}

export default MainPage;