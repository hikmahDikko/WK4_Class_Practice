// Seamfix wants to create an application for storing the details of her students, the required details are, fullname, Twitter url, linked url, date of birth, phone numbers and a short description of their goal, which must not be more than 200 letters.

// Nouns
// - Seamfix, students,

// Attributes = fullname, twitter url, linkedin, date of birth, phone number and description


// OOP




// Functional approach

// Create an array of objects for storing all students data
// create a function that collect student data, the data need to filtered by regular expression to ensure its validity
// store the filtered data in the array of objects

const students = []

// function getStudentData(){
//   console.log("Working fine")
// }


const getStudentData = (fullname, twitter, linkedin,phoneNo, DOB, description)=>{
 const fullnameFilter = new RegExp('([A-Za-z])')
  const twitterfilter = new RegExp('((www.twitter.com)[/]([a-zA-Z0-9]+))') // twitter.com/x''yz''
  const linkedinfilter = new RegExp('((www.linkedin.com)[/]([a-zA-Z0-9]+))')
  const phoneNoFilter = new RegExp('([0-9]{11})')
  const DOBfilter = new RegExp('([0-9]{2}[/][0-9]{2}[/][0-9]{4})')
  const descriptionfilter = new RegExp('[a-z A-Z 0-9,\.&\-]{20,200}')
  if (fullnameFilter.test(fullname) && twitterfilter.test(twitter) && linkedinfilter.test(linkedin) &&  phoneNoFilter.test(phoneNo) &&  DOBfilter.test(DOB)  && descriptionfilter.test(description) ){
    const data = {   }
    data.fullname = fullname
    data.twitterUrl = twitter
    data.linkedinUrl = linkedin
    data.phoneNo = phoneNo
    data.dateOfBirth = DOB
    data.desc = description

    console.log(data)
    
    
  }
else{
  console.log("Invalid Data")
}
}


getStudentData("Moses Audu", 'www.twitter.com/moses', 'www.linkedin.com/moses',"09012345678", "03/08/2022", "moses audu is a backend developer at seamfix, and also love writing codes" )