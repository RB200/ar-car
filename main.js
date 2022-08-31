AFRAME.registerComponent('drive',{
    init: function(){

        this.arrowEventListeners()
        this.accelerationEventListeners()
    },

    arrowEventListeners: function(){
        window.addEventListener('keydown',(e)=>{
            if(e.key === 'ArrowRight'){
                var wheelRotation = document.querySelector('#wheel').getAttribute('rotation')
                wheelRotation = {
                    x: 0,
                    y: 0,
                    z: -45
                }
                document.querySelector('#wheel').setAttribute('rotation',wheelRotation)
                console.log(wheelRotation)
            }
            if(e.key === 'ArrowLeft'){
                var wheelRotation = document.querySelector('#wheel').getAttribute('rotation')
                wheelRotation = {
                    x: 0,
                    y: 0,
                    z: 45
                }
                document.querySelector('#wheel').setAttribute('rotation',wheelRotation)
                console.log(wheelRotation)
            }
        })
        window.addEventListener('keyup',(e)=>{
            if(e.code === 'ArrowRight'){
                var wheelRotation = document.querySelector('#wheel').getAttribute('rotation')
                wheelRotation = {
                    x: 0,
                    y: 0,
                    z: 0,
                }
                document.querySelector('#wheel').setAttribute('rotation',wheelRotation)
            }
            else if(e.code === 'ArrowLeft'){
                var wheelRotation = document.querySelector('#wheel').getAttribute('rotation')
                wheelRotation = {
                    x: 0,
                    y: 0,
                    z: 0
                }
                document.querySelector('#wheel').setAttribute('rotation',wheelRotation)
            }
        })
    },
    accelerationEventListeners: function(){
        window.addEventListener('keydown',(e)=>{
            if(e.key === 'ArrowUp'){
                var cameraPos = document.querySelector('#camera').getAttribute('position')
                cameraPos = {
                    x: cameraPos.x,
                    y: cameraPos.y,
                    z: cameraPos.z - 0.1
                }
                document.querySelector('#camera').setAttribute('position',cameraPos)
            }
            if(e.key === 'ArrowDown'){
                var cameraPos = document.querySelector('#camera').getAttribute('position')
                cameraPos = {
                    x: cameraPos.x,
                    y: cameraPos.y,
                    z: cameraPos.z + 0.1
                }
                document.querySelector('#camera').setAttribute('position',cameraPos)
            }
        })

    },
})