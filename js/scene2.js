function scene2() {

  console.log('Executing scene 2!')

  // Setup Stage
  castleImgSrc = castle.getAttribute('src')
stageImg.setAttribute('src', castleImgSrc)

  // Setup Cast

  // Character 1

joffContainer = document.createElement('div')
joffContainer.id = 'joff-container'
stage.append(joffContainer)
joffContainer.style.width = '8%'
joffContainer.style.position = 'absolute'
joffContainer.style.height = '31%'
joffContainer.style.top = '55%'
joffContainer.style.left = '55%'

joff = document.querySelector('#joffrey')
joffContainer.append(joff)
joff.style.width = '75%'
joff.style.position = 'absolute'
joff.style.left = '33%'

kingWardrobe = document.querySelector('#king')
joffContainer.append(kingWardrobe)
kingWardrobe.style.position = 'absolute'
kingWardrobe.style.bottom = 0
0

  // Character 2

  // Setup Props

  // Prop 1
  sword = document.querySelector('#sword')
stage.append(sword)
sword.style.position = 'absolute'
sword.style.top = '77%'
sword.style.left = '31%'
sword.style.height = '5%'
// First let's check where it's at:
sword.style.top
sword.style.left

// Now move it, move it, move it ...
sword.style.top = '70%'
sword.style.top = '60%'
sword.style.left = '35%'
sword.style.left = '45%'
sword.style.left = '55%'
sword.style.top = '61%'
sword.style.top = '62%'
sword.style.top = '63%'
sword.style.top = '64%'
sword.style.left = '54%'
sword.style.left = '53%'

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '31%'

  })

  // Stage direction 2

  frame(function() {
    sword.style.top = '64%'
sword.style.left = '53%'

  })

}
