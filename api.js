var axios = require("axios");
var dadosRequisicao;



// Uruguay é a Universidade de Busca padrão //

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