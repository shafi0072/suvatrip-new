
import { useState } from "react";
import { facilities } from "@/src/constant/admin/facality";
import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from "@mui/material";


const Facelities = () => {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <div className="">
       <div className="mt-3 row">
        <label htmlFor="" className="text-md font-bold text-center">
        Facelities
        </label>
        <div className="border p-3 rounded mt-2">
          <div className="row">
            {facilities.map((items) => (
              <div className="col-md-3">
                <FormControlLabel control={<Checkbox name="facelity" value={items}s/>} label={items} />
              </div>
            ))}
          </div>
        </div>
      </div>


        </div>
        )
      
}

export default Facelities;

