

        function inputCheck(s){
            var x = document.getElementById("myForm").elements[0].value;
            var y = document.getElementById("myForm").elements[1].value;
            var z = document.getElementById("myForm").elements[2].value;
            var c = document.getElementById("comment").value;
            
            if (x == "" || y == "" || z == "" || s =="") {
                alert("CHECK YOUR INPUTS :)");
            } 
            else {
                
                alert("Dear "+x+" "+y+" , Thank you very much for your feedback. You have rated our site as "+s+" and your comment was "+c);
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
            inputCheck(s);
        }



        
