$(document).ready(function() {

  function getItem() {
        $('#item').keydown(function (enter) {
            if (enter.keyCode == 13) {
                console.log("Success!");
            }
        });
    }

    getItem();

});


  



  //function getItem() {
  //      $('#add-items').keydown(function (enter) {
  //          if (enter.keyCode == 13) {
  //              postItem();
  //          }
  //      });
  //  }

  //  getItem();