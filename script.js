var btn = document.getElementById('sandeep');
var modal =document.getElementById('main_block');
var btnclose = document.getElementById('close_button')

btn.onclick = function() {
  modal.style.display = "block";
  btn.style.display = "none";

}

btnclose.onclick = function() {
  modal.style.display = "none";
  btn.style.display = "block";
}
