import API from './api'

const CONTACTS = {
  updateInternalOrganization: () => {
    return API.instance.get(`/jokes/random`)
  }
}

export default CONTACTS
