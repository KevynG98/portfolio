import React from 'react'
import { GiMusicalNotes } from "react-icons/gi";
import "./Footer.css";

function phrases(){
  let p = [
    "And when my task on earth is done, when, by thy grace, the victory's won, e'en death's cold wave I will not flee, since God through Jordan leadeth me.",
    "The heavens declare the glory of God; the skies proclaim the work of his hands. Psalms 19:1",
    "He leadeth me: O blessed thought! O words with heavenly comfort fraught! Whate'er I do, where'er I be, still 'tis God's hand that leadeth me.",
    "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight. Proverbs 3:5-6",
    "For the Lord gives wisdom; from his mouth come knowledge and understanding. Proverbs 2:6",
    "Commit to the Lord whatever you do, and he will establish your plans. Proverbs 16:3",
    "Though an army besiege me, my heart will not fear; though war break out against me, even then I will be confident. Psalms 27:3"
  ]
  return p;
}

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function Footer() {
  const style = {width:'25px', height:'100%'};
  var aleatorio = random(0, phrases().length - 1);

  return (
    <div className='footer'>
        <div className='socialMedia'>
          <p className='himn'>
            <GiMusicalNotes style={style}/>
            {

              <p>{phrases()[aleatorio]}</p>
              /* phrases().map(elemento =>(
                <p>{elemento}</p>
              )) */
            }
            <GiMusicalNotes style={style}/>
          </p>
        </div>
        <p> &copy; 2022 kevfgprogrammer.com</p>
    </div>
  )
}

export default Footer