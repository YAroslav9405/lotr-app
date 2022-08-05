import Footer from "../../componets/Footer/Footer";
import Header from "../../componets/Header/Header";
import map from "../../img/map/middle-earth.jpg";
import point from "../../img/map/map-point.svg";
import bag from "../../img/map/bag-end.webp";
import bree from "../../img/map/bree.webp";
import isengard from "../../img/map/isengard.webp";
import rivendell from "../../img/map/rivendell.webp";
import edoras from "../../img/map/edoras.webp";
import erech from "../../img/map/erech.jpeg";
import minasTirith from "../../img/map/minas_tirith.webp";
import blackGate  from "../../img/map/black-gate.webp";
import baradDur from "../../img/map/barad-dur.webp";
import erebor from "../../img/map/erebor.jpeg";
import moria from "../../img/map/moria.webp";
import helmsDeep from "../../img/map/helms-deep.jpeg";
import lothorien from "../../img/map/lothorien.jpeg";
import mountDoom from "../../img/map/mount_doom.webp";
import {useState} from 'react';
import "@fancyapps/ui/dist/fancybox.css";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

const Map = () => {

    const [activeId, setActiveId] = useState();
   

    return (
        <div>
            <Header/>
            <main className="main">
                <section className="map">
                    <div className="container">
                        <div className="link-holder">
                            <a href="#map" className="link">
                                Scroll to  Interactive Map<span></span>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="interactive" id="map">
                    <div className="section-container">
                        <div className="title-holder-main">
                            <h2 className="main-title">Interactive Map of Middle-Earth</h2>
                        </div>
                        <div className="map-holder">
                            <img src={map} alt="interactive-map" className="middle-map" />
                            <div className="point-wraper">
                                <div className="point-holder1" onClick={() => setActiveId(1)}>
                                    <img src={point} alt="point" className="point"/>
                                </div>
                                <div className={`modal1 ${activeId === 1 ? "active" : null}`} >
                                    <div className="title-holder">
                                        <p className="title">Bag End</p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            Bag End was a smial situated at the end of Bagshot Row in Hobbiton.
                                            It was the home of Bilbo Baggins, afterwards of Frodo Baggins, and later of Samwise Gamgee 
                                            and his wife Rosie Cotton.
                                         </p>
                                    </div>
                                    <div className="modal-img-holder">
                                        <img src={bag} alt="img" className="modal-img" />
                                    </div>
                                    <div className="close-wraper">
                                        <a href="https://youtu.be/vnIWQsnhlIk" className="video-modal" data-fancybox>video</a>
                                        <button className="close-modal" onClick={() => setActiveId(undefined)}>close</button>
                                    </div>
                                </div>
                            </div>
                            <div className="point-wraper">
                                <div className="point-holder2" onClick={() => setActiveId(2)}>
                                    <img src={point} alt="point" className="point"/>
                                </div>
                                <div className={`modal2 ${activeId === 2 ?  "active" : null}`} >
                                    <div className="title-holder">
                                        <p className="title">Bree</p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            Bree was a village of Men and hobbits, located east of the Shire and south of Fornost in Eriador.
                                            The village was bordered on the north side by Bree-hill, from which stretched a dike and hedge in
                                            a great semicircle protecting the town. This barrier had three gates, through which the Great East
                                            Road passed.
                                         </p>
                                    </div>
                                    <div className="modal-img-holder">
                                        <img src={bree} alt="img" className="modal-img" />
                                    </div>
                                    <div className="close-wraper">
                                        <a href="https://youtu.be/WmghV5AimjU" className="video-modal" data-fancybox>video</a>
                                        <button className="close-modal" onClick={() => setActiveId(undefined)}>close</button>
                                    </div>
                                </div>
                            </div>
                            <div className="point-wraper">
                                <div className="point-holder3" onClick={() => setActiveId(3)}>
                                    <img src={point} alt="point" className="point"/>
                                </div>
                                <div className={`modal3 ${activeId === 3 ? "active" : null}`} >
                                    <div className="title-holder">
                                        <p className="title">Rivendell</p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            Rivendell, also known as Imladris in Sindarin, was an Elven town and the 
                                            house of Elrond located in Middle-earth. It is described as "The Last Homely
                                            House East of the Sea" in reference to Valinor, which was west of the Great 
                                            Sea in Aman.
                                         </p>
                                    </div>
                                    <div className="modal-img-holder">
                                        <img src={rivendell} alt="img" className="modal-img" />
                                    </div>
                                    <div className="close-wraper">
                                        <a href="https://youtu.be/QmDl8YjwIG8" className="video-modal" data-fancybox>video</a>
                                        <button className="close-modal" onClick={() => setActiveId(undefined)}>close</button>
                                    </div>
                                </div>
                            </div>
                            <div className="point-wraper">
                                <div className="point-holder4" onClick={() => setActiveId(4)}>
                                    <img src={point} alt="point" className="point"/>
                                </div>
                                <div className={`modal4 ${activeId === 4 ? "active" : null}`} >
                                    <div className="title-holder">
                                        <p className="title">Isengard</p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            Isengard, also known as Angrenost ('Iron Fortress') in Sindarin, was one of the three major fortresses 
                                            of Gondor, and held within it one of the realm's palantíri. However, in the latter half of the Third Age, 
                                            the stronghold came into the possession of Saruman, becoming his home and personal domain until his defeat 
                                            in the War of the Ring.
                                         </p>
                                    </div>
                                    <div className="modal-img-holder">
                                        <img src={isengard} alt="img" className="modal-img" />
                                    </div>
                                    <div className="close-wraper">
                                        <a href="https://youtu.be/LwinMu7-ZrI" className="video-modal" data-fancybox>video</a>
                                        <button className="close-modal" onClick={() => setActiveId(undefined)}>close</button>
                                    </div>
                                </div>
                            </div>
                            <div className="point-wraper">
                                <div className="point-holder5" onClick={() => setActiveId(5)}>
                                    <img src={point} alt="point" className="point"/>
                                </div>
                                <div className={`modal5 ${activeId === 5 ? "active" : null}`} >
                                    <div className="title-holder">
                                        <p className="title">Edoras</p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            Edoras (Rohirric for 'the courts') was the capital of Rohan. Built principally of wood, 
                                            Edoras was also where Rohan's kings were buried, in two lines of Barrows just outside the 
                                            main gate.
                                        </p>
                                    </div>
                                    <div className="modal-img-holder">
                                        <img src={edoras} alt="img" className="modal-img" />
                                    </div>
                                    <div className="close-wraper">
                                        <a href="https://youtu.be/iM92rDI-5FI" className="video-modal" data-fancybox>video</a>
                                        <button className="close-modal" onClick={() => setActiveId(undefined)}>close</button>
                                    </div>
                                </div>
                            </div>
                            <div className="point-wraper">
                                <div className="point-holder6" onClick={() => setActiveId(6)}>
                                    <img src={point} alt="point" className="point"/>
                                </div>
                                <div className={`modal6 ${activeId === 6 ? "active" : null}`} >
                                    <div className="title-holder">
                                        <p className="title">Erech</p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            A cave in which the souls of an ancient people were traped. An oath was made 
                                            that was keeping them locked in the physical world. When that oath was filled 
                                            they were freed.
                                        </p>
                                    </div>
                                    <div className="modal-img-holder">
                                        <img src={erech} alt="img" className="modal-img" />
                                    </div>
                                    <div className="close-wraper">
                                        <a href="https://youtu.be/LNLmyVZEhzs" className="video-modal" data-fancybox>video</a>
                                        <button className="close-modal" onClick={() => setActiveId(undefined)}>close</button>
                                    </div>
                                </div>
                            </div>
                            <div className="point-wraper">
                                <div className="point-holder7" onClick={() => setActiveId(7)}>
                                    <img src={point} alt="point" className="point"/>
                                </div>
                                <div className={`modal7 ${activeId === 7 ? "active" : null}`} >
                                    <div className="title-holder">
                                        <p className="title">Minas Tirith</p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            Minas Tirith, the Tower of Guard, formerly and eventually again known as Minas Anor, 
                                            was the capital city of Gondor from TA 1640 onward. Many important events took place 
                                            in and in front of the city, such as the Battle of the Pelennor Fields and the coronation 
                                            of Aragorn II Elessar.
                                        </p>
                                    </div>
                                    <div className="modal-img-holder">
                                        <img src={minasTirith} alt="img" className="modal-img" />
                                    </div>
                                    <div className="close-wraper">
                                        <a href="https://youtu.be/JCF0NWWuXsk" className="video-modal" data-fancybox>video</a>
                                        <button className="close-modal" onClick={() => setActiveId(undefined)}>close</button>
                                    </div>
                                </div>
                            </div>
                            <div className="point-wraper">
                                <div className="point-holder8" onClick={() => setActiveId(8)}>
                                    <img src={point} alt="point" className="point"/>
                                </div>
                                <div className={`modal8 ${activeId === 8 ? "active" : null}`} >
                                    <div className="title-holder">
                                        <p className="title">Black Gate</p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            The Black Gate or Morannon was a gate built across Cirith Gorgor, and the most fortified, 
                                            direct entrance into Sauron's realm of Mordor.
                                        </p>
                                    </div>
                                    <div className="modal-img-holder">
                                        <img src={blackGate} alt="img" className="modal-img" />
                                    </div>
                                    <div className="close-wraper">
                                        <a href="https://youtu.be/15MHyZ1RH-A" className="video-modal" data-fancybox>video</a>
                                        <button className="close-modal" onClick={() => setActiveId(undefined)}>close</button>
                                    </div>
                                </div>
                            </div>
                            <div className="point-wraper">
                                <div className="point-holder9" onClick={() => setActiveId(9)}>
                                    <img src={point} alt="point" className="point"/>
                                </div>
                                <div className={`modal9 ${activeId === 9 ? "active" : null}`} >
                                    <div className="title-holder">
                                        <p className="title">Barad-dûr</p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            Barad-dûr ("Dark Fortress") was the Dark Lord Sauron's central stronghold in Mordor, serving 
                                            as his base of operations in Middle-earth during the Second Age and late Third Age.
                                        </p>
                                    </div>
                                    <div className="modal-img-holder">
                                        <img src={baradDur} alt="img" className="modal-img" />
                                    </div>
                                    <div className="close-wraper">
                                        <a href="https://youtu.be/c4tr83RTDPI" className="video-modal" data-fancybox>video</a>
                                        <button className="close-modal" onClick={() => setActiveId(undefined)}>close</button>
                                    </div>
                                </div>
                            </div>
                            <div className="point-wraper">
                                <div className="point-holder10" onClick={() => setActiveId(10)}>
                                    <img src={point} alt="point" className="point"/>
                                </div>
                                <div className={`modal10 ${activeId === 10 ? "active" : null}`} >
                                    <div className="title-holder">
                                        <p className="title">Erebor</p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            The Lonely Mountain, known in Sindarin as Erebor, referred to both a mountain in northern Rhovanion and the subterranean Dwarven city contained within it. In the latter half of the Third Age, it became the greatest Dwarf city in Middle-earth.
                                            It was located northeast of Mirkwood, near the Grey Mountains, and was the source of the River Running.
                                        </p>
                                    </div>
                                    <div className="modal-img-holder">
                                        <img src={erebor} alt="img" className="modal-img" />
                                    </div>
                                    <div className="close-wraper">
                                        <a href="https://youtu.be/gPCjIhCt2ns" className="video-modal" data-fancybox>video</a>
                                        <button className="close-modal" onClick={() => setActiveId(undefined)}>close</button>
                                    </div>
                                </div>
                            </div>
                            <div className="point-wraper">
                                <div className="point-holder11" onClick={() => setActiveId(11)}>
                                    <img src={point} alt="point" className="point"/>
                                </div>
                                <div className={`modal11 ${activeId === 11 ? "active" : null}`} >
                                    <div className="title-holder">
                                        <p className="title">Khazad-dûm</p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            Khazad-dûm, commonly known as Moria or the Dwarrowdelf, was an underground kingdom beneath 
                                            the Misty Mountains. It was known for being the ancient realm of the Dwarves of Durin's Folk, 
                                            and the most famed of all Dwarven realms.
                                        </p>
                                    </div>
                                    <div className="modal-img-holder">
                                        <img src={moria} alt="img" className="modal-img" />
                                    </div>
                                    <div className="close-wraper">
                                        <a href="https://youtu.be/BpUc5q3-EvI" className="video-modal" data-fancybox>video</a>
                                        <button className="close-modal" onClick={() => setActiveId(undefined)}>close</button>
                                    </div>
                                </div>
                            </div>
                            <div className="point-wraper">
                                <div className="point-holder12" onClick={() => setActiveId(12)}>
                                    <img src={point} alt="point" className="point"/>
                                </div>
                                <div className={`modal12 ${activeId === 12 ? "active" : null}`} >
                                    <div className="title-holder">
                                        <p className="title">Helm's Deep</p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            Helm's Deep, named for Helm Hammerhand, was a fortified gorge in the White Mountains located below the Thrihyrne. 
                                            It lay near the Westfold and was the location of the Hornburg. It was later made famous by the Battle of the 
                                            Hornburg, a major battle of the War of the Ring.
                                        </p>
                                    </div>
                                    <div className="modal-img-holder">
                                        <img src={helmsDeep} alt="img" className="modal-img" />
                                    </div>
                                    <div className="close-wraper">
                                        <a href="https://youtu.be/78IJdhvY1zg" className="video-modal" data-fancybox>video</a>
                                        <button className="close-modal" onClick={() => setActiveId(undefined)}>close</button>
                                    </div>
                                </div>
                            </div>
                            <div className="point-wraper">
                                <div className="point-holder13" onClick={() => setActiveId(13)}>
                                    <img src={point} alt="point" className="point"/>
                                </div>
                                <div className={`modal13 ${activeId === 13 ? "active" : null}`} >
                                    <div className="title-holder">
                                        <p className="title">Lothlórien</p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            Lothlórien, also known as Lórien, was a forest and Elven realm near the lower Misty Mountains. 
                                            It was first settled by Nandorin Elves, but they were later joined by a small number of Ñoldor 
                                            and Sindar under Celeborn of Doriath and Galadriel, daughter of Finarfin. It was located on the River 
                                            Celebrant, southeast of Khazad-dûm, and was the only place in Middle-earth where the golden Mallorn trees 
                                            grew. Galadriel's magic, later revealed as the power of her ring Nenya, enriched the land and made it a magic 
                                            forest into which evil could not enter without difficulty. The only way that Lothlórien could have been 
                                            conquered by the armies of Mordor is if Sauron had come there himself.
                                        </p>
                                    </div>
                                    <div className="modal-img-holder">
                                        <img src={lothorien} alt="img" className="modal-img" />
                                    </div>
                                    <div className="close-wraper">
                                        <a href="https://youtu.be/wbOvoGqraKY" className="video-modal" data-fancybox>video</a>
                                        <button className="close-modal" onClick={() => setActiveId(undefined)}>close</button>
                                    </div>
                                </div>
                            </div>
                            <div className="point-wraper">
                                <div className="point-holder14" onClick={() => setActiveId(14)}>
                                    <img src={point} alt="point" className="point"/>
                                </div>
                                <div className={`modal14 ${activeId === 14 ? "active" : null}`} >
                                    <div className="title-holder">
                                        <p className="title">Mount Doom</p>
                                    </div>
                                    <div className="text-holder">
                                        <p className="text">
                                            Mount Doom, also known as Orodruin and Amon Amarth, was a volcano in Mordor where the One 
                                            Ring was forged, and the only place it could be destroyed. It was the ultimate destination 
                                            for Frodo Baggins and Samwise Gamgee in the Quest of the Ring.
                                        </p>
                                    </div>
                                    <div className="modal-img-holder">
                                        <img src={mountDoom} alt="img" className="modal-img" />
                                    </div>
                                    <div className="close-wraper">
                                        <a href="https://youtu.be/c24-0Amwyik" className="video-modal" data-fancybox>video</a>
                                        <button className="close-modal" onClick={() => setActiveId(undefined)}>close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Map;