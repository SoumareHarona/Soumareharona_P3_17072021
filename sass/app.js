var myVar;
            
    function myFunction() {
         myVar = setTimeout(showPage, 3000);
        }
            
        function showPage() {
        document.getElementById("loader").s.display = "none";
        document.getElementById("site").style.display = "block";
        }
          