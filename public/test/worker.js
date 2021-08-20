try {
    self.importScripts(
      'https://gist.githack.com/yhatt/fc5adb09c300e152e7a1a0e390d9c456/raw/cd5e6ff2b511029f150133b13fb27a8e06abc3d5/mw.js'
    )
    //self.addEventListener('message', e => console.log(e.data))
  } catch (e) {
    console.warn(e)
  }
  //self.postMessage()