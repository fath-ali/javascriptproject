let inputs =document.querySelectorAll('.css-controller input');
inputs.forEach((inputs)=>inputs.addEventListener('change',update))

function update(){
    let suffixData =this.dataset.sizing ||"";
    document.documentElement.style.setProperty(
        (this.name),
        this.value + suffixData
    );
}
