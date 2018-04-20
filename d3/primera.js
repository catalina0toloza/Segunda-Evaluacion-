///aquí debes trabajar con datos de un arreglo o un objeto, incluido directamente en la variable data.
<script src="https://d3js.org/d3.v5.min.js"></script>
<script>

  d3.json("https://mindicador.cl/api/tasa_desempleo").then(function(data) {
    var precios = d3.values(data.serie);
    console.log(precios);
    //Selecciono el elemento de identidad "aqui", luego todos los li que serán creados dentro suyo
    d3.select("#aqui").selectAll("li").data(precios).enter().append("li").text(function(d) { return d.fecha.substr(0, d.fecha.indexOf('T')) + " → %" + d.valor});
    //Busco el máximo valor en la serie
    d3.select("#max").data(precios).text(d3.max(precios.map(function(d){return "En el último mes, el dólar más caro costó $" + d.valor+ " (" + d.fecha.substr(0, d.fecha.indexOf('T')) + ")";})))
    //Busco el menor valor en la serie
    d3.select("#min").data(precios).text(d3.min(precios.map(function(d){return ", mientras que el más barato costó $" + d.valor+ " (" + d.fecha.substr(0, d.fecha.indexOf('T')) + ")";})))
  })

</script>