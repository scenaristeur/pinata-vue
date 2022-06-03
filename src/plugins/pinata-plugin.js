//https://docs.pinata.cloud/authentication
var axios = require('axios');

var endpoint = 'https://api.pinata.cloud/data/'
const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log(store)

    Vue.prototype.$pinataGetCredentials = async function(){

    }
    Vue.prototype.$pinataTestAuthentication = async function(){
      let headers = process.env.PINATA_JWT != undefined ? {'Authorization': 'Bearer '+process.env.PINATA_JWT } : {pinata_api_key: process.env.PINATA_API_Key, pinata_secret_api_key: process.env.PINATA_API_Secret}
      var config = {
        method: 'get',
        url: endpoint+'testAuthentication',
        headers: headers
      };
      const res = await axios(config)
      console.log(res.data)
    }

    Vue.prototype.$pinataShowContent = async function (CID){
      window.open('https://gateway.pinata.cloud/ipfs/'+CID) //bafybeifx7yeb55armcsxwwitkymga5xf53dxiarykms3ygqic223w5sk3m
    }

    Vue.prototype.$pinataPinList = async function (){
      // let headers = process.env.PINATA_JWT != undefined ? {'Authorization': 'Bearer '+process.env.PINATA_JWT } : {pinata_api_key: process.env.PINATA_API_Key, pinata_secret_api_key: process.env.PINATA_API_Secret}
      // var config = {
      //   method: 'get',
      //   url: endpoint+'pinList',
      //   headers: headers
      // };
      // const res = await axios(config)
      // console.log(res.data)
      let result = await userPinList({status: "pinned"})
      //console.log(result.data)
      store.commit('data/setPinataList', result)
    }


    const userPinList = async function(queryParams) {
      let headers = process.env.PINATA_JWT != undefined ? {'Authorization': 'Bearer '+process.env.PINATA_JWT } : {pinata_api_key: process.env.PINATA_API_Key, pinata_secret_api_key: process.env.PINATA_API_Secret}

      let queryString = '?';
      if (queryParams.hashContains) {
        queryString = queryString + `hashContains=${queryParams.hashContains}&`;
      }
      if (queryParams.pinStartDate) {
        queryString = queryString + `pinStart=${queryParams.pinStartDate}&`;
      }
      if (queryParams.pinEndDate) {
        queryString = queryString + `pinEnd=${queryParams.pinEndDate}&`;
      }
      if (queryParams.unpinStartDate) {
        queryString = queryString + `unpinStart=${queryParams.unpinStartDate}&`;
      }
      if (queryParams.unpinEndDate) {
        queryString = queryString + `unpinEnd=${queryParams.unpinEndDate}&`;
      }
      if (queryParams.selectedPinStatus) {
        queryString = queryString + `status=${queryParams.selectedPinStatus}&`;
      }
      if (queryParams.unpinEndDate) {
        queryString = queryString + `unpinEnd=${queryParams.unpinEndDate}&`;
      }
      if (queryParams.unpinEndDate) {
        queryString = queryString + `unpinEnd=${queryParams.unpinEndDate}&`;
      }
      if (queryParams.pageLimit) {
        queryString = queryString + `pageLimit=${queryParams.pageLimit}&`;
      }
      if (queryParams.pageOffset) {
        queryString = queryString + `pageOffset=${queryParams.pageOffset}&`;
      }
      if (queryParams.nameContains) {
        queryString = queryString + `metadata[name]=${queryParams.nameContains}&`;
      }
      //Make sure keyvalues are properly formatted as described earlier in the docs.
      if (queryParams.keyvalues) {
        const stringKeyValues = JSON.stringify(queryParams.keyvalues);
        queryString = queryString + `metadata[keyvalues]=${stringKeyValues}`;
      }
      const url = endpoint+`pinList${queryString}`;
      return axios
      .get(url, {
        headers: headers
        // headers: {
        //     pinata_api_key: pinataApiKey,
        //     pinata_secret_api_key: pinataSecretApiKey
        // }
      })
      .then(function (response) {
        //handle response here
        console.log(response)
        return response
      })
      .catch(function (error) {
        console.log(error)
        return error
        //handle error here
      });
    };

  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
