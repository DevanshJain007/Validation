# Validation
Whenver we use form there is a input field and we handle those changes through the onChange method and also we use event and if you are using useref then we  use current for eg const name =useRef(null)
and when we changing means on change we called a function like onChange={formValidating}
in formValidating=(e)=>{e.preventDefault();
we access through this name.curreent.value and when we use without useRef we use e.target.name
#THE Three important method are validating and method2 and method 4 and when we use multiple states make a objects of those states for 
eg formData and SetFotm Data and in to acceess it when we trigger changes we firest use spread operatior so it will copu the previous value now the important fesature
when we wrote input and use nname property and use like this name='name and name='email'
and now to acces it when changes happen is through e.target.name and : e.target.value this means that
whatevet the name of the input for eg emial so the e.target.name wil email and for storing value we use e.target.value 
const [active, setActive] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
    setActive(true);
  };
<label className="font-medium">Username</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="name"
              onChange={handleChange}
