import React from 'react'
import { connect } from 'react-redux';
import {getList} from '../redux/Action';
function mainPage(props) {
    //console.log(props.list)
    const currencies=props.list
    
    var list=[]
    for(var i in currencies){
        list.push({key:i,value:currencies[i]})
    }
    console.log(list);
    return (
        <div>
            <h1>Foreign currency rate (base:USD)</h1>
            <button onClick={props.getList}>Click to view list</button>
            <div className="currency-table">
  {
            (list)
            ?
            
            <table>
                {
                    list.map((post)=>(
                            <tr>
                                <th>{post.key}</th>
                                <th>{post.value}</th>
                            </tr>
                    ))
                }
            </table>
            :
            <div></div>}
</div>
           
        </div>
    )
}

const mapStateToProps = (state) => ({
    list: state.list,
    })
const mapDispatchToProps = {
    getList: getList
}

export default connect(mapStateToProps,mapDispatchToProps)(mainPage);
