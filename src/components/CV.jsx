function CV({isSubmitted, generalData, educationData, experienceData}) {
    if (!isSubmitted){
        return(
            <>
            </>
        )
    }
    else{
        return(
            <div className="cv-container">
                <h1>CV:</h1>
                <h2>General Info:</h2>
                <div className="general-container">
                    {Object.entries(generalData).map(([key, value]) => (
                        <p key={key}>{formatGeneralData(key)}: {value}</p>
                        )
                    )}
                </div>

                {educationData.length > 0 ?
                <div>
                    <h2>Education:</h2>{
                        educationData.map(item => (
                            <div className="education-container" key={item.id}>
                                <p>School: {item.school}</p>
                                <p>Title of Study: {item.titleofstudy}</p>
                                <p>Date of Study: {item.dateofstudy}</p>
                            </div>
                        ))
                    }
                </div>
                : null
                }

                {experienceData.length > 0 ?
                <div>
                    <h2>Experience:</h2>{
                        experienceData.map(item => (
                            <div className="experience-container" key={item.id}>
                                <p>Company: {item.company}</p>
                                <p>Job Title: {item.jobtitle}</p>
                                <p>Date of Work: {item.dateofwork}</p>
                            </div>
                        ))
                    }
                </div>
                : null
                }
            </div>
        )
    }
}

function formatGeneralData(value){
    const words = value.split('_');
    if (words.length > 1){
        return words[0].charAt(0).toUpperCase() + words[0].slice(1) + ' ' + words[1].charAt(0).toUpperCase() + words[1].slice(1);
    }
    else{
        return words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }
}

export default CV
