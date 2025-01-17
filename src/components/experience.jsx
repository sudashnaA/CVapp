import { useState } from "react"

function ExperienceInfo({data, handleAddExperience, handleRemoveExperience, handleChange}) {
    const itemsList = data.map((item,index) => {
        return(
            <div className="experience-container" key={item.id}>
                    <div><h2>Experience {index + 1}:</h2></div>
                    <div><input type="text" placeholder="Company" onChange={(e) => handleChange("company",item.id, e)}/></div>
                    <div><input type="text" placeholder="Job Title" onChange={(e) => handleChange("jobtitle",item.id, e)}/></div>
                    <div><input type="text" placeholder="Date of work" onChange={(e) => handleChange("dateofwork",item.id, e)}/></div>
                    <div><button onClick={(e) => handleRemoveExperience(item.id, e)}>Remove</button></div>
            </div>
        )
    })

    return (
        <div>
            <h2>Experience:</h2>
            <button onClick={handleAddExperience}>+</button>
            <div>
                {itemsList}
            </div>
        </div>
    )
}

export default ExperienceInfo
