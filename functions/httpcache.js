import 'regenerator-runtime/runtime'
import axios from 'axios'


const getUser = async (time) => {
    await axios.get('http://localhost:3001/user?time='+time)
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.error(error)
        })
}

getUser(1)

setTimeout(() => {
    getUser(2)
}, 5000)

setTimeout(() => {
    getUser(3)
}, 13000)
