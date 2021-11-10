const baseURL = '  http://localhost:3000';

class API {
    static fetchApartments = (success, failure) => {
        setTimeout(() => {
            fetch(`${baseURL}/apartments`)
                .then(response => response.json())
                .then(success)
                .catch(failure)
        }, 1000);
    };

    static deleteApartment = (success, failure, id) => {
        fetch(`${baseURL}/apartments/${id}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(success)
            .catch(failure)
    };
}

// API.fetchApartments(
//     (info)=>console.log('info gavom', info),
//     (error)=>console.log('gavom error', error)
// )
// ;
// API.deleteApartment(
//     (info)=>console.log('info gavom', info),
//     (error)=>console.log('gavom error', error),
//     '1'
// )