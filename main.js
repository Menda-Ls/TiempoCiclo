const prueba = 'hola'

window.onload = function () {
	const http = new XMLHttpRequest()
	let botonClima = document.querySelector('.botonInfo')
	let panelClimaa = document.querySelector('.panelClima')
	let ubicacionPanel = document.querySelector('.ubicacion')

	http.open('GET', 'http://api.weatherapi.com/v1/current.json?key=289737ee8243402e99744503202307&q=Buenos Aires')
	http.send()

	http.onreadystatechange = function () {
		http.responseText

		if (http.responseText === '') {
			return
		}

		const respuesta = JSON.parse(http.responseText)
		console.log(respuesta) 
		console.log(respuesta.current.temp_c)
		console.log(respuesta.location.name)
		let temperatura = respuesta.current.temp_c
		let ubicacionInfo = respuesta.location.name
		let humedad = respuesta.current.humidity
		let tiempo = respuesta.current.localtime

		botonClima.onclick = function () {
    	panelClimaa.style.visibility = 'visible'
    	botonClima.style.visibility = 'hidden'
    	ubicacionPanel.style.visibility = 'visible'
    	panelClimaa.innerHTML = temperatura
    	ubicacionPanel.innerHTML = ubicacionInfo

  		}

 		 botonClima.hover = function () {
		style.cursor = 'pointer'
 		 }
	}
	



}