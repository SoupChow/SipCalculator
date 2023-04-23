import React from 'react'


export default function Dashboard2(props) {
    let p =  parseInt(props.lump) ;
    let i =  parseInt(props.year) ;
    let r = parseFloat(props.percent);
    let total = p;
    for (let x=0 ; x<i ; x++){
        total*=(1+r/100)
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
                        <td className="px-3" ><h4 >Rs. {(p*1).toLocaleString('en-IN')}.00</h4></td>
                    </tr>
                    <tr>
                        <td>Expected returns </td>
                        <td className="px-1">:</td>
                        <td className="px-3"><h4 >Rs. {(total - p).toLocaleString('en-IN')}.00</h4></td>
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
