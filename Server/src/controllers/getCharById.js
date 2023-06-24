// const axios = require ('axios')

// function getCharById (res, id){
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(({name, gender, species, origin,image, status})=> {
//         const character = {
//         id,
//         name, 
//         gender, 
//         species, 
//         origin, 
//         image, 
//         status
//         }
//         return res
//                 .writeHead(200,{'Content-Type':'application/json'})
//                 .end(JSON.stringify(character))
//     })
//     .catch(error => {
//         return res
//         .writeHead(500, {'Content-Type':'text/plain'})
//         .end(error.message)
//     })
// }



// module.exports = {
//     getCharById
// }

const axios = require('axios')
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = (req, res) => {
    const { id } = req.params;

    axios(`${URL}/${id}`)
        .then(response => response.data)
        .then(({ name, gender, species, origin, image, status }) => {
            if (id && name) {
                const character = {
                    id,
                    name,
                    gender,
                    species,
                    origin,
                    image,
                    status
                }
                return res.status(200).json(character)
            }
            return res.status(404).send('Not found')

        })
        .catch(error => res.status(500).send(error.message))
}

module.exports = {
    getCharById
}