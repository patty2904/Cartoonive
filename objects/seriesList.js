import {Image} from 'react-native';

import ATLA from '../assets/avatars/atla.png';
//const atlaUrii = Image.resolveAssetSource(ATLA).uri;
//const atlaUri = '\'../assets/avatars/atla.png\'';
//const atlaUri = ATLA;
import AT from '../assets/avatars/at.png';
import BENTEN from '../assets/avatars/benten.png';
import PPG from '../assets/avatars/ppg.png';
import GUMBALL from '../assets/avatars/gumball.png';
import KP from '../assets/avatars/kp.png';

    export const seriesList = {
        '1': {
            name :"Avatar The Last Airbender", 
		    year:"2005", 
		    description: "The series is centered around the journey of 12-year-old Aang, the current Avatar and last survivor of his nation, the Air Nomads, along with his friends Katara, Sokka, and later Toph, as they strive to end the Fire Nation's war against the other nations of the world.",
		    uri: ATLA,
		    hasAdded: false,
		    rating: null
        },
        '2' : {
            name:"The Powerpuff Girls", 
			year:"1998", 
			description: "The Powerpuff Girls, defenders of the fictional metropolis Townville, consist of the red-haired, level-headed leader, Blossom; the sweet, blonde, and often underestimated Bubbles; and the quick-tempered, black-haired Buttercup.",
			uri: PPG,
			hasAdded: false,
			rating: null
        },
		'3' : {
            name:"Adventure Time", 
			year:"2010", 
			description: "Adventure Time follows the adventures of a boy named Finn the Human, and his best friend and adoptive brother Jake the Dog, who has magical powers to change shape and size at will.",
			uri: AT,
			hasAdded: false,
			rating: null
        },
		'4' : {
            name:"Ben 10", 
			year:"2005", 
			description: "The series is about a 10-year-old boy named Ben Tennyson who gets a watch-style alien device called the Omnitrix. Attached to his wrist, it allows him to transform into various alien creatures with different abilities, allowing him to fight evil from Earth and space with his cousin Gwen and grandfather Max.",
			uri: BENTEN,
			hasAdded: false,
			rating: null
        },
		'5' : {
            name:"The Amazing World of Gumball", 
			year:"2011", 
			description: "The Amazing World of Gumball follows the misadventures of Gumball, a twelve-year-old cat. With the help of his best friend Darwin, his former pet goldfish that grew legs and joined the family, he gets into all sorts of antics. He is joined by his sister, Anais, a four-year-old bunny with heightened intelligence.",
			uri: GUMBALL,
			hasAdded: false,
			rating: null
        },
		'6' : {
            name:"Kim Possible", 
			year:"2002", 
			description: "Kim Possible is about a high-school cheerleader who, with the help of her best friend Ron Stoppable and his pet naked mole rat Rufus, saves the world from various comical villains and still finds time to be a relatively normal girl with crushes, extracurricular activities, and high-school rivals.",
			uri: KP,
			hasAdded: false,
			rating: null
        }
    }

    