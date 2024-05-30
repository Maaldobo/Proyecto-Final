const BASE_URL='https://backend-subs-control.onrender.com/api/clase'
export function getClases() {
  return fetch(BASE_URL) 
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    });
}

export async function postClase(body:clase){
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

export async function putClase(id: string, body: clase) {
 
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

export async function deleteClase(id: string) {
  const response = await fetch(BASE_URL+'/'+id, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    }
  })
  const data = await response.json()
  return data;
}

export async function getClaseByID(id:string) {
  const response=await fetch(BASE_URL+'?id='+id)
  const data=await response.json()
  return data
}