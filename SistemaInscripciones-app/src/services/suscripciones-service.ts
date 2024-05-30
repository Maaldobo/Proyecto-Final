const BASE_URL = 'https://backend-subs-control.onrender.com/api/suscripciones'

export async function getSuscripciones() {

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

export async function postSuscripcion(body: suscripcion) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
}

export async function deleteSuscripcion(id: string) {
  const response = await fetch(BASE_URL+'/'+id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
}