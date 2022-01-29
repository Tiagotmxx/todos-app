export async function fetchAll(collection) {
  const response = await fetch(`http://localhost:3000/${collection}`);
  const body = await response.json();
  return body;
}

export async function create(collection, body) {
  return fetch(`http://localhost:3000/${collection}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export async function update(collection, id, body) {
  return fetch(`http://localhost:3000/${collection}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export async function remove(collection, id) {
  return fetch(`http://localhost:3000/${collection}/${id}`, {
    method: "DELETE",
  });
}
