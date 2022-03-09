// drag and drop for the VIP table


document.addEventListener('DOMContentLoaded', (event) => {

    function handleDragStart(e) {
        this.style.opacity = '0.4';
      
        dragSrcEl = this;
      
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
      }
  
    function handleDragEnd(e) {
      this.style.opacity = '1';
  
      items.forEach(function (item) {
        item.classList.remove('over');
      });
      
    }
  
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
  
      return false;
    }
  
    function handleDragEnter(e) {
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }
  
    function handleDrop(e) {
        e.stopPropagation();
      
        if (dragSrcEl !== this) {
          dragSrcEl.innerHTML = this.innerHTML;
          this.innerHTML = e.dataTransfer.getData('text/html');
        }
      
        return false;
      }

    let items = document.querySelectorAll('.vipRow .box');
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart);
      item.addEventListener('dragover', handleDragOver);
      item.addEventListener('dragenter', handleDragEnter);
      item.addEventListener('dragleave', handleDragLeave);
      item.addEventListener('dragend', handleDragEnd);
      item.addEventListener('drop', handleDrop);
      item.addEventListener('drop', handleDrop);
    });
  });



////////////////////////////////////////////////////////// load file 

function populateTable() {

    var tableContent = '';


    $.get( 'viplist.txt', function( data ) {

      alert(data);
      var lineByline = data.split('\n');
        $.each(lineByline , function(index,value){
            tableContent += '<tr>';
            tableContent += '<td>' + value + '</td>';
            tableContent += '</tr>';
        });


        $('#viptable').html(tableContent);
    });
};


////////////////////load sample VIP members to table

function sample(){
    var sample1 = document.getElementById("t1").innerHTML = "Andrew";
    var sample2 = document.getElementById("t2").innerHTML = "Robert";
    var sample3 = document.getElementById("t3").innerHTML = "Steve";


}













