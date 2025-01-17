import { useState } from 'react'
import './styles/App.css'
import GeneralInfo from './components/general'
import EducationInfo from './components/education';
import ExperienceInfo from './components/experience';
import CV from './components/CV';

const generalInfo = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  address: ''
}

const educationInfo = [];

const experienceInfo = [];

let errorText;


function App() {
  const [cvGeneralData, setcvGeneralData] = useState(generalInfo)
  const [cvEducationData, setcvEducationData] = useState(educationInfo);
  const [cvExperienceData, setcvExperienceData] = useState(experienceInfo);
  const [submitted, setSubmitted] = useState(false);
  const [errorText, setErrorText] = useState('');

  function handleGeneralInfoChange(value, e) {
    let newGeneralData;
    if (value === "firstname"){
      newGeneralData = {...cvGeneralData, first_name: e.target.value};
    }
    else if (value === "lastname"){
      newGeneralData = {...cvGeneralData, last_name: e.target.value};
    }
    else if (value === "email"){
      newGeneralData = {...cvGeneralData, email: e.target.value};
    }
    else if (value === "phone"){
      newGeneralData = {...cvGeneralData, phone: e.target.value};
    }
    else if (value === "address"){
      newGeneralData = {...cvGeneralData, address: e.target.value};
    }
    else{
      newGeneralData = cvGeneralData;
    }
    setcvGeneralData(newGeneralData);
  }

  function handleAddEducationChange() {
    setcvEducationData([
      ...cvEducationData,
     {
        id: crypto.randomUUID(),
        school: "",
        titleofstudy: "",
        dateofstudy: ""
     }
    ]
    )
  }

  function handleRemoveEducationChange(key) {
    setcvEducationData(
      cvEducationData.filter(item => item.id !== key)
    )
  }

  function handleEducationDataChange(value, key, e){
    cvEducationData.forEach(item => {
      if (item.id === key){
        if (value === "school"){
          item.school = e.target.value;
        }
        else if (value === "titleofstudy"){
          item.titleofstudy = e.target.value;
        }
        else if (value === "dateofstudy"){
          item.dateofstudy = e.target.value;
        }
      }
    })
    setcvEducationData(cvEducationData);
  }

  function handleAddExperienceChange() {
    setcvExperienceData([
      ...cvExperienceData,
     {
        id: crypto.randomUUID(),
        company: "",
        jobtitle: "",
        dateofwork: ""
        
     }
    ]
    )
  }

  function handleRemoveExperienceChange(key) {
    setcvExperienceData(
      cvExperienceData.filter(item => item.id !== key)
    )
  }

  function handleExperienceDataChange(value, key, e){
    cvExperienceData.forEach(item => {
      if (item.id === key){
        if (value === "company"){
          item.company = e.target.value;
        }
        else if (value === "jobtitle"){
          item.jobtitle = e.target.value;
        }
        else if (value === "dateofwork"){
          item.dateofwork = e.target.value;
        }
      }
    })
    setcvExperienceData(cvExperienceData);
  }

  function checkSubmit(){
    function checkIsEmpty(data){
        for (const [key, value] of Object.entries(data)){
          if (value.length <= 0){
            return true;
          }
        }
        return false;
    }

    function checkIsEmptyArr(arr){
      let empty = false;
      arr.forEach(item =>{
          if (checkIsEmpty(item)){
            empty = true;
          };
      });
      return empty;
    }

    if (checkIsEmpty(cvGeneralData))
    {
      setErrorText('Missing General Info');
    }
    else if (checkIsEmptyArr(cvEducationData)){
      setErrorText('Missing Education Info');
    }
    else if (checkIsEmptyArr(cvExperienceData)){
      setErrorText('Missing Experience Info');
    }
    else{
      setErrorText('');
      setSubmitted(!submitted);
    }
  }

  return (
    <div>
      <div className={!submitted ? '' : 'hidden'}>
      <GeneralInfo
        data = {cvGeneralData}
        handleChange={handleGeneralInfoChange}
      />
      <EducationInfo
        data = {cvEducationData}
        handleAddEducation={handleAddEducationChange}
        handleRemoveEducation={handleRemoveEducationChange}
        handleChange={handleEducationDataChange}
      />
      <ExperienceInfo
        data = {cvExperienceData}
        handleAddExperience={handleAddExperienceChange}
        handleRemoveExperience={handleRemoveExperienceChange}
        handleChange={handleExperienceDataChange}
      />
      </div>

      <button onClick={(e) => checkSubmit()} id='main-button'>{!submitted ? 'Submit' : 'Edit'}</button>
      <p id='errortext'>{errorText}</p>
      <CV
        isSubmitted={submitted}
        generalData = {cvGeneralData}
        educationData = {cvEducationData}
        experienceData = {cvExperienceData}
      />
    </div>
  )
}

export default App
