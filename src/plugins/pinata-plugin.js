//https://docs.pinata.cloud/authentication
var axios = require('axios');

var endpoint = 'https://api.pinata.cloud/data/'
const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log(store)

    Vue.prototype.$testAuthentication = async function(){
      let headers = process.env.PINATA_JWT != undefined ? {'Authorization': 'Bearer '+process.env.PINATA_JWT } : {pinata_api_key: process.env.PINATA_API_Key, pinata_secret_api_key: process.env.PINATA_API_Secret}
      var config = {
        method: 'get',
        url: endpoint+'testAuthentication',
        headers: headers
      };
      const res = await axios(config)
      console.log(res.data)
    }

    Vue.prototype.$showContent = async function (CID){
      window.open('https://gateway.pinata.cloud/ipfs/'+CID) //bafybeifx7yeb55armcsxwwitkymga5xf53dxiarykms3ygqic223w5sk3m
    }

  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
