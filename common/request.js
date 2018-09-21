import Cosmic from 'cosmicjs'
import config from '~/config/config'
import async from 'async'
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

function getSearchData(){
  return bucket.getObjects();
}

async function contactForm(data, contact){
  var url = 'https://your-sendgrid-cosmic-function-url.lambda.aws.com'
  var data = {
    to: 'you@youremail.com',
    from: `${data.email}`,
    subject: `Contact form submission: ${data.name}`,
    text_body: 'This is just a test',
    html_body: `<b>HELLO</b> ${data.name} ${data.email} ${data.phone} ${data.message}`
  }
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => {
    console.log('Success:', JSON.stringify(response))
    return {
      status: true,
      message: 'Message sent!'
    }
  })
  .catch(error => {
    console.error('Error:', error)
    return {
      error: true,
      message: 'Message NOT sent!'
    }
  })
  return res
}

function saveForm(data){
  //Send to Cosmic
  const params = {
    type_slug: 'form-submissions',
    title: data.name,
    content: data.message,
    
    metafields: [
    {
      title: 'Email',
      key: 'email',
      type: 'text',
      value: data.email
    },
    {
      title: 'Phone',
      key: 'phone',
      type: 'text',
      value: data.phone
    }
    ]
  }
  if (config.bucket.write_key)
    // Write to Cosmic Bucket (Optional)
    bucket.addObject(params, (err, response) => {
      return res.json({ status: 'success', data: response })
    })
}

export default {getGlobals,getPages,getBlogs,getSearchData,contactForm}
