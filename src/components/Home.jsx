import React, { useState } from "react";
import Write from "./Write";

function Home(){
    // const postes=[
    //     {
    //         id:1,
    //         titre:"Greenwild: The World Behind The Door",
    //         description:"Daisy Thistledown has escaped from boarding school and has a mystery to solve. Her search for her missing mother will lead her across London and through a hidden doorway to another world, filled with plants and bursting with magic: the Greenwild.",
    //         image:"https://cdn.waterstones.com/override/v1/large/9781/0350/9781035015740.jpg"
    //     },
    //     {
    //         id:2,
    //         titre:"Wonka",
    //         description:"An intoxicating mix of magic and music, mayhem and emotion, all told with fabulous heart and humour - Wonka introduces readers to a young Willy Wonka, chock-full of ideas and determined to change the world one delectable bite at a time.",
    //         image:"https://cdn.waterstones.com/bookjackets/large/9780/2416/9780241618134.jpg"
    //     },
    //     {
    //         id:3,
    //         titre:"Looshkin: Honk If You See It! ",
    //         description:"a duck, becomes a high-flying entrepreneur and gets caught in a time warp.Sometimes all at the same time! It's an explosion of pure comic comedy joy!",
    //         image:"https://cdn.waterstones.com/bookjackets/large/9781/7884/9781788453134.jpg"
    //     },
    //     {
    //         id:4,
    //         titre:"Dog Man 12: The Scarlet Shedder",
    //         description:"P.U.! Dog Man got sprayed by a skunk! After being dunked in tomato juice, the stink is gone but the scarlet red colour remains. Now exiled, this sparky superhero must struggle to save the citizens who shunned him! Will the ends justify the means for Petey, who's reluctantly pulled back into a life of crime in order to help Dog Man? And who will step forward when an all-new, never-before-seen villain unleashes an army of A.I. robots?",
    //         image:"https://cdn.waterstones.com/bookjackets/large/9781/3388/9781338896435.jpg"
    //     },
    //     {
    //         id:5,
    //         titre:"Isadora Moon Helps Out",
    //         description:"Half vampire, half fairy, totally unique!Isadora is special because she is different. Her mum is a fairy and her dad is a vampire and she's a bit of both.",
    //         image:"https://cdn.waterstones.com/bookjackets/large/9780/1927/9780192778109.jpg"
    //     },
    //     {
    //         id:6,
    //         titre:"Powerless - The Powerless Trilogy",
    //         description:"A sizzling slice of fantasy romance set in an alluring magical world, Powerless follows the fortunes of Paedyn Gray - an ordinary mortal blending in with the dangerous Elites by pretending to be a Psychic.",
    //         image:"https://cdn.waterstones.com/bookjackets/large/9781/3985/9781398529489.jpg"
    //     }
    // ]
    //const [Poste,SetPoste]=useState(postes)
    return(
        <div>
        {/* <div className="home">
            {postes.map((post)=>
            <div className="post">
                <img src={post.image} alt={post.titre} />
                <div className="contenu">
                    <h2>{post.titre}</h2>
                    <p> {post.description} </p>
                    <button>Read more</button>
                </div>
            </div>
        )}
        </div> */}
        <Write />
        </div>
    )
}
export default Home;