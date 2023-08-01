import axios from "axios";

export async function validateForm(name, value) {
  let msg = "";

  if (value.length == 0) return "*Field can't be empty";

  if (name == "fullname") {
    if (!value.match(/^[A-Za-z\s]+$/))
      msg = `*Name Should only contain alphabets`;
  } else if (name == "email") {
    if (!value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) msg = "*Invalid email.";
    try {
      let result = await axios.post(
        "http://localhost:5000/api/user/checkExistance",
        {
          email: value,
        }
      );
      console.log(result);
    } catch (error) {
      msg = "*" + error.response.data.message;
      console.log(error);
    }
  } else if (name == "number") {
    if (value.length != 10) msg = `*Number should be of 10 digits only.\n`;
    if (!value.match(/^[0-9]+$/)) msg += `*Numer should only contain digits.`;
    try {
      let result = await axios.post(
        "http://localhost:5000/api/user/checkExistance",
        {
          mobile: value,
        }
      );
      console.log(result);
    } catch (error) {
      msg = "*" + error.response.data.message;
      console.log(error);
    }
  } else if (name == "password") {
    if (value.length < 8) msg += `*atleast 8 characters.\n`;
    if (!value.match(/[a-z]/g)) msg += `*atleast one lowercase.\n`;
    if (!value.match(/[A-Z]/g)) msg += `*atleast one uppercase.\n`;
    if (!value.match(/[0-9]/g)) msg += `*atleast one digit.\n`;
    if (!value.match(/[!@#$%^&*]/g)) msg += `*atleast one special character.\n`;

    if (msg.length != 0) msg = "Password must contain\n" + msg;
  }

  console.log(msg);
  return msg;
}
