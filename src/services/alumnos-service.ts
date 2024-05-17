export function getAlumnos(){

    return fetch('https://backend-subs-control.onrender.com/api/alumno')
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            return data
          })
            .catch((error) => {
              console.error('Error fetching data:', error)
            })
        }