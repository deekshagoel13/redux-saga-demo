import React from 'react';

const List=({students})=>{
    console.log('asd',students);
    return(
        <div>{
            students.map((stud)=>{
                return(
                    <div>
                        {stud.Name}
                    </div>
                )
            })
        }</div>
    )
};
export default List;