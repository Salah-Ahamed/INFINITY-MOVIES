const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');


//Show input error message
function showError(input, message) 
{
  //gets the parent div
  const formControl = input.parentElement;
  //applies error class and reapplies form-control class
  formControl.className = 'form-control error';
  //finds the small tag within this div
  const small = formControl.querySelector('small');
  //inserts the message parameter into the small tag
  small.innerText = message;
}

//Show success outline
function showSuccess(input) 
{
  //gets the parent div
  const formControl = input.parentElement;
  //applies success class and reapplies form-control class
  formControl.className = 'form-control success';
}

//Check to see if email is valid
function checkEmail(input) 
{
  const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //if (regular expression representing a valid email, then true else false)
  if (regExEmail.test(input.value.trim())) 
  {
    showSuccess(input);
  } else 
  {
    showError(input, 'A Valid Email is required');
  }
}

	

//check required fields
function checkRequired(inputArr) 
{
  //iterate through each slot in inputArr
  inputArr.forEach(function(input) 
  {
    //if not null, show success
    if (input.value.trim() === '') 
	{
      console.log(input.id);
      showError(input, `${getFieldName(input)} is required`);
    } 
	else
	{
      showSuccess(input);
    }
  });
}

function subscribe(frm)
{
		var email = frm.email.value;
		var name = frm.name.value; 
		if(name=="" &&  email=="")
		{
			// required fields not entered
		}
		else if (name=="")
		{
			// name not entered
		}
		else if (email=="")
		{
			// email not entered
		}
		else 
		{
			alert("Dear "+ name + ",you have successfully subscribed for a personalized newsletter");

		}
		
}



//Get the fieldname
//finds first letter and uppercases it, then slices off the old first letter and concatenates
function getFieldName(input) 
{
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners
form.addEventListener('submit', function(e) 
{
  // use preventDefault to keep the page from refreshing everytime you hit submit
  e.preventDefault();

  checkRequired([name, email]);
  checkEmail(email);
});
