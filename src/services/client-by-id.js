import { apiConfig } from "./api-config";

export async function getClientByid({id}) {
  try {
    const clientsResponse = await fetch(`${apiConfig.baseURL}/clients`);
    const clients = await clientsResponse.json();

    const client = clients.find(client => client.id === id);
    
    return client
  } catch (error) {
    alert('Não encontramos esse cliente! Confira se o id foi escrito corretamente e tente novamente!')
  }
}