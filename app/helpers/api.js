const OAuthToken = "AJK3JIDCMX3HVZD2HG"
const clientSecret = "IIIJXYZDBJSP3JHXEYWVCLOMSAN2G63BVOHXWTH3CZ3A3QAMGZ"
const baseURI = "https://www.eventbriteapi.com/v3"

export function queryEvents() {
  const uri = `${baseURI}/events/search/&q=&location_address=&location_latitude&location_longitude=?token=${OAuthToken}`
}

export function getEventCategories() {
  const uri = `${baseURI}/categories/?token=${OAuthToken}`
}