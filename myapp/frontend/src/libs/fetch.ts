const baseUrl = 'http://localhost:8080'
const token = 'a'

/**
 * APIのGET
 * @param uri
 * @param body
 */
export const fetchData = async ({
  uri,
  body,
}: {
  uri: string
  body?: unknown
}) => {
  const res = await fetch(`${baseUrl}${uri}`, {
    method: 'GET',
    body: body ? JSON.stringify(body) : '',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    },
  })

  const data = res.json()

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`)
    return
  }

  return data
}

export const createData = async ({
  uri,
  body,
}: {
  uri: string
  body: unknown
}) => {
  const res = await fetch(`${baseUrl}${uri}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  const data = res.json()

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`)
    return
  }

  return data
}

export const updateDate = async ({
  uri,
  body,
}: {
  uri: string
  body: unknown
}) => {
  const res = await fetch(`${baseUrl}${uri}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  const data = res.json()

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`)
    return
  }

  return data
}

export const deleteData = async ({
  uri,
  body,
}: {
  uri: string
  body: unknown
}) => {
  const res = await fetch(`${baseUrl}${uri}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  const data = res.json()

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`)
    return
  }

  return data
}
