var axios = require("axios");
var dadosRequisicao;


function universidadesListagem() {
    return axios.get("http://universities.hipolabs.com/search?country=uruguay")

}

dadosRequisicao = universidadesListagem();

dadosRequisicao.then(function(resposta) {
    console.log(resposta);

}).catch(function(error) {
    if(error) {
        console.log(error);
    }
    
})