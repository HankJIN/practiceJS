const sounds = ['oneShot1','oneShot2','oneShot3','oneShot4','oneShot5']


sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  btn.addEventListener('click', ()=>{
    stopSongs()


    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
})

function stopSongs(){
  sounds.forEach(sound =>{
    const song = document.getElementById(sound)

    song.pause()
    song.currentTime=0;
  })
}