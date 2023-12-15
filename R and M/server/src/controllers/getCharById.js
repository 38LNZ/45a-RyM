const axios = require ("axios")

const getCharById = (res, id)=> {
    axios.get(`https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`)

.then(response=>response.data)
.then(data => {
    const character = {
        id:data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status
    }
     return res
        .writeHear(200, {"Content-type":"aplication/json"})
        .end(JSON.stringify(character))
})
        .catch(error =>
            res
            .writeHear(500, {"Content-type":"test/plain"})
            .end(JSON.stringify(error.message)))
}

//  console.log(character);

    


module.exports = getCharById