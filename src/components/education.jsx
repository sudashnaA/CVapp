function EducationInfo({data, handleAddEducation, handleRemoveEducation, handleChange}) {
    const itemsList = data.map((item, index) => {
        return(
            <div className="education-container" key={item.id}>
                    <div><h2>Education {index + 1}:</h2></div>
                    <div><input type="text" placeholder="School" onChange={(e) => handleChange("school",item.id, e)}/></div>
                    <div><input type="text" placeholder="Title of study" onChange={(e) => handleChange("titleofstudy",item.id, e)}/></div>
                    <div><input type="text" placeholder="Date of study" onChange={(e) => handleChange("dateofstudy",item.id, e)}/></div>
                    <div><button onClick={(e) => handleRemoveEducation(item.id, e)}>Remove</button></div>
            </div>
        )
    })

    return (
        <div>
            <h2>Education:</h2>
            <button onClick={handleAddEducation}>+</button>
            <div>
                {itemsList}
            </div>
        </div>
    )
}

export default EducationInfo
