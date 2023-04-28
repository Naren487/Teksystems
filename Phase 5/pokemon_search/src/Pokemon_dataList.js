import React  from 'react';
const data=
[   
    {
        "id":1,
        "name":"Pikachu",
        "image":<img alt="404" height={50} width={50} src="https://e7.pngegg.com/pngimages/476/159/png-clipart-pokemon-pikachu-pikachu-pokemon-games-pokemon-thumbnail.png" />,
        "cp":"535",
        "attack":"50",
        "defenceType":"40"


    },
    {
        "id":2,
        "name":"Gengar",
        "image":<img alt="404" height={50} width={50} src="https://e7.pngegg.com/pngimages/224/366/png-clipart-pikachu-haunter-gengar-gastly-pokemon-pikachu-purple-violet-thumbnail.png" />,
    
        "cp":"354",
        "attack":"40",
        "defenceType":"20"


    },{
        "id":3,
        "name":"Charizard",
        "image":<img alt="404"height={50} width={50}src="https://e1.pngegg.com/pngimages/347/222/png-clipart-charizard-render-extraction-pokemon-charizard-illustration-thumbnail.png" />,

        "cp":"665",
        "attack":"80",
        "defenceType":"50"


    },{
        "id":4,
        "name":"Lucario",
        "image":<img alt="404" height={50} width={50}src="https://e7.pngegg.com/pngimages/795/788/png-clipart-pokemon-sun-and-moon-lucario-pokemon-go-pikachu-shiny-lucario-mammal-carnivoran-thumbnail.png" />,

        "cp":"60",
        "attack":"50",
        "defenceType":"50"


    },{
        "id":5,
        "name":"Bulbasaur",
        "image":<img alt="404" height={50} width={50} src="https://www.businessinsider.in/thumb/msid-69890192,width-640,resizemode-4,imgsize-203385/4-Bulbasaur.jpg" />,

        "cp":"350",
        "attack":"50",
        "defenceType":"50"


    },{
        "id":6,
        "name":"Squirtle",
        "image":<img alt="404" height={50} width={50} src="https://www.businessinsider.in/thumb/msid-69890206,width-640,resizemode-4,imgsize-155045/14-Squirtle.jpg" />,

        "cp":"300",
        "attack":"60",
        "defenceType":"70"


    },{
        "id":7,
        "name":"Charmander",
        "image":<img alt="404"height={50} width={50} src="https://e7.pngegg.com/pngimages/227/909/png-clipart-pokemon-charmander-pokemon-go-pikachu-ash-ketchum-charmander-pokemon-orange-fictional-character-thumbnail.png" />,

        "cp":"300",
        "attack":"40",
        "defenceType":"30"


    },{
        "id":8,
        "name":"Venusaur",
        "image":<img alt="404" height={50} width={50} src="https://e7.pngegg.com/pngimages/62/63/png-clipart-pokemon-sun-and-moon-venusaur-bulbasaur-venusaur-food-dragon-thumbnail.png" />,

        "cp":"750",
        "attack":"80",
        "defenceType":"70"


    },{
        "id":9,
        "name":"Jigglypuff",
        "image":<img alt="404"height={50} width={50} src="https://e7.pngegg.com/pngimages/488/194/png-clipart-jigglypuff-illustration-pokemon-go-pikachu-jigglypuff-wigglytuff-pokemon-go-mammal-cat-like-mammal-thumbnail.png" />,

        "cp":"400",
        "attack":"60",
        "defenceType":"123"


    },{
        "id":10,
        "name":"Arcanine",
        "image":<img alt="404" height={50} width={50} src="https://www.businessinsider.in/thumb/msid-69890191,width-640,resizemode-4,imgsize-197883/3-Arcanine.jpg" />,

        "cp":"550",
        "attack":"60",
        "defenceType":"123"


    },{
        "id":11,
        "name":"Caterpie",
        "image":<img alt="404"height={50} width={50} src="https://e7.pngegg.com/pngimages/569/572/png-clipart-pokemon-caterpie-pokemon-x-and-y-pikachu-pokemon-vertebrate-cartoon-thumbnail.png" />,

        "cp":"250",
        "attack":"40",
        "defenceType":"123"


    },{
        "id":12,
        "name":"Arceus",
        "image":<img alt="404" height={50} width={50} src="https://e7.pngegg.com/pngimages/787/658/png-clipart-arceus-pokemon-universe-giratina-rayquaza-arceus-dragon-fictional-character-thumbnail.png" />,
        "cp":"650",
        "attack":"70",
        "defenceType":"123"


    },
    {
        "id":13,
        "name":"Blaziken",
        "image":<img alt="404" height={50} width={50} src="https://www.businessinsider.in/thumb/msid-69890193,width-640,resizemode-4,imgsize-122531/5-Blaziken.jpg" />,
    
        "cp":"550",
        "attack":"60",
        "defenceType":"123"


    },{
        "id":14,
        "name":"Gardevoir",
        "image":<img alt="404"height={50} width={50}src="https://www.businessinsider.in/thumb/msid-69890196,width-640,resizemode-4,imgsize-112206/8-Gardevoir.jpg" />,

        "cp":"650",
        "attack":"50",
        "defenceType":"123"


    },{
        "id":15,
        "name":"Lucario",
        "image":<img alt="404" height={50} width={50}src="https://www.businessinsider.in/thumb/msid-69890195,width-640,resizemode-4,imgsize-91289/7-Lucario.jpg" />,

        "cp":"450",
        "attack":"50",
        "defenceType":"123"


    },{
        "id":16,
        "name":"Dragonite",
        "image":<img alt="404" height={50} width={50} src="https://www.businessinsider.in/thumb/msid-69890198,width-640,resizemode-4,imgsize-132064/10-Dragonite.jpg" />,

        "cp":"650",
        "attack":"50",
        "defenceType":"123"


    },{
        "id":17,
        "name":"Absol",
        "image":<img alt="404" height={50} width={50} src="https://www.businessinsider.in/thumb/msid-69890200,width-640,resizemode-4,imgsize-109932/11-Absol.jpg" />,

        "cp":"450",
        "attack":"60",
        "defenceType":"123"


    },{
        "id":18,
        "name":"Typhlosion",
        "image":<img alt="404"height={50} width={50} src="https://www.businessinsider.in/thumb/msid-69890202,width-640,resizemode-4,imgsize-114593/12-Typhlosion.jpg" />,

        "cp":"450",
        "attack":"60",
        "defenceType":"123"


    },{
        "id":19,
        "name":"Flygon",
        "image":<img alt="404" height={50} width={50} src="https://www.businessinsider.in/thumb/msid-69890207,width-640,resizemode-4,imgsize-122492/15-Flygon.jpg" />,

        "cp":"600",
        "attack":"60",
        "defenceType":"123"


    },{
        "id":20,
        "name":"Ninetales",
        "image":<img alt="404"height={50} width={50} src="https://www.businessinsider.in/thumb/msid-69890209,width-640,resizemode-4,imgsize-184128/16-Ninetales.jpg" />,

        "cp":"800",
        "attack":"100",
        "defenceType":"123"


    },{
        "id":21,
        "name":"Tyranitar",
        "image":<img alt="404" height={50} width={50} src="https://www.businessinsider.in/thumb/msid-69890211,width-640,resizemode-4,imgsize-160001/17-Tyranitar.jpg" />,

        "cp":"550",
        "attack":"60",
        "defenceType":"123"


    },{
        "id":22,
        "name":"Infernape",
        "image":<img alt="404"height={50} width={50} src="https://www.businessinsider.in/thumb/msid-69890213,width-640,resizemode-4,imgsize-173856/18-Infernape.jpg" />,

        "cp":"690",
        "attack":"70",
        "defenceType":"123"


    }
]


export default data;