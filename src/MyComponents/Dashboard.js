import React from 'react'


export default function Dashboard(props) {
    let p =  parseInt(props.sip) ;
    let i =  parseInt(props.year) ;
    let r = parseFloat(props.percent);
    let total = 0;
    for (let x=0 ; x<i*12 ; x++){
        total=(total+p)*(1+r/1200)
    }
    total = total.toFixed(0);
    return (
        <div>
            <div className="container my-3" style={{ paddingLeft: "5%", border: "2px solid rgb(20,150,0)", borderRadius:"10%"}}>
                
                <h1 className='my-3'>Expected returns:</h1>
                <table className="my-3">
                    <tr>
                        <td>Amount invested</td>
                        <td className="px-1">:</td>
                        <td className="px-3" ><h4 >Rs. {(p*i*12).toLocaleString('en-IN')}.00</h4></td>
                    </tr>
                    <tr>
                        <td>Expected returns </td>
                        <td className="px-1">:</td>
                        <td className="px-3"><h4>Rs. {(total - (p*i*12)).toLocaleString('en-IN')}.00</h4></td>
                    </tr>
                    <tr>
                        <td>Total Value</td>
                        <td className="px-1">:</td>
                        <td className="px-3"><h4 style={{color:"rgb(0,150,0)"}}>Rs. {(total*1).toLocaleString('en-IN')}.00</h4></td>
                    </tr>
                </table>
            
                </div>
                </div>
      
  )
}
