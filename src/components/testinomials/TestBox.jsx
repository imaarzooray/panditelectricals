

function TestBox({ratings, clientSays, clientName, serviceType, avatar})
{
    return (

        <div className="testBox">

             <div className="topSection">
                    <span className="ratings">
                        {ratings}
                    </span>
                </div>
                <div className="middleSection">

<span className="clientSayingText">
    <span className="quote">"</span>
    {clientSays}
    <span className="quote">"</span>
</span>
                </div>
                <div className="bottomSection">

<span className="clientName">
    
    <span className="clientNameIcon">
        < i class="ri-user-6-line"></i>
    </span>
    <span className="clientNameData">
{clientName}
    </span>
    </span>
<span className="serviceType">
    
    
    <span className="serviceTypeIcon">

< i class="ri-tools-fill"></i>
    </span>
    
    <span className="serviceTypeData">


    {serviceType}
    </span>

</span>
                </div>
        </div>
    )
}

export default TestBox