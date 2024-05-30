const BASE_URL='https://backend-subs-control.onrender.com/api/alumno'

export async function getAlumnos(){

    return await fetch(BASE_URL)
      
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            return data
          })
            .catch((error) => {
              console.error('Error fetching data:', error)
            })
        }

export async function getAlumnoByUUID(uuid:string) {
  const response=await fetch(BASE_URL+'?uuid='+uuid)
  const data=await response.json()
  return data
}
export async function getAlumnoByID(id:string) {
  const response=await fetch(BASE_URL+'?id='+id)
  const data=await response.json()
  return data
}

export async function postStudents(body:alumno){
  const response = await fetch(BASE_URL,{
      method: 'POST',
      body : JSON.stringify(body),
      headers: {
          "Content-Type": "application/json"
        }
  })
  const data = response.json()

  return data
}

export async function putStudents(id: string, body: alumno) {
 
  const response = await fetch(BASE_URL+"/"+ id, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
          "Content-Type": "application/json"
      }
  });
  const data = await response.json();
  return data;
}

export async function deleteStudent(id: string) {
  const response = await fetch(BASE_URL+'/'+id, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    }
  })
  const data = await response.json()
  return data;
}
