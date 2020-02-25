//document.getElementById('res').call=fetchUserData();
var listOfCakes = document.createElement('ul')
listOfCakes.id = "myUL"
//document.getElementById('fetchuserdatabtn').addEventListener('click', fetchUserData);
  const url = 'http://localhost:5000/cakes'
  fetch(url)
    .then(res => res.json())
    .then(cakes => {
      cakes.forEach((cake)=> { 
      const cakeListItem = document.createElement('li')
      cakeListItem.id = cake[0]
      cakeListItem.type = 'none'
      const name = document.createElement('p')
      name.innerHTML=cake[1]
            

      const image = document.createElement("img")
      image.src = cake[4]
      image.width = 108;
      image.height = 150;
      image.align = 'left'

      const link = document.createElement("a")
      link.href = cake[2]
      link.innerHTML = 'Recipe Link'

      const space = document.createElement('br')
      const space1 = document.createElement('br')
      const description = document.createElement('p')
      description.innerHTML = cake[5]

cakeListItem.appendChild(name)
cakeListItem.appendChild(link)
cakeListItem.appendChild(space1)
cakeListItem.appendChild(image)
cakeListItem.appendChild(description)
cakeListItem.appendChild(space)

            listOfCakes.appendChild(cakeListItem)
            let creator = document.getElementById('cake')
            creator.appendChild(listOfCakes)
            
      // id = [ ` ${cakes[0]} ` ] 

    });

    });


