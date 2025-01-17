function GeneralInfo({data, handleChange}) {
  return (
    <div className="general-container">
       <h2>General Info:</h2>
       <div><input type="text" placeholder="First Name" onChange={(e) => handleChange("firstname", e)}/></div>

       <div><input type="text" placeholder="Last Name" onChange={(e) => handleChange("lastname", e)}/></div>

       <div><input type="text" placeholder="Email" onChange={(e) => handleChange("email", e)}/></div>

       <div><input type="text" placeholder="Phone" onChange={(e) => handleChange("phone", e)} /></div>

       <div><input type="text" placeholder="Address" onChange={(e) => handleChange("address", e)} /></div>
    </div>
  )
}

export default GeneralInfo
