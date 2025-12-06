Hooks.on("diceSoNiceReady", (dice3d) => {
        loadColors();
        // Defining the Clan color presets
        function loadColors(){
                dice3d.addColorset({
                        name: "l5r-crab",
                        description: "Crab",
                        category: "L5R-so-Nice",
                        foreground: "#000000",
                        background: "#0000a0",
                        outline: "#000000",
                        edge: "#0000a0",
                        material: "plastic",
                        texture: "paper",
                        font: "Amiri",
                        visibility: "visible"
                }, "default");
                dice3d.addColorset({
                        name: "l5r-crane",
                        description: "Crane",
                        category: "L5R-so-Nice",
                        foreground: "#000000",
                        background: "#5e5eff",
                        outline: "#000000",
                        edge: "#5e5eff",
                        material: "plastic",
                        texture: "paper",
                        font: "Amiri",
                        visibility: "visible"
                }, "default");
                dice3d.addColorset({
                        name: "l5r-dragon",
                        description: "Dragon",
                        category: "L5R-so-Nice",
                        foreground: "#000000",
                        background: "#004000",
                        outline: "#000000",
                        edge: "#004000",
                        material: "plastic",
                        texture: "paper",
                        font: "Amiri",
                        visibility: "visible"
                }, "default");
                dice3d.addColorset({
                        name: "l5r-imperial",
                        description: "Imperial",
                        category: "L5R-so-Nice",
                        foreground: "#345F5D",
                        background: "#FFF3D9",
                        outline: "#FFF3D9",
                        edge: "#345F5D",
                        material: "plastic",
                        texture: "paper",
                        font: "Amiri",
                        visibility: "visible"
                }, "default");
                dice3d.addColorset({
                        name: "l5r-lion",
                        description: "Lion",
                        category: "L5R-so-Nice",
                        foreground: "#000000",
                        background: "#919100",
                        outline: "#000000",
                        edge: "#919100",
                        material: "plastic",
                        texture: "paper",
                        font: "Amiri",
                        visibility: "visible"
                }, "default");
                dice3d.addColorset({
                        name: "l5r-mantis",
                        description: "Mantis",
                        category: "L5R-so-Nice",
                        foreground: "#000000",
                        background: "#009987",
                        outline: "#000000",
                        edge: "#009987",
                        material: "plastic",
                        texture: "paper",
                        font: "Amiri",
                        visibility: "visible"
                }, "default");
                dice3d.addColorset({
                        name: "l5r-monk",
                        description: "Monk",
                        category: "L5R-so-Nice",
                        foreground: "#684728",
                        background: "#FFFFFF",
                        outline: "#684728",
                        edge: "#FFFFFF",
                        material: "plastic",
                        texture: "paper",
                        font: "Amiri",
                        visibility: "visible"
                }, "default");
                dice3d.addColorset({
                        name: "l5r-phoenix",
                        description: "Phoenix",
                        category: "L5R-so-Nice",
                        foreground: "#000000",
                        background: "#d24400",
                        outline: "#000000",
                        edge: "#d24400",
                        material: "plastic",
                        texture: "paper",
                        font: "Amiri",
                        visibility: "visible"
                }, "default");
                dice3d.addColorset({
                        name: "l5r-ronin",
                        description: "Ronin",
                        category: "L5R-so-Nice",
                        foreground: "#FFFFFF",
                        background: "#555555",
                        outline: "#FFFFFF",
                        edge: "#555555",
                        material: "plastic",
                        texture: "paper",
                        font: "Amiri",
                        visibility: "visible"
                }, "default");
                dice3d.addColorset({
                        name: "l5r-scorpion",
                        description: "Scorpion",
                        category: "L5R-so-Nice",
                        foreground: "#000000",
                        background: "#800000",
                        outline: "#000000",
                        edge: "#800000",
                        material: "plastic",
                        texture: "paper",
                        font: "Amiri",
                        visibility: "visible"
                }, "default");
                dice3d.addColorset({
                        name: "l5r-shadow",
                        description: "Shadowlands",
                        category: "L5R-so-Nice",
                        foreground: "#001000",
                        background: "#000000",
                        outline: "#001000",
                        edge: "#000000",
                        material: "plastic",
                        texture: "paper",
                        font: "Amiri",
                        visibility: "visible"
                }, "default");
                dice3d.addColorset({
                        name: "l5r-spider",
                        description: "Spider",
                        category: "L5R-so-Nice",
                        foreground: "#000000",
                        background: "#003C00",
                        outline: "#000000",
                        edge: "#003C00",
                        material: "plastic",
                        texture: "paper",
                        font: "Amiri",
                        visibility: "visible"
                }, "default");
                dice3d.addColorset({
                        name: "l5r-unicorn",
                        description: "Unicorn",
                        category: "L5R-so-Nice",
                        foreground: "#000000",
                        background: "#400080",
                        outline: "#000000",
                        edge: "#400080",
                        texture: "paper",
                        material: "plastic",
                        font: "Amiri",
                        visibility: "visible"
                }, "default");
        }
        loadFaces();
        function loadFaces(){
                // Defining the Face styles
                dice3d.addSystem({id:"l5r-face-crab",name:"L5R - Crab"},false);
                dice3d.addSystem({id:"l5r-face-crane",name:"L5R - Crane"},false);
                dice3d.addSystem({id:"l5r-face-dragon",name:"L5R - Dragon"},false);
                dice3d.addSystem({id:"l5r-face-lion",name:"L5R - Lion"},false);
                dice3d.addSystem({id:"l5r-face-imperial",name:"L5R - Imperial"},false);
                dice3d.addSystem({id:"l5r-face-mantis",name:"L5R - Mantis"},false);
                dice3d.addSystem({id:"l5r-face-phoenix",name:"L5R - Phoenix"},false);
                dice3d.addSystem({id:"l5r-face-monk",name:"L5R - Monk"},false);
                dice3d.addSystem({id:"l5r-face-ronin",name:"L5R - Ronin"},false);
                dice3d.addSystem({id:"l5r-face-scorpion",name:"L5R - Scorpion"},false);
                dice3d.addSystem({id:"l5r-face-shadow",name:"L5R - Shadowlands"},false);
                dice3d.addSystem({id:"l5r-face-spider",name:"L5R - spider"},false);
                dice3d.addSystem({id:"l5r-face-unicorn",name:"L5R - Unicorn"},false);
                // Configuring the Faces themselves
                dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                          "1","2","3","4","5","6","7","8","9","modules/l5r-so-nice/faces/crab10.webp"
                        ],
                        //type:"dc",
                        //labels:[
                        //  "modules/l5r-so-nice/faces/shadowlands2.webp","modules/l5r-so-nice/faces/imperial1.webp"
                        //],
                        system:"l5r-face-crab"
                });
                dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                          "1","2","3","4","5","6","7","8","9","modules/l5r-so-nice/faces/crane10.webp"
                        ],
                        //type:"dc",
                        //labels:[
                        //  "modules/l5r-so-nice/faces/shadowlands2.webp","modules/l5r-so-nice/faces/imperial1.webp"
                        //],
                        system:"l5r-face-crane"
                });
                dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                          "1","2","3","4","5","6","7","8","9","modules/l5r-so-nice/faces/dragon10.webp"
                        ],
                        //type:"dc",
                        //labels:[
                        //  "modules/l5r-so-nice/faces/shadowlands2.webp","modules/l5r-so-nice/faces/imperial1.webp"
                        //],
                        system:"l5r-face-dragon"
                });
                dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                          "1","2","3","4","5","6","7","8","9","modules/l5r-so-nice/faces/imperial10.webp"
                        ],
                        //type:"dc",
                        //labels:[
                        //  "modules/l5r-so-nice/faces/shadowlands2.webp","modules/l5r-so-nice/faces/imperial1.webp"
                        //],
                        system:"l5r-face-imperial"
                });
                dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                          "1","2","3","4","5","6","7","8","9","modules/l5r-so-nice/faces/lion10.webp"
                        ],
                        //type:"dc",
                        //labels:[
                        //  "modules/l5r-so-nice/faces/shadowlands2.webp","modules/l5r-so-nice/faces/imperial1.webp"
                        //],
                        system:"l5r-face-lion"
                });
                dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                          "1","2","3","4","5","6","7","8","9","modules/l5r-so-nice/faces/mantis10.webp"
                        ],
                        //type:"dc",
                        //labels:[
                        //  "modules/l5r-so-nice/faces/shadowlands2.webp","modules/l5r-so-nice/faces/imperial1.webp"
                        //],
                        system:"l5r-face-mantis"
                });
                dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                          "1","2","3","4","5","6","7","8","9","modules/l5r-so-nice/faces/monk10.webp"
                        ],
                        //type:"dc",
                        //labels:[
                        //  "modules/l5r-so-nice/faces/shadowlands2.webp","modules/l5r-so-nice/faces/imperial1.webp"
                        //],
                        system:"l5r-face-monk"
                });
                dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                          "1","2","3","4","5","6","7","8","9","modules/l5r-so-nice/faces/phoenix10.webp"
                        ],
                        //type:"dc",
                        //labels:[
                        //  "modules/l5r-so-nice/faces/shadowlands2.webp","modules/l5r-so-nice/faces/imperial1.webp"
                        //],
                        system:"l5r-face-phoenix"
                });
                dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                          "1","2","3","4","5","6","7","8","9","modules/l5r-so-nice/faces/ronin10.webp"
                        ],
                        //type:"dc",
                        //labels:[
                        //  "modules/l5r-so-nice/faces/shadowlands2.webp","modules/l5r-so-nice/faces/imperial1.webp"
                        //],
                        system:"l5r-face-ronin"
                });
                dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                          "1","2","3","4","5","6","7","8","9","modules/l5r-so-nice/faces/scorpion10.webp"
                        ],
                        //type:"dc",
                        //labels:[
                        //  "modules/l5r-so-nice/faces/shadowlands2.webp","modules/l5r-so-nice/faces/imperial1.webp"
                        //],
                        system:"l5r-face-scorpion"
                });
                dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                          "1","2","3","4","5","6","7","8","9","modules/l5r-so-nice/faces/shadowlands10.webp"
                        ],
                        //type:"dc",
                        //labels:[
                        //  "modules/l5r-so-nice/faces/shadowlands2.webp","modules/l5r-so-nice/faces/imperial1.webp"
                        //],
                        system:"l5r-face-shadow"
                });
                dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                          "1","2","3","4","5","6","7","8","9","modules/l5r-so-nice/faces/spider10.webp"
                        ],
                        //type:"dc",
                        //labels:[
                        //  "modules/l5r-so-nice/faces/shadowlands2.webp","modules/l5r-so-nice/faces/imperial1.webp"
                        //],
                        system:"l5r-face-spider"
                });
                dice3d.addDicePreset({
                        type:"d10",
                        labels:[
                          "1","2","3","4","5","6","7","8","9","modules/l5r-so-nice/faces/unicorn10.webp"
                        ],
                        //type:"dc",
                        //labels:[
                        //  "modules/l5r-so-nice/faces/shadowlands2.webp","modules/l5r-so-nice/faces/imperial1.webp"
                        //],
                        system:"l5r-face-unicorn"
                });
        }

});
