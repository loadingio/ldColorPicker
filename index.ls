<- $(document).ready
ldColorPicker.init!
ldColorPicker.set-palette <[#ac5d53 #e2b955 #f6fcc5 #32b343 #376aa9 #170326]>
ldColorPicker.set-palette \http://localhost/palette/ldwrnh

btn-color = document.getElementById("btn-color")
ldcp = new ldColorPicker(btn-color,{})
ldcp.on \change, (color)-> 
  btn-color.style.color = color


$(\#input).ldColorPicker()


