function autocompleteSearch() {
				var mostrar = document.querySelector('section#mostrar')

    const lista = ["w3schools", "curso em video", "GitHub", "google icons", "Udemy", "google fonts", "99Freelas", "digital innovation one", "Heroku", "Figma", "000webhost", "Origamid", "stack overflow", "alura", "devmedia", "jsfiddle", "codepen", "developer mozilla", "devfuria", "hora de codar", "qa stack", "Workana"]
    				
				let text = "";
				for (let i in lista) {
								text += `<i class="material-icons-outlined builder">query_builder</i> <i class="texto">${lista[i]}</i> <i class="material-icons-outlined close">close</i>` + "<br><br>";
				}

				mostrar.innerHTML = `${text}`;
}



function complete() {				
			 var complete = document.querySelector("div#complete")
				complete.style.display = 'block'
				
				const lista = ["primeiro", "segundo", "terceiro"]
				
				let text = "";
				for (let i in lista) {
								text += `<i class="material-icons-outlined builder">query_builder</i> <i class="texto">${lista[i]}</i> <i class="material-icons-outlined close">close</i>` + "<br><br><br>";
				}

				complete.innerHTML = `${text}`;
				var footer = document.querySelector('footer#id_footer')
				footer.style.margin = '250px 0 0 0'
				
				var button = document.querySelector('button#button_imagens')
				button.style.borderRadius = '20px 20px 0 0'
				button.style.borderBottom = 'none'
}


function fecharComplete() {
				var complete = document.querySelector('div#complete')
				complete.style.display = 'none'
				
				var footer = document.querySelector('footer#id_footer')
				footer.style.margin = '450px 0 0 0'
				
				var button = document.querySelector('button#button_imagens')
				button.style.borderRadius = '20px'
				button.style.borderBottom = '1px solid rgba(138, 138, 138, .3)'
				
				topFooter(x)				
}



var x = window.matchMedia("(orientation: landscape)")
x.addListener(topFooter)

function topFooter(x) {
				var footer = document.querySelector('footer#id_footer')

  		if (x.matches) {
			 				footer.style.margin = '40px 0 0 0'
				}
}
