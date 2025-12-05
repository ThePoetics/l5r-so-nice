Hooks.on('diceSoNiceReady', (dice3d) => {
        loadColors();
        // Defining the Clan color presets
        async function loadColors(){
                dice3d.addColorset({
                        name: 'l5r-crab',
                        description: "Crab",
                        category: "L5R-so-Nice",
                        foreground: '#000000',
                        background: "#0000a0",
                        outline: '#000000',
                        edge: '#0000a0',
                        material: 'plastic',
                        texture: 'paper',
                        font: 'Amiri',
                        visibility: 'visible'
                }, "default");
                dice3d.addColorset({
                        name: 'l5r-crane',
                        description: "Crane",
                        category: "L5R-so-Nice",
                        foreground: '#000000',
                        background: "#5e5eff",
                        outline: '#000000',
                        edge: '#5e5eff',
                        material: 'plastic',
                        texture: 'paper',
                        font: 'Amiri',
                        visibility: 'visible'
                }, "default");
                dice3d.addColorset({
                        name: 'l5r-dragon',
                        description: "Dragon",
                        category: "L5R-so-Nice",
                        foreground: '#000000',
                        background: "#004000",
                        outline: '#000000',
                        edge: '#004000',
                        material: 'plastic',
                        texture: 'paper',
                        font: 'Amiri',
                        visibility: 'visible'
                }, "default");
                dice3d.addColorset({
                        name: 'l5r-lion',
                        description: "Lion",
                        category: "L5R-so-Nice",
                        foreground: '#000000',
                        background: "#919100",
                        outline: '#000000',
                        edge: '#919100',
                        material: 'plastic',
                        texture: 'paper',
                        font: 'Amiri',
                        visibility: 'visible'
                }, "default");
                dice3d.addColorset({
                        name: 'l5r-phoenix',
                        description: "Phoenix",
                        category: "L5R-so-Nice",
                        foreground: '#000000',
                        background: "#d24400",
                        outline: '#000000',
                        edge: '#d24400',
                        material: 'plastic',
                        texture: 'paper',
                        font: 'Amiri',
                        visibility: 'visible'
                }, "default");
                dice3d.addColorset({
                        name: 'l5r-scorpion',
                        description: "Scorpion",
                        category: "L5R-so-Nice",
                        foreground: '#000000',
                        background: "#800000",
                        outline: '#000000',
                        edge: '#800000',
                        material: 'plastic',
                        texture: 'paper',
                        font: 'Amiri',
                        visibility: 'visible'
                }, "default");
                dice3d.addColorset({
                        name: 'l5r-unicorn',
                        description: "Unicorn",
                        category: "L5R-so-Nice",
                        foreground: '#000000',
                        background: "#400080",
                        outline: '#000000',
                        edge: '#400080',
                        texture: 'paper',
                        material: 'plastic',
                        font: 'Amiri',
                        visibility: 'visible'
                }, "default");
        }
        loadFaces();
        async function loadFaces(){
                // Defining the Face styles
                await dice3d.addSystem({id:"l5r-face-crab",name:"L5R - Crab"},false);
                await dice3d.addSystem({id:"l5r-face-crane",name:"L5R - Crane"},false);
                await dice3d.addSystem({id:"l5r-face-dragon",name:"L5R - Dragon"},false);
                await dice3d.addSystem({id:"l5r-face-lion",name:"L5R - Lion"},false);
                await dice3d.addSystem({id:"l5r-face-phoenix",name:"L5R - Phoenix"},false);
                await dice3d.addSystem({id:"l5r-face-scorpion",name:"L5R - Scorpion"},false);
                await dice3d.addSystem({id:"l5r-face-unicorn",name:"L5R - Unicorn"},false);
                // Configuring the Faces themselves
                await dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                                '1','2','3','4','5','6','7','8','9','modules/l5r-so-nice/faces/crab10.webp'
                        ],
                        system:"l5r-face-crab"
                });
                await dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                                '1','2','3','4','5','6','7','8','9','modules/l5r-so-nice/faces/crane10.webp'
                        ],
                        system:"l5r-face-crane"
                });
                await dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                                '1','2','3','4','5','6','7','8','9','modules/l5r-so-nice/faces/dragon10.webp'
                        ],
                        system:"l5r-face-dragon"
                });
                await dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                                '1','2','3','4','5','6','7','8','9','modules/l5r-so-nice/faces/lion10.webp'
                        ],
                        system:"l5r-face-lion"
                });
                await dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                                '1','2','3','4','5','6','7','8','9','modules/l5r-so-nice/faces/phoenix10.webp'
                        ],
                        system:"l5r-face-phoenix"
                });
                await dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                                '1','2','3','4','5','6','7','8','9','modules/l5r-so-nice/faces/scorpion10.webp'
                        ],
                        system:"l5r-face-scorpion"
                });
                await dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                                '1','2','3','4','5','6','7','8','9','modules/l5r-so-nice/faces/unicorn10.webp'
                        ],
                        system:"l5r-face-unicorn"
                });
        }

});
