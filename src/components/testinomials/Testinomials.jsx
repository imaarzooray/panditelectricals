import Header from "../services/Header"
import TestBox from "./TestBox.jsx"


function Testinomials()
{
    return(

        <div className="testinomials">

            
            
            <div className="testinomialsUpper">
                <Header headerContent="What Our Clients Say" subHeaderContent="Real experiences from customers who trust Pandit Electricals for safe and reliable electrical solutions."/>
            </div>
             
            <div className="testinomialsLower">



   

                <TestBox 
               ratings="🌟🌟🌟🌟🌟"
               clientSays="It is a very good experience of my life that the work these people do, they do it very well and also like it. It`s their way of working. He has very good knowledge of his work, so I would like all of you to work with him because his work is very, very good"
               clientName="Prakash Raghav"
               serviceType="Motor Repairing"

               />

                <TestBox 
               ratings="🌟🌟🌟🌟🌟"
               clientSays="Hey guys kisi ko bhi electrical se related service chaiye ho to is shop se contact kare. Qki inki service or services dene ka tarika bahut hi lajawab h. mujhe to bahut hi pasand h . jinke bhi aas pass ye shop h wo contact jarur kare . sabko hi service acha milega"
               clientName="Bhanu Pratap Singh"
               serviceType="Motor Repairing"

               />


 <TestBox 
               ratings="🌟🌟🌟🌟🌟"
               clientSays="I have gone through the just dial app and find pandit electrician....fine service by hemant bhai....it is really value for money and time. This is really the best service they will give also you can buy second hand electric stuffs from here with full warrenty and best service no delay after call...they are always will be there for your help when you call..."
               clientName="Apoorva gupta"
               serviceType="Motor Repairing"

               />

               <TestBox 
               ratings="🌟🌟🌟🌟🌟"
               clientSays="The electrician was excellent at communicating throughout the job. He explained the problem and his solution clearly and answered any questions I had. He also provided advice on how to prevent similar issues in the Future."
               clientName="Ankit"
               serviceType="Motor Repairing"
               />


               <TestBox 
               ratings="🌟🌟🌟🌟🌟"
               clientSays="From initial contact with your company the service has been exceptional. We had four items to be addressed and could not be more happy with the work your electrician, Brand."
               clientName="Rajat"
               serviceType="Motor Repairing"
               />


              
           


 
               <TestBox 
               ratings="🌟🌟🌟🌟🌟"
               clientSays="I am fully satisfied by their service. They provide best repairing service for electricals equipment.

Looking forward to continue with them."
               clientName="Pankaj Kumar Ray"
               serviceType="Motor Repairing"

               />
             
            </div>

        </div>
    )
}

export default Testinomials