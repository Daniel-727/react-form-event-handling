import React from "react";

function App() {
  let [name, updateName] = React.useState(""); //the name here will always be updated when we change the value in the input
  let [click, updateBoolean] = React.useState(false); //since we only want the h1 to change when we click on the button we will have have the variable click turn true when it is clicked and show whatever name the input has typed

  function updateValue(event) {
    updateName(event.target.value); //event.target is whatever object or element that handled the event. So the input element has the onChange eventlistener which calls this updateValue function when there is a change. So the event.target is the input element.
  }

  function submit() {
    updateBoolean(!click);
  }

  return (
    <div className="container">
      <h1>Hello {click ? name : ""}</h1> {/* <--- this code over here will display the name if click is true (so if the button has been clicked) and will display nothing if button, or actually in this case, clicking the button will just toggle true/false, so the input value will appear and disappear accordingly*/}
      <input
        type="text"
        placeholder="What's your name?"
        onChange={updateValue} {/*whenever the user changes the value we want to update that change in our name variable*/}
        value={name}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
