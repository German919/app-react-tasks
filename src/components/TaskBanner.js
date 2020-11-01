import React from "react"

const TaskBanner = ({userName, taskItems}) => {
    return ( 
        <h4 className="bg-primary text-white text-center p-4"> 
            {userName} is Task App ({taskItems.filter(t => !t.done).length} task to do)</h4>
     );
}
 
export default TaskBanner;