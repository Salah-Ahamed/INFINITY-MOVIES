
function myFunction() {
            document.getElementById("myForm").reset();
        }

        function myFunction2(s){
            var a = document.getElementById("myForm").elements[0].value;
            var b = document.getElementById("myForm").elements[1].value;
            var c = document.getElementById("myForm").elements[7].value;
            var d = document.getElementById("NOItems").value;

            var array1 = []
            var array2 = []
            var array3 = []
            var checkboxes1 = document.querySelectorAll('input[type=checkbox]:checked')
            var checkboxes2 = document.querySelectorAll('input[type=checkbox]:checked')
            var checkboxes3 = document.querySelectorAll('input[type=checkbox]:checked')
            
            for (var i = 0; i < checkboxes1.length; i++) {
              array1.push(checkboxes1[i].value)
            }
            for (var i = 0; i < checkboxes2.length; i++) {
                array2.push(checkboxes2[i].value)
              }
            for (var i = 0; i < checkboxes3.length; i++) {
                array3.push(checkboxes3[i].value)
              }

            

            
            if (a == "" || b == "" || c == ""|| d =="none" || array1 =="" || array2 =="" || array3 =="" || s =="") {
                alert("CHECK YOUR INPUTS :)");
            } 
            else {
                
                alert("Dear " + a + " , Thank you for using INFINITY MOVIES, The recommended results will be shown in a while.");
            } 
        }

        function getRadioValue( radioArray ) {
            var i;
            for ( i = 0; i < radioArray.length; i++ ) {
                if ( radioArray[ i ].checked ) { 
                return radioArray[ i ].value;
                }
            }
            return "";
        }

        function show (frmRef){
            
            var s = getRadioValue(frmRef.r);
            myFunction2(s);
        }
