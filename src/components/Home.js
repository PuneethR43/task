import React from 'react'

function Home(){
    return(
        <div className="container">
            <p style={{fontSize:"40px", marginTop:"20px", textAlign:"center"}}>
                Become Your Most Unstoppable Yourself
            </p>
            <p style={{marginTop:"20px", color:"maroon", textAlign:"center"}}>
                Build skills with courses, certifications and degrees online from worldclass universities and companies
            </p>
            <div style={{textAlign:"center"}}>
                <button type="button" class="btn btn-outline-primary" data-toggle="button">Get Started</button>
                <button type="button" class="btn btn-outline-secondary" data-toggle="button">Free Trial</button>
            </div>
            <br/>
            <div className="container" style={{backgroundColor:"maroon"}}>
                <p style={{fontSize:"35px", color:"beige", textAlign:"start", marginTop:"20px"}}>
                    Adaptive Learning
                </p>
                <p style={{fontSize:"20px", color:"beige", textAlign:"start", marginTop:"20px", padding:"50px"}}>
                    The Best Learning Outcomes Happen When Adaptive Learning Technologies are combined.
                </p>

            </div>
                <h2 style={{fontSize:"35px", color:"maroon", marginTop:"20px"}}>
                    Lorem Ipsum
                </h2>
                <div className="col-md-6">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium ultrices augue, a ullamcorper mauris dictum a. Fusce scelerisque, nisi eget congue sodales, neque ante pharetra massa, vel placerat turpis mauris id nisi. Cras ut congue eros, eu rhoncus nibh. Sed massa eros, mattis eu lacus malesuada, elementum gravida sapien. Nunc dictum, mauris et pretium pretium, nunc metus vehicula dui, vel consectetur orci erat sed magna. Vivamus sollicitudin eleifend ex, tincidunt tempus velit egestas a. Etiam porta ullamcorper mauris, vitae tincidunt ante molestie at.
                    </p>
                </div>
                <h2 style={{color:"gray"}}>Register to Get Free Trial</h2>
                <button type="button" class="btn btn-outline-primary" data-toggle="button">
                    Premium Courses
                </button>
                <button type="button" class="btn btn-outline-secondary" data-toggle="button">
                    Free Trial
                </button>
            </div>
            
    )

}
export default Home