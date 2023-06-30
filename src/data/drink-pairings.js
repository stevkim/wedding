import chardonnay from '../images/chardonnay.png';
import cabernet from '../images/cabernet.png';
import moscato from '../images/moscato.jpeg';
import sapporo from '../images/sapporo.png';
import lychee from '../images/lychee.jpeg';
import guinness from '../images/guinness.png'

export const DRINKPAIRINGS = [
  {
    type: 'wine',
    name: 'Chateau Ste. Michelle Chardonnay',
    image: chardonnay,
    description: 'On the dryer end, with a slight sweetness and creaminess like vanilla spice, as well as an array of stone and tropical fruit flavors.',
    pair: "Best with cheese and salad - if you don't mind dry wine, try this first at cocktail hour."
  },
  {
    type: 'wine',
    name: 'Chateau Ste. Michelle Cabernet Sauvignon',
    image: cabernet,
    description:'Washington red fruit, full-on notes of black currant along with dried herb and a kiss of spice.',
    pair: "Best enjoyed on its own or with the kalbi short ribs, order one to bring to the dinner table."
  },
  {
    type: 'wine',
    name: "Risata Moscato d'Asti",
    image: moscato,
    description:'"Seductively sweet", boasting juicy stone fruit, tart citrus and floral honey flavors',
    pair: "Best with our honey ginger salmon, get this for the toast if you prefer sweet bubbly over champagne."
  },
  {
    type: 'beer',
    name: 'Sapporo Premium Beer',
    image: sapporo,
    note: 'Classic, our "light" option.'
  },
  {
    type: 'beer',
    name: 'Taiwanese Lychee Beer',
    image: lychee,
    note: 'Sweet! Much less "beer" tasting.'
  },
  {
    type: 'beer',
    name: 'Guinness Stout',
    image: guinness,
    note: '"Dark" option, fairly dry finish'
  }
]