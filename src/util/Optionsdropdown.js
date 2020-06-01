import React from 'react';
import {Header, List, Label, Icon} from 'semantic-ui-react';

export let Optionsdropdown = [
        {   key: 0,
        	value: 0,
            text: "Favorite Players App",
            content: (<Label as='a' color="teal"> <Icon name='react'/>Favorite Players App </Label>),
        },
    	{
    		id: "webApp",
    		key: 1,
    		value: 1,
    		text: "Web App Portfolio",
            content: (<Label as='a' color="orange"> <Icon name='html5'/>Web app Portfolio </Label>),


    	},
        {
    		id: "react",
    		key: 2,
    		value: 2,
    		text: "React Web App",
            content: (<Label as='a' color="green"> <Icon name='node'/> Edfry React Web App </Label>),


    	},
    	{
    		id: "server",
    		key: 3,
    		value: 3,
    		text: "Express Web Server",
            content: (<Label as='a' color="black"> <Icon name='cloud'/>Express Web Server</Label>),


    	},
        {
    		id: "csharp",
    		key: 4,
    		value: 4,
    		text: "Soccer App",
            content: (<Label as='a' color="blue"> <Icon name='windows'/>Soccer App </Label>),


    	},
    	{
    		id: "bookFinder",
    		key: 5,
    		value: 5,
    		text: "Book Finder SPU",
            content: (<Label as='a' color="purple"> <Icon name='php'/>Book Finder SPU</Label>),


    	},
    	{
    		id: "structures",
    		key: 6,
    		value: 6,
    		text: "Data Structures",
            content: (<Label as='a' color="black"> <Icon name='share alternate'/>Data Structures </Label>),


    	},
    	{
    		id: "android",
    		key: 7,
    		value: 7,
    		text: "Android App",
    	    content: (<Header size="small" icon='android' color= 'green' content='Android Apps'/>),
            content: (<Label as='a' color="green"> <Icon name='android'/>Android Apps </Label>),


    	},
    	{
    		id: "micro",
    		key: 8,
    		value: 8,
    		text: "Microcontrollers",
            content: (<Label as='a' color="back"> <Icon name='microchip'/> Microcontrollers </Label>),


    	}

]
