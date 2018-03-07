import Cosmic from 'cosmicjs'
import config from '~/config/config'

const api = Cosmic()
const bucket = api.bucket({
  slug: config.bucket.slug,
  read_key: config.bucket.read_key,
  write_key: config.bucket.write_key
})

function getGlobals () {
    const params = {
      type_slug: 'globals'
    }
    return bucket.getObjectsByType(params);
}

function getPages () {
  const params = {
    type_slug: 'pages'
  };
  return bucket.getObjectsByType(params);
}

function getBlogs () {
  const params = {
    type_slug: 'blogs'
  };
  return bucket.getObjectsByType(params);
}



export default {getGlobals,getPages,getBlogs}
