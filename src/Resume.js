import React from 'react';
import data from './data.json';
import logo1 from './images/profileicon.svg';

export default function Resume(props) {
        fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response=>response.json())
                .then(data=>console.log(data))

        let info=data.profile[props.location.data.id]
        console.log(info.basics.name)
    return (
        <div className="row justify-content-center" style={{backgroundColor:"black"}}>
            {/*profiledata/ left part */}
            <div className="col-lg-3 m-2" >
                <div className="card shadow" style={{backgroundColor:"#A9A9A9"}}>
                    <div class="card-body text-center">
                    <div>
                    <img src={logo1} alt="profileicon" style={{width:"30%"}}/>
                    <h2>{info.basics.name}</h2>
                     <h4 className="text-secondary">{info.basics.role}</h4>
    <a href={"tel:"+info.basics.phone}><h4 style={{color:"white"}}>{info.basics.phone}</h4></a>
                 <a href={"mailto::"+info.basics.email}><h4 style={{color:"white"}}>{info.basics.email}</h4></a>
                    </div>  
                    </div> 
                </div>
                
            </div>
            {/*profiledata/ right part */}
            <div className="col-lg-8 m-2"  >
                <div className="card shadow" style={{backgroundColor:"#A9A9A9"}} >
                    <div class="card body" style={{backgroundColor:"#A9A9A9"}}>
                    <h2 style={{textAlign:"center"}}>Resume</h2>
                    <h4>Career Objective:</h4>
                    <hr />
                    <p>{info.career}</p>
                    <h4>Education:</h4>
                    <hr />
                    <ul>
                        <li>{"Qualification:"+info.Education.qualification}</li>
                        <li>{"Course:"+info.Education.course}</li>
                        <li>{"University:"+info.Education.university}</li>
                        <li>{"PassingYear:"+info.Education.passingyear}</li>
                    </ul>
                    <h4>Skills And Interest</h4>
                    <hr />
                    <ol>
                        <li>{info.SkillsandInterest.s1}</li>
                        <li>{info.SkillsandInterest.s2}</li>
                        <li>{info.SkillsandInterest.s3}</li>
                        <li>{info.SkillsandInterest.s4}</li>
                    </ol>
                    <h4>Projects</h4>
                    <hr />
                    <p>{"*"+info.projects.p1}</p>
                    <p>{"*"+info.projects.p2}</p>
                    <h4>Personal Information</h4>
                    <hr />
                    <ul>
                        <li>{"DateofBirth:"+info.personal.DOB}</li>
                        <li>{"Age:"+info.personal.age}</li>
                        <li>{"Gender:"+info.personal.Gender}</li>
                        <li>{"Mother:"+info.personal.Mother}</li>
                        <li>{"Father:"+info.personal.Father}</li>
                        <li>{"Place_of_Birth:"+info.personal.Place_of_Birth}</li>
                    </ul>
                    </div>
                </div>
               

               
            </div>
        </div>
    )
}



