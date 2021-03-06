AFRAME.registerComponent("box-control",{
    schema:{
        z_pos:{type:"number",default:0},
        x_pos:{type:"number",default:0}
    },
    tick:function(){
        pos = this.el.getAttribute("position")
        window.addEventListener("keydown",(e)=>{
            if(e.key === "ArrowRight"){
                this.data.x_pos += 0.0005
            }if(e.key === "ArrowLeft"){
                this.data.x_pos -= 0.0005
            }
            if(e.key === "ArrowUp"){
                this.data.z_pos -= 0.1
            }
        })

        this.data.z_pos -= 0.05
        pos.z = this.data.z_pos
        pos.x = this.data.x_pos
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})