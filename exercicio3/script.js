
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5,
    ataque:[]
}

// B 
const atk= {
    nome:"invertida",
     dano: 40,
     tipo: "normal",
     preciso: 100
    }


pokemon1.ataque.push(atk)

// C
const atk2 = {...atk,
    nome:"folha navalha",
dano:45,
preciso:100
}


pokemon1.ataque.push(atk2)

console.log(pokemon1)    




//                                          COPIA

const copiaPokemon= {...pokemon1,
    nome:"Squirtle",
    tipo:"agua", 
    ataque:[]
}



const atk4= {...atk}
copiaPokemon.ataque.push(atk4)

const atk3={
    nome:"Jato de agua",
    dano: 40,
    preciso:100,
    tipo:"agua"
}
copiaPokemon.ataque.push(atk3)




console.log(copiaPokemon)

